import React from "react";
import Reveal from "./Reveal";
import MockupInfo from "./MockupInfo";

// Consistent two-column text + image block used across service pages.
export const FeatureRow = ({
  title,
  script,
  scriptAfter = "",
  text,
  features = [],
  image,
  imgAlt = "",
  imgPos = "object-center",
  reverse = false,
  tinted = false,
  mockup = true,
  infoTestId,
  caption,
}) => (
  <section className={tinted ? "bg-neutral-50 border-y border-black/5" : ""}>
    <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05]">
          {title}{" "}
          {script && (
            <span className="font-script" style={{ color: "#f0603f" }}>
              {script}
            </span>
          )}{" "}
          {scriptAfter}
        </h2>
        <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-xl">
          {text}
        </p>
        {features.length > 0 && (
          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((f) => (
              <div key={f.title} className="border-t-2 border-black pt-4">
                <h3 className="font-bold text-black text-lg">{f.title}</h3>
                <p className="mt-2 text-neutral-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        )}
      </Reveal>

      <Reveal
        delay={120}
        className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-black/5 ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <img
          src={image}
          alt={imgAlt}
          loading="lazy"
          className={`w-full h-full object-cover ${imgPos} group-hover:scale-105 transition-transform duration-700`}
        />
        {mockup && <MockupInfo testId={infoTestId} />}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white font-bold text-lg">{caption.title}</p>
            {caption.sub && (
              <p className="text-white/70 text-sm">{caption.sub}</p>
            )}
          </div>
        )}
      </Reveal>
    </div>
  </section>
);

export default FeatureRow;
