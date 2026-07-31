import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../lib/seo";
import { fetchFeedItems, fetchWorkArticle } from "../api";
import logo from "../assets/koodhmg-logo.png";

// Remove the duplicate image-credit paragraph from the article body.
const stripImageCredit = (html) =>
  (html || "").replace(
    /<p[^>]*class=["'][^"']*clara-image-credit[^"']*["'][^>]*>[\s\S]*?<\/p>/gi,
    ""
  );

// Hidden landing page (not in the menu) that shows the single QR article.
export default function QrPage() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  usePageMeta({
    title: article ? article.title : "Koodh Media Group",
    description: article ? article.title : "Koodh Media Group",
    path: "/ext/drone/qr-code",
  });

  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchFeedItems("qr")
      .then((items) =>
        items && items.length ? fetchWorkArticle(items[0].id) : null
      )
      .then((full) => {
        if (alive) setArticle(full && !full.error ? full : null);
      })
      .catch(() => {
        if (alive) setArticle(null);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[820px] mx-auto px-6 py-16 md:py-24">
        <div className="flex justify-center">
          <Link to="/">
            <img src={logo} alt="Koodh Media Group" className="h-8 w-auto" />
          </Link>
        </div>

        {loading && (
          <div className="mt-16 animate-pulse">
            <div className="mx-auto h-10 w-2/3 bg-neutral-100 rounded" />
            <div className="mt-10 aspect-video w-full bg-neutral-100 rounded-2xl" />
            <div className="mt-8 h-4 w-full bg-neutral-100 rounded" />
            <div className="mt-3 h-4 w-5/6 bg-neutral-100 rounded" />
          </div>
        )}

        {!loading && !article && (
          <p className="mt-16 text-center text-neutral-500">Nothing to show yet.</p>
        )}

        {!loading && article && (
          <article className="mt-12" data-testid="qr-article">
            <h1 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05] text-center">
              {article.title}
            </h1>

            {article.image_url && (
              <div className="mt-10 aspect-video rounded-2xl overflow-hidden bg-neutral-100">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {article.image_caption_html && (
              <div
                className="mt-3 text-xs text-neutral-400"
                dangerouslySetInnerHTML={{ __html: article.image_caption_html }}
              />
            )}

            {article.body && (
              <div
                className="article-body mt-10 text-lg text-neutral-700 leading-relaxed space-y-5"
                dangerouslySetInnerHTML={{ __html: stripImageCredit(article.body) }}
              />
            )}
          </article>
        )}
      </div>
    </main>
  );
}
