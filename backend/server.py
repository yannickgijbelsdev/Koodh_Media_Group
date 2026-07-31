from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
import httpx
import smtplib
import asyncio
from email.message import EmailMessage
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# ===== Koodh News API proxy (avoids CORS / mixed-content from HTTPS frontend) =====
KOODH_NEWS_BASE = "https://clr.koodh.com/api/news"
# Site/category that powers the homepage carousel and the Work grid.
KOODH_WORK_FEED = os.environ.get("KOODH_WORK_FEED", "koodh-media-group/homepagina")

@api_router.get("/work")
async def get_work_items():
    """Proxy the Koodh news list endpoint used to power the Work grid."""
    try:
        async with httpx.AsyncClient(timeout=20, follow_redirects=True) as http:
            resp = await http.get(f"{KOODH_NEWS_BASE}/{KOODH_WORK_FEED}")
            resp.raise_for_status()
            return resp.json()
    except Exception as e:
        logger.error(f"Failed to fetch Koodh work list: {e}")
        return {"items": [], "count": 0, "error": str(e)}

@api_router.get("/work/{article_id}")
async def get_work_item(article_id: str):
    """Proxy the Koodh article detail endpoint used when opening a project."""
    try:
        async with httpx.AsyncClient(timeout=20, follow_redirects=True) as http:
            resp = await http.get(f"{KOODH_NEWS_BASE}/articles/{article_id}")
            resp.raise_for_status()
            return resp.json()
    except Exception as e:
        logger.error(f"Failed to fetch Koodh article {article_id}: {e}")
        return {"error": str(e)}

# ===== Contact form =====
class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

CONTACT_TO = os.environ.get("CONTACT_TO", "info@koodh.com")

def _send_contact_email(payload: ContactMessage):
    host = os.environ.get("SMTP_HOST")
    port = int(os.environ.get("SMTP_PORT", "587"))
    user = os.environ.get("SMTP_USER")
    password = os.environ.get("SMTP_PASSWORD")
    sender = os.environ.get("SMTP_FROM", user)

    if not (host and user and password and sender):
        raise RuntimeError("SMTP is not configured")

    msg = EmailMessage()
    msg["Subject"] = f"New contact message from {payload.name}"
    msg["From"] = sender
    msg["To"] = CONTACT_TO
    msg["Reply-To"] = payload.email
    msg.set_content(
        f"You received a new message via the Koodh website contact form.\n\n"
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n\n"
        f"Message:\n{payload.message}\n"
    )

    use_ssl = os.environ.get("SMTP_SSL", "false").lower() == "true"
    if use_ssl:
        with smtplib.SMTP_SSL(host, port, timeout=20) as server:
            server.login(user, password)
            server.send_message(msg)
    else:
        with smtplib.SMTP(host, port, timeout=20) as server:
            server.starttls()
            server.login(user, password)
            server.send_message(msg)

@api_router.post("/contact")
async def submit_contact(payload: ContactMessage):
    # Always store the submission so nothing is lost.
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name,
        "email": payload.email,
        "message": payload.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "emailed": False,
    }

    email_sent = False
    email_error = None
    try:
        await asyncio.to_thread(_send_contact_email, payload)
        email_sent = True
        doc["emailed"] = True
    except Exception as e:
        email_error = str(e)
        logger.error(f"Contact email not sent: {e}")

    try:
        await db.contact_messages.insert_one(doc)
    except Exception as e:
        logger.error(f"Failed to store contact message: {e}")

    return {"success": True, "email_sent": email_sent, "email_error": email_error}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()