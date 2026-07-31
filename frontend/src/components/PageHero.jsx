import React from "react";
import Reveal from "./Reveal";

// Consistent hero used across all Koodh pages.
export const PageHero = ({ eyebrow, title, subtitle, chips = [] }) => (
  <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-14 md:pb-20">
    <Reveal>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-6 font-extrabold uppercase-tight text-black text-[11vw] md:text-[6vw] leading-[0.95]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-8 max-w-2xl text-xl md:text-2xl text-neutral-600 font-medium">
          {subtitle}
        </p>
      )}
      {chips.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2.5">
          {chips.map((c) => (
            <span
              key={c}
              className="inline-flex items-center rounded-full border border-black/10 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-neutral-700 hover:border-[#f0603f] hover:text-[#f0603f] transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </Reveal>
  </section>
);

export default PageHero;
