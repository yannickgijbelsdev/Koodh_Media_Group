import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { fetchFeedItems } from "../api";

// API-driven work grid used on the Photography and Audio pages.
export default function ApiWorkGrid({ category, heading, script, testId }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchFeedItems(category)
      .then((d) => alive && setItems(d))
      .catch(() => alive && setItems([]))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [category]);

  return (
    <section
      className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32"
      data-testid={testId}
    >
      <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
        {heading}{" "}
        <span className="font-script" style={{ color: "#f0603f" }}>
          {script}
        </span>
      </h2>

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-xl bg-neutral-100 animate-pulse"
              />
            ))
          : items.map((it, i) => (
              <Reveal as="div" key={it.id} delay={(i % 4) * 80} className="group">
                <Link
                  to={it.to}
                  data-testid={`${testId}-item-${i}`}
                  className="block relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 ring-1 ring-black/5"
                >
                  <img
                    src={it.cover}
                    alt={it.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 to-transparent">
                    <p className="text-white font-bold text-sm md:text-base leading-tight">
                      {it.title}
                    </p>
                    {it.category && (
                      <p className="text-white/70 text-xs">{it.category}</p>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
      </div>

      {!loading && items.length === 0 && (
        <p className="text-neutral-500 py-10">
          New work is on the way — check back soon.
        </p>
      )}
    </section>
  );
}
