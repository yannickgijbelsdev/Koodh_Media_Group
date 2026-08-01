import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import { fetchWorkArticle } from "../api";
import Reveal from "../components/Reveal";
import AudioPlayer from "../components/AudioPlayer";
import usePageMeta from "../lib/seo";

const NEWS_HOST = "https://clr.koodh.com";
const AUDIO_EXT = /\.(mp3|wav|m4a|aac|ogg|oga|flac)(\?.*)?$/i;

const absolutize = (src) =>
  src && src.startsWith("/") ? `${NEWS_HOST}${src}` : src;

// Remove the duplicate image-credit paragraph(s) from the article body.
// The small credit is already shown under the photo via image_caption_html.
const stripImageCredit = (html) =>
  (html || "").replace(
    /<p[^>]*class=["'][^"']*clara-image-credit[^"']*["'][^>]*>[\s\S]*?<\/p>/gi,
    ""
  );

// Pull any uploaded audio out of the article body so we can render our own
// on-brand player instead of the browser's default <audio> controls.
const extractAudio = (html) => {
  if (typeof window === "undefined" || !html) return { html, tracks: [] };
  const doc = new DOMParser().parseFromString(html, "text/html");
  const tracks = [];
  const push = (src, title) => {
    const abs = absolutize(src);
    if (abs && !tracks.some((t) => t.src === abs)) tracks.push({ src: abs, title });
  };

  doc.querySelectorAll("audio").forEach((el) => {
    let src = el.getAttribute("src");
    if (!src) {
      const s = el.querySelector("source");
      if (s) src = s.getAttribute("src");
    }
    let title = el.getAttribute("aria-label") || el.getAttribute("data-title") || "";
    const fig = el.closest("figure");
    if (!title && fig) {
      const cap = fig.querySelector("figcaption");
      if (cap) title = cap.textContent.trim();
    }
    if (src) push(src, title);
    if (fig && fig.querySelectorAll("img,video,iframe").length === 0) fig.remove();
    else el.remove();
  });

  // Also convert plain links to audio files into players.
  doc.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (href && AUDIO_EXT.test(href)) {
      push(href, a.textContent.trim());
      const fig = a.closest("figure");
      if (fig && fig.querySelectorAll("img,video,iframe").length === 0) fig.remove();
      else a.remove();
    }
  });

  return { html: doc.body.innerHTML, tracks };
};

export default function WorkDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  usePageMeta({
    title: article ? article.title : "Work",
    description: article
      ? `${article.title} — by Koodh Media Group.`
      : "Selected work by Koodh Media Group — audio branding and event photography.",
    path: `/work/${slug}`,
  });

  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchWorkArticle(slug)
      .then((data) => alive && setArticle(data && !data.error ? data : null))
      .catch(() => alive && setArticle(null))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [slug]);

  const { html: bodyHtml, tracks } = extractAudio(
    article && article.body ? stripImageCredit(article.body) : ""
  );
  if (article && article.audio_url) {
    const abs = absolutize(article.audio_url);
    if (!tracks.some((t) => t.src === abs)) tracks.unshift({ src: abs, title: article.title });
  }

  return (
    <>
      <Header />
      <main className="pt-[68px] min-h-screen bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>

          {loading && (
            <div className="mt-10 animate-pulse">
              <div className="h-4 w-32 bg-neutral-100 rounded" />
              <div className="mt-6 h-12 w-full bg-neutral-100 rounded" />
              <div className="mt-3 h-12 w-2/3 bg-neutral-100 rounded" />
              <div className="mt-10 aspect-video w-full bg-neutral-100 rounded-2xl" />
            </div>
          )}

          {!loading && !article && (
            <p className="mt-12 text-lg text-neutral-500">
              This project could not be loaded.
            </p>
          )}

          {!loading && article && (
            <article>
              <h1 className="mt-10 font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05]">
                {article.title}
              </h1>

              {article.image_url && (
                <Reveal as="div" className="mt-10 aspect-video rounded-2xl overflow-hidden bg-neutral-100">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </Reveal>
              )}

              {article.image_caption_html && (
                <div
                  className="mt-3 text-xs text-neutral-400"
                  dangerouslySetInnerHTML={{ __html: article.image_caption_html }}
                />
              )}

              {tracks.length > 0 && (
                <div className="mt-10" data-testid="article-audio">
                  {tracks.map((t, i) => (
                    <AudioPlayer key={t.src + i} src={t.src} title={t.title || article.title} />
                  ))}
                </div>
              )}

              {bodyHtml && (
                <Reveal
                  as="div"
                  className="article-body mt-10 text-lg text-neutral-700 leading-relaxed space-y-5"
                  dangerouslySetInnerHTML={{ __html: bodyHtml }}
                />
              )}
            </article>
          )}
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
