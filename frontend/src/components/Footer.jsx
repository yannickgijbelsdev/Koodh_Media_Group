import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/koodhmg-logo.png";
import footerBg from "../assets/footer-bg.webp";
import { openCookiePreferences } from "../lib/consent";

const NAVY = "#f0603f";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-[#241063]">
      {/* Chevron pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* White wash for text legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.58) 45%, rgba(255,255,255,0.48) 100%)",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10">
        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <img src={logo} alt="Koodh Media Group" className="h-8 md:h-10 w-auto" />
          <p className="font-extrabold lowercase tracking-tight text-2xl md:text-4xl lg:text-[2.6rem] leading-none">
            create new{" "}
            <span className="font-script lowercase font-semibold" style={{ color: NAVY }}>
              experiences
            </span>
          </p>
        </div>

        {/* Legal links */}
        <div className="mt-10 pt-6 border-t border-[#241063]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-[#241063]/50">
            &copy; {new Date().getFullYear()} Koodh Media Group. All rights reserved. &middot; KVK 42066318
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-[#241063]/80">
            <Link to="/terms" className="hover:text-[#241063] link-underline">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy" className="hover:text-[#241063] link-underline">
              Privacy &amp; Cookies
            </Link>
            <button
              onClick={openCookiePreferences}
              className="hover:text-[#241063] link-underline"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
