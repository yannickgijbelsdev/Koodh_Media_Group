import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import accentBg from "../assets/accent-bg.png";

// Consistent closing call-to-action band used across pages.
export const CtaBand = ({
  title,
  script,
  scriptAfter = "",
  to = "/contact",
  label = "Let\u2019s talk",
}) => (
  <section className="relative overflow-hidden bg-[#241063] text-white">
    <div
      className="pointer-events-none absolute inset-0 opacity-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${accentBg})` }}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#241063] via-[#341a7a] to-[#f0603f]/70" />
    <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <h2 className="font-extrabold uppercase-tight text-3xl md:text-5xl max-w-2xl leading-[1.05]">
          {title}{" "}
          {script && <span className="font-script text-[#ffb59c]">{script}</span>}{" "}
          {scriptAfter}
        </h2>
        <Link
          to={to}
          data-testid="cta-contact-link"
          className="inline-flex items-center gap-2 bg-white text-[#241063] rounded-full pl-6 pr-5 py-4 text-sm font-semibold hover:bg-neutral-100 transition-colors group shrink-0"
        >
          {label}
          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBand;
