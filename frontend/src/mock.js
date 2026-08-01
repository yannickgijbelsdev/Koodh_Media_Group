// Mock data for Koodh Brand Consultants clone
import thomasmoreLogo from "./assets/clients/thomasmore_w.svg";
import radiogroepLogo from "./assets/clients/radiogroep_w.png";
import wonderlandLogo from "./assets/clients/wonderland_w.png";
import grkLogo from "./assets/clients/grk_w.png";
import ovbLogo from "./assets/clients/ovb_w.svg";
import topLogo from "./assets/clients/top_w.png";

const IMG = "https://saffron.imgix.net";
const p = "?ixlib=js-3.8.0&q=80&auto=format%2Ccompress&fit=crop";

export const navLinks = [
  { label: "WORK", to: "/work" },
  { label: "ABOUT", to: "/about" },
  { label: "MEET US", to: "/meet-us" },
  { label: "PHOTOGRAPHY", to: "/photography" },
  { label: "AUDIO", to: "/audio" },
  { label: "FAQ", to: "/faq" },
  { label: "CONTACT", to: "/contact" },
];

// Hero carousel slides. Videos linked to YouTube (in-app viewer)
export const heroSlides = [
  {
    id: "youtube",
    name: "YouTube",
    icon: `${IMG}/Case-Studies/Youtube_CS/Gallery/YouTube_Icon_1x1.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Youtube_CS/Gallery/YouTube_Cover_IMG_1x1.png${p}&w=1920`,
    youtube: "9bZkp7q19f0",
    to: "/work/youtube",
  },
  {
    id: "repsol",
    name: "Repsol",
    icon: `${IMG}/Case-Studies/Repsol_CS/Gallery/Repsol_Icon_1x1.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Repsol_CS/Gallery/Repsol_Hover_IMG_1x1_1.png${p}&w=1920`,
    youtube: " scy6Hk8t3ac".trim(),
    to: "/work/repsol",
  },
  {
    id: "meta",
    name: "Meta",
    icon: `${IMG}/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Icon_1x1.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Hover_IMG_1x1_1.png${p}&w=1920`,
    youtube: "AbZH7XWDW_k",
    to: "/work/meta",
  },
  {
    id: "va",
    name: "V&A",
    icon: `${IMG}/Case-Studies/Victoria-and-Albert-Museum_CS/Gallery/VA_Icon_1x1_v2.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_2.png${p}&w=1920`,
    youtube: "1La4QzGeaaQ",
    to: "/work/victoria-and-albert-museum",
  },
  {
    id: "amazon-ads",
    name: "Amazon Ads",
    icon: `${IMG}/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Icon_1x1_3.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_2.png${p}&w=1920`,
    youtube: "mn1TuBSGH9M",
    to: "/work/amazon-ads",
  },
];

export const teaserImages = [
  `${IMG}/Home/Teaser-Gallery/FRAME-1.png${p}&w=600&h=600`,
  `${IMG}/Home/Teaser-Gallery/FRAME-2.png${p}&w=600&h=600`,
  `${IMG}/Home/Teaser-Gallery/Web_Home_Action_1x1.webp${p}&w=600&h=600`,
];

const cover = (path) => `${IMG}${path}${p}&w=800&h=800`;
const avatar = (path) => `${IMG}${path}${p}&w=96&h=96`;

