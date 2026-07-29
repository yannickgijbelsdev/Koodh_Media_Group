import { useEffect } from "react";

const BASE_TITLE = "Koodh Media Group | Audio Branding & Event Photography";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(path) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", `https://koodhmediagroup.com${path || "/"}`);
}

/**
 * Set page-level SEO. Pass a full title or null to use the base title.
 */
export default function usePageMeta({ title, description, path } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Koodh Media Group` : BASE_TITLE;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    if (path !== undefined) {
      setCanonical(path);
      setMeta("property", "og:url", `https://koodhmediagroup.com${path || "/"}`);
    }
  }, [title, description, path]);
}
