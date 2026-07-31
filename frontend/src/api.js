import axios from "axios";
import logo from "./assets/koodhmg-logo.png";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

// Map a Koodh news article to the shape used by WorkCard (layout unchanged)
export const mapArticleToWorkItem = (a) => ({
  id: a.id,
  to: `/work/${a.id}`,
  cover: a.image_url,
  hover: a.image_url,
  icon: logo,
  client: (a.category && a.category.name) || "Koodh Media Group",
  category: formatDate(a.published_at),
  title: a.title,
});

export const fetchWorkItems = async () => {
  const res = await axios.get(`${API}/work`);
  const items = (res.data && res.data.items) || [];
  return items.map(mapArticleToWorkItem);
};

export const fetchFeedItems = async (category) => {
  const res = await axios.get(`${API}/feed/${category}`);
  const items = (res.data && res.data.items) || [];
  return items.map(mapArticleToWorkItem);
};

export const fetchWorkArticle = async (id) => {
  const res = await axios.get(`${API}/work/${id}`);
  return res.data;
};

export { formatDate };