export const caseStudies = [
  {
    id: "repsol",
    client: "Repsol",
    category: "Energy & Industrial",
    title: "Confluence of energies",
    icon: avatar("/Case-Studies/Repsol_CS/Gallery/Repsol_Icon_1x1.png"),
    cover: cover("/Case-Studies/Repsol_CS/Gallery/Repsol_Hover_IMG_1x1_1.png"),
    hover: cover("/Case-Studies/Repsol_CS/Gallery/Repsol_Hover_IMG_1x1_3.png"),
    to: "/work/repsol",
  },
  {
    id: "cupra",
    client: "Cupra",
    category: "Mobility & Hospitality",
    title: "The impulse of a new generation",
    icon: avatar("/Case-Studies/Cupra_CS/Gallery/Cupra_Icon.png"),
    cover: cover("/Case-Studies/Cupra_CS/Gallery/Cupra-CS_Hover_1.png"),
    hover: cover("/Case-Studies/Cupra_CS/Gallery/Cupra-CS_Hover_3.1.png"),
    to: "/work/cupra",
  },
  {
    id: "meta",
    client: "Meta",
    category: "Technology",
    title: "The next chapter of social connection",
    icon: avatar("/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Icon_1x1.png"),
    cover: cover("/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Hover_IMG_1x1_1.png"),
    hover: cover("/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Hover_IMG_1x1_3.png"),
    to: "/work/meta",
  },
  {
    id: "youtube",
    client: "YouTube",
    category: "Technology",
    title: "Taking the tube out of YouTube",
    icon: avatar("/Case-Studies/Youtube_CS/Gallery/YouTube_Icon_1x1.png"),
    cover: cover("/Case-Studies/Youtube_CS/Gallery/YouTube_Cover_IMG_1x1.png"),
    hover: cover("/Case-Studies/Youtube_CS/Gallery/YouTube_Hover_IMG_1x1_2.png"),
    to: "/work/youtube",
  },
  {
    id: "jr-west",
    client: "West Japan Railway Company",
    category: "Mobility & Hospitality, Places & Real Estate",
    title: "The extraordinary in plain sight",
    icon: avatar("/Case-Studies/JR-West_CS/Gallery/JR-Wes_Avatar.png"),
    cover: cover("/Case-Studies/JR-West_CS/Gallery/JR-West_Cover_1.webp"),
    hover: cover("/Case-Studies/JR-West_CS/Gallery/JR-West_Hover_3.webp"),
    to: "/work/west-japan-railway-company",
  },
  {
    id: "play",
    client: "Play Media",
    category: "Culture & Media",
    title: "Rewriting the rules of Play",
    icon: avatar("/Case-Studies/Play-Media_CS/Gallery/Play_Icon_Avatar_1x1.png"),
    cover: cover("/Case-Studies/Play-Media_CS/Gallery/Play-Media_CS_P1_4x5_1_3x.webp"),
    hover: cover("/Case-Studies/Play-Media_CS/Gallery/Play-Media_CS_Gallery_2_3x.webp"),
    to: "/work/play",
  },
  {
    id: "city-of-vienna",
    client: "City of Vienna",
    category: "Places & Real Estate",
    title: "The Human at the Heart",
    icon: avatar("/Case-Studies/City-of-Vienna_CS/Gallery/City-of-Vienna_Icon_1x1_v2.png"),
    cover: cover("/Case-Studies/City-of-Vienna_CS/Gallery/City-of-Vienna_Hover_IMG_1x1_1.png"),
    hover: cover("/Case-Studies/City-of-Vienna_CS/Gallery/City-of-Vienna_Hover_IMG_1x1_3.png"),
    to: "/work/city-of-vienna",
  },
  {
    id: "vueling",
    client: "Vueling",
    category: "Mobility & Hospitality",
    title: "Why fly when you can Vueling",
    icon: avatar("/Case-Studies/Vueling_CS/Gallery/Vueling_Icon_1x1.png"),
    cover: cover("/Case-Studies/Vueling_CS/Gallery/Vueling_Cover_IMG_1x1.png"),
    hover: cover("/Case-Studies/Vueling_CS/Gallery/Vueling_Hover_IMG_1x1_2.png"),
    to: "/work/vueling",
  },
  {
    id: "amazon-ads",
    client: "Amazon Ads",
    category: "Technology",
    title: "The rise of Ads",
    icon: avatar("/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Icon_1x1_3.png"),
    cover: cover("/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_2.png"),
    hover: cover("/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_3.png"),
    to: "/work/amazon-ads",
  },
];

export const services = [
  "Brand Architecture",
  "Brand Identity",
  "Brand Positioning",
  "Business Case",
  "Customer Experience",
  "Delivery System",
  "Employee Experience",
  "Experience Ecosystem",
  "Prototype",
];

export const journal = [
  {
    id: "vrt-sporza",
    tag: "News",
    read: "1 min read",
    date: "3 June 2026",
    title: "VRT Relaunches Sporza for World Cup 2026",
    image: `${IMG}/Case-Studies/Play-Media_CS/Gallery/Play-Media_CS_Gallery_4_3x.webp${p}&w=800&h=600`,
  },
  {
    id: "5rs",
    tag: "Insights",
    read: "3 min read",
    date: "21 June 2026",
    title: "Applying the 5Rs of brand experience",
    image: `${IMG}/Case-Studies/Cupra_CS/Gallery/Cupra-CS_Hover_4.png${p}&w=800&h=600`,
  },
  {
    id: "culture-address",
    tag: "Insights",
    read: "5 min read",
    date: "4 June 2026",
    title: "Culture has a new address",
    image: `${IMG}/Journal/2026/Culture_POV/Culture_POV_Card_4x3_2x.webp${p}&w=800&h=600`,
  },
];

export const offices = ["London", "Madrid", "Vienna", "Tokyo"];

// ===== KOODH ABOUT CONTENT =====
export const koodhIntro =
  "Koodh Media Group creates audio branding for radio and captures the energy of live events through photography. From sweepers, jingles and imaging to festival and concert stages, we help stations and events sound and look unforgettable.";

export const koodhServices = [
  {
    name: "Web Development",
    desc: "We design and build fast, modern and reliable websites and web apps, fully tailored to your brand and your goals.",
    items: ["Websites", "Web apps", "E-commerce", "Maintenance & hosting"],
  },
  {
    name: "AI Solutions",
    desc: "From smart automation to custom tools like Clara, we bring artificial intelligence into your business in a practical, human way.",
    items: ["Custom AI tools", "Automation", "Content systems", "Integrations"],
  },
  {
    name: "IT Consultancy",
    desc: "Hands-on, on-site IT help. From Wi-Fi that reaches everywhere to fixing computer problems, we come to you and get things working again.",
    items: ["Wi-Fi solutions", "PC problem solving", "On-site service", "Friendly advice"],
  },
];

export const koodhValues = [
  {
    title: "Made to remember",
    text: "Every moment we capture with a sound that fits, with an image that fits.",
  },
  {
    title: "We fit your brand",
    text: "We create a jingle, promo or sweeper for your brand like we are part of it.",
  },
  {
    title: "Bringing the energy",
    text: "We live for the perfect hit. A hit you never seen or felt before. An experience for your eyes and ears.",
  },
  {
    title: "Always on time, there where it hits",
    text: "We know how important it all is. You want the perfect timing for your company, you want to present the story right after it happens. With a photo that creates that moment, with audio branding that feels different.",
  },
];

export const koodhStats = [
  { value: "150+", label: "Jingles & sweepers produced" },
  { value: "3000+", label: "Event & festival shots" },
  { value: "2", label: "Countries (NL & BE)" },
  { value: "15+", label: "Years behind audio branding & photography" },
];

// White logos from koodh.com (shown on a dark strip)
export const koodhClients = [
  { name: "Radiogroep", logo: radiogroepLogo },
  { name: "GRK", logo: grkLogo },
  { name: "OVB Congres", logo: ovbLogo },
  { name: "TOP", logo: topLogo },
];

// People-free imagery from Pexels/Unsplash
const px = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const un = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const media = {
  workspace: px(3747070),
  workspace2: px(19089182),
  code: un("1488590528505-98d2b5aba04b"),
  code2: px(256502),
  code3: un("1461749280684-dccba630e2f6"),
  server: px(17489157),
  server2: px(17323801),
  server3: px(37730211),
  blueStreaks: px(14990059),
  blueCircuit: px(12537427),
  blueCurves: px(804269),
  blueTunnel: px(12707785),
  bluePanels: px(14973823),
};


// ===== ABOUT PAGE =====
export const aboutImages = [
  `${IMG}/060923_SAFFRON_159-1_RGB.jpg${p}&w=520&h=640`,
  `${IMG}/250723_SAFFRON_2194_RGB_2023-09-22-130607_ujki-copia_2024-03-07-094630_duvr.webp${p}&w=520&h=640`,
  `${IMG}/250723_SAFFRON_3421_RGB-copia.webp${p}&w=520&h=640`,
  `${IMG}/250723_SAFFRON_3028_RGB.jpg${p}&w=520&h=640`,
];

export const values = [
  {
    title: "One Koodh",
    text: "No matter where we are, we are one; one Koodh culture working as one team across the world.",
  },
  {
    title: "Natively global",
    text: "We're from everywhere and at home anywhere; always open to different cultures and ways of thinking.",
  },
  {
    title: "Charm and brutality",
    text: "Wherever we are, we seek to uncover complex truths which we share with clarity and courage.",
  },
  {
    title: "IQ and EQ",
    text: "We put as much emphasis on empathy and intuition as we do on data and research.",
  },
];

export const stats = [
  { value: "60+", label: "Countries we've worked in" },
  { value: "25", label: "Languages spoken" },
  { value: "30+", label: "Nationalities represented" },
  { value: "4", label: "Locations worldwide" },
];

export const aboutServices = [
  {
    name: "Promise",
    desc: "The promise a brand makes. It lives in the identity, culture and architecture.",
    items: ["Brand Positioning", "Brand Architecture", "Brand Identity"],
  },
  {
    name: "Experience",
    desc: "The physical and digital experience a brand's audiences have across their entire customer journey.",
    items: ["Customer Experience", "Employee Experience", "Experience Ecosystem"],
  },
  {
    name: "Delivery",
    desc: "The prototypes, business cases and delivery systems needed to bring experiences to life.",
    items: ["Prototype", "Business Case", "Delivery System"],
  },
];

const clientLogo = (path) => `${IMG}/Clients/${path}${p.replace("&fit=crop", "")}&w=200`;
export const clients = [
  { name: "YouTube", logo: clientLogo("YouTube_Logo_x3.png") },
  { name: "Repsol", logo: clientLogo("Repsol_Logo_x3.png") },
  { name: "Gulf Air", logo: clientLogo("Gulf-Air_Logo_x3.png") },
  { name: "Cupra", logo: clientLogo("Cupra_Logo_Positive.png") },
  { name: "BASF", logo: clientLogo("BASF_Logo_Positive.png") },
  { name: "City of Vienna", logo: clientLogo("City-of-Vienna_Logo_x3.png") },
  { name: "Art Basel", logo: clientLogo("Art-Basel_Logo_x3.png") },
  { name: "Skoda", logo: clientLogo("Skoda_Logo_x3.png") },
  { name: "A1", logo: clientLogo("A1_Logo_x3.png") },
  { name: "Meta", logo: clientLogo("Meta_Logo_x3.png") },
  { name: "JR West", logo: clientLogo("JR-West_Logo_Positive_2026-03-04-142009_vfru.png") },
  { name: "Amazon Ads", logo: clientLogo("Amazon-Ads_Logo.png") },
];

const teamPhoto = (path) => `${IMG}${path}${p}&w=360&h=450`;
export const team = [
  { name: "África López", role: "Senior Marketing Designer", langs: "EN, ES", photo: teamPhoto("/Team_Profile_Photos_1/Retouched_low-res/060923_SAFFRON_3596_SELECTS_low-150.jpg") },
  { name: "Alejandra Striuk Torres", role: "Senior Digital Designer", langs: "EN, ES, RU", photo: teamPhoto("/Team-Photos/Alejandra-Striuk_Purple.webp") },
  { name: "Alejandro Salerno", role: "Creative Director", langs: "EN, ES", photo: teamPhoto("/Team_Profile_Photos_1/Retouched_low-res/070923_SAFFRON22982_SELECTS_low-150.jpg") },
  { name: "Alessandro Mattioni", role: "Senior Implementation Designer", langs: "EN, ES, IT", photo: teamPhoto("/Team_Profile_Photos_1/Retouched_low-res/060923_SAFFRON_1240_SELECTS_low-150-WEB-V2.jpg") },
  { name: "Alexandra Stump", role: "Designer", langs: "EN, DE, RU", photo: teamPhoto("/Team_Profile_Photos_1/Retouched_low-res/060923_SAFFRON_136_SELECTS_low-150.jpg") },
  { name: "Alice Anderson", role: "Senior Client Development Manager", langs: "EN, ES", photo: teamPhoto("/Team-Photos/Retouched_low-res_4x5/Alice_CS_4x5_2x.webp") },
  { name: "Amy Lee Stewart", role: "Strategy Director", langs: "EN", photo: teamPhoto("/Team-Photos/Amy_Lee_Portrait_Web_4x5.webp") },
  { name: "Ana Molina", role: "Senior Designer", langs: "EN, ES, DE", photo: teamPhoto("/Team_Profile_Photos_1/Retouched_low-res/060923_SAFFRON_1040_SELECTS_low-150.jpg") },
  { name: "Andreas Wilhelm", role: "Managing Director", langs: "DE, EN", photo: teamPhoto("/Team-Photos/Saff_Pic_Andreas_1_landscape.jpg") },
  { name: "Andrew Harb", role: "Senior Client Director", langs: "EN, ES", photo: teamPhoto("/Team_Profile_Photos_1/Retouched_low-res/060923_SAFFRON_1319_SELECTS_low-150.jpg") },
  { name: "Ben Knapp", role: "Executive Director, Lab", langs: "EN, DE", photo: teamPhoto("/Team_Profile_Photos_1/Retouched_low-res/260723_SAFFRON_1389_SELECTS_low-150.jpg") },
  { name: "Carmen Rodríguez Lo", role: "Senior Strategist", langs: "EN, ES, ZH", photo: teamPhoto("/Team_Profile_Photos_1/Retouched_low-res_4x5/060923_SAFFRON_4166_SELECTS_low-150_4-5.jpg") },
];

// ===== CONTACT PAGE =====
export const contactImages = [
  `${IMG}/050923_SAFFRON_050_RGB.jpg${p}&w=1280&h=720`,
  `${IMG}/250723_SAFFRON_1012_RGB-copia.webp${p}&w=1280&h=720`,
  `${IMG}/250723_SAFFRON_1219_RGB.jpg${p}&w=1280&h=720`,
];

export const officeLocations = [
  { hello: "Hallo", city: "Budel-Schoot, NL", address: ["Budel-Schoot", "Noord-Brabant, Nederland"], phone: "", image: `${IMG}/250723_SAFFRON_0366_RGB_2023-09-22-131539_tzqe.jpg${p}&w=640&h=512` },
  { hello: "Hallo", city: "Pelt, BE", address: ["Pelt", "Limburg, België"], phone: "", image: `${IMG}/060923_SAFFRON_258_RGB.jpg${p}&w=640&h=512` },
];

// ===== CAREERS PAGE =====
export const careersImages = [
  `${IMG}/250723_SAFFRON_1652_RGB-copia.webp${p}&w=520&h=640`,
  `${IMG}/050923_SAFFRON_881_RGB_2023-09-22-130744_trzc.jpg${p}&w=520&h=640`,
  `${IMG}/250723_SAFFRON_1834_RGB-copia.webp${p}&w=520&h=640`,
  `${IMG}/250723_SAFFRON_0614_RGB.jpg${p}&w=520&h=640`,
];

export const benefits = [
  { n: "01", title: "One Koodh", text: "One culture working as one team across the world." },
  { n: "02", title: "Remote Work", text: "Connect from wherever you like around the world, 10 days a year." },
  { n: "03", title: "Holidays", text: "26 days and counting, plus your birthday." },
  { n: "04", title: "Flex Hours", text: "Flexible start and finish every day." },
  { n: "05", title: "Work From Home", text: "Choose the days that suit you best." },
  { n: "06", title: "Private Insurance", text: "Life and health insurance to protect what matters most." },
  { n: "07", title: "Early Finish Fridays", text: "Pack up early at the end of the week." },
  { n: "08", title: "Bottom-up Bonus", text: "Because it's fair to reward success." },
  { n: "09", title: "Language Classes", text: "English or Spanish for beginners or improvers." },
];

export const dayInLife = [
  { name: "Andrew Harb", role: "Senior Client Director", langs: "EN, ES", photo: `${IMG}/Day-in-the-Life/20220922-190318-1.JPG${p}&w=400&h=500` },
  { name: "Emma Sisson", role: "Senior Strategist", langs: "EN, ES", photo: `${IMG}/emma-sisson-copia.webp${p}&w=400&h=500` },
  { name: "Rui Xu", role: "Senior Designer", langs: "EN, ES, ZH", photo: `${IMG}/Day-in-the-Life/FFxDITL_Rui-Xu.png${p}&w=400&h=500` },
];

export const careersFaq = [
  { q: "Can I freelance for Koodh?", a: "Yes. We work with all sorts of great freelancers across our departments." },
  { q: "Do I have to have professional experience in branding to work at Koodh?", a: "Not necessarily. We value curiosity, craft and a distinct point of view as much as formal experience." },
  { q: "Does Koodh hire students, new graduates and interns?", a: "Yes, we regularly welcome new graduates and interns across our studios." },
  { q: "What happens after I submit my application to Koodh?", a: "Our talent team reviews every application and will be in touch if there's a potential fit." },
  { q: "What precautions should I take when communicating with Koodh during the hiring process?", a: "We'll only ever contact you from an official koodh.com address. We never ask for payment." },
];

// ===== JOURNAL / LAB PAGES =====
const jImg = (path, ar = "4x3") =>
  `${IMG}${path}${p}&w=800&h=600`;

export const journalArticles = [
  { id: "25-years", tag: "Insights", date: "8 July 2026", read: "8 min read", title: "What 25 years has taught us", excerpt: "A peek into how we think, and the beliefs that continue to shape our work.", image: `${IMG}/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Hover_IMG_1x1_4.png${p}&w=800&h=600` },
  { id: "5rs", tag: "Insights", date: "21 June 2026", read: "3 min read", title: "Applying the 5Rs of brand experience", excerpt: "A hands-on tool to shape, test and evaluate brand-led experiences across touchpoints with precision and intent.", image: `${IMG}/Case-Studies/Cupra_CS/Gallery/Cupra-CS_Hover_4.png${p}&w=800&h=600` },
  { id: "culture-address", tag: "Insights", date: "4 June 2026", read: "5 min read", title: "Culture has a new address", excerpt: "The cultural brands and institutions shaping the future won't just preserve culture, they'll actively participate in it.", image: jImg("/Journal/2026/Culture_POV/Culture_POV_Card_4x3_2x.webp") },
  { id: "vrt-sporza", tag: "News", date: "3 June 2026", read: "1 min read", title: "VRT Relaunches Sporza for World Cup 2026", excerpt: "The new identity captures the energy and emotion of Flemish sports culture while aligning with VRT's wider brand portfolio.", image: `${IMG}/Case-Studies/Play-Media_CS/Gallery/Play-Media_CS_Gallery_4_3x.webp${p}&w=800&h=600` },
  { id: "brandays", tag: "Events", date: "14 May 2026", read: "2 min read", title: "Blanc! Brandays Madrid", excerpt: "At the design & business festival, Jacob Benbunan explored why craft is the biggest differentiator as AI reshapes creativity.", image: jImg("/Journal/2026/Brandays_Event/Brandays_Jacob_Card_4x3_2.webp") },
  { id: "aix-hamburg", tag: "Events", date: "20 April 2026", read: "2 min read", title: "Inside the future of air travel", excerpt: "We visited AIX Hamburg to explore how cabin design is shaping the future of passenger experience.", image: jImg("/Journal/2026/AIX-Hamburg/AIX-Hamburg_Card_2_4x3.png") },
];

export const podcasts = [
  { title: "How to build an iconic brand that dominates the market", host: "Jacob Benbunan on Product Hackers", meta: "ES / 113 MINS", date: "24 Mar 2026" },
  { title: "Why some cities win: Lessons from CBB 2025", host: "Ben Knapp on Field Notes", meta: "EN / 21 MINS", date: "28 Oct 2025" },
  { title: "El Español Que Rediseñó YouTube y Facebook", host: "Jacob Benbunan on Rompiendo el Molde", meta: "ES / 110 MINS", date: "12 Jul 2025" },
  { title: "A Masterclass in Creativity in Professional Services", host: "Jacob Benbunan on Outliers", meta: "ES / 57 MINS", date: "9 Dec 2024" },
];

export const labArticles = [
  { id: "spotlight", tag: "Insights, Lab", date: "16 March 2026", read: "5 min read", title: "When the spotlight moves on", excerpt: "When global entertainment events bring attention, how can places turn that moment into lasting value?", image: jImg("/Journal/2026/CBB-POV-Olympics/CBB_Olympics_Card_1.png") },
  { id: "ai-natural", tag: "Insights, Lab", date: "9 March 2026", read: "4 min read", title: "Artificial intelligence? Natural judgement.", excerpt: "Jacob Benbunan reflects on how human intelligence has a leg up in the era of machine learning.", image: `${IMG}/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_3.png${p}&w=800&h=600` },
  { id: "cbb-2025", tag: "Reports, Lab", date: "21 October 2025", read: "3 min read", title: "City Brand Barometer 2025, Tourism edition", excerpt: "Discover how 111 global cities promise and deliver the world's best travel experiences and strongest place brands.", image: jImg("/Journal/2025/CBB25/CBB_Launch_Card.png") },
  { id: "nvidia", tag: "Insights, Lab", date: "22 September 2025", read: "4 min read", title: "Lessons from a $4 trillion brand", excerpt: "From tech hardware to AI hype, how Nvidia's brand helped turn semiconductors into global headlines.", image: `${IMG}/Case-Studies/Vueling_CS/Gallery/Vueling_Hover_IMG_1x1_3.png${p}&w=800&h=600` },
  { id: "ai-sprint", tag: "Lab, News", date: "17 August 2025", read: "3 min read", title: "AI on tap, creativity on top", excerpt: "Lab hosted our first AI Sprint exploring how artificial intelligence can enhance, not replace, the work we do.", image: jImg("/Journal/2025/AI-Sprint/FF-AI-Sprint_Card_4x3_v2.png") },
  { id: "engineered", tag: "Lab, Reports", date: "1 July 2025", read: "4 min read", title: "Engineered to Endure", excerpt: "Why memorability is tech's biggest brand advantage, and how semiconductor brands can lead the way.", image: `${IMG}/Case-Studies/Repsol_CS/Gallery/Repsol_Hover_IMG_1x1_5.png${p}&w=800&h=600` },
];
