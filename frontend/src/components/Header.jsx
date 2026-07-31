import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../mock";
import logo from "../assets/koodhmg-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On home the hero is dark -> white text until scrolled
  const light = isHome && !scrolled;
  const textColor = light ? "text-white" : "text-black";

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5" : "bg-transparent"
      }`}
    >
      {/* Always-on subtle blur at the top of the menu (only over the dark hero on home) */}
      {isHome && !scrolled && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[110px] backdrop-blur-md"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.28), rgba(0,0,0,0))",
          }}
        />
      )}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center transition-opacity duration-300 hover:opacity-80"
        >
          <img
            src={logo}
            alt="Koodh Media Group"
            className={`h-6 md:h-7 w-auto transition-all duration-300 ${
              light ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-x-4 2xl:gap-x-6">
          {navLinks.map((l) =>
            l.to === "/contact" ? (
              <Link
                key={l.label}
                to={l.to}
                className="text-[14px] font-semibold tracking-wide whitespace-nowrap rounded-full bg-[#f0603f] text-white px-5 py-2 hover:bg-[#d64a29] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className={`text-[14px] font-semibold tracking-wide whitespace-nowrap link-underline ${textColor} transition-colors duration-300`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <button
          className={`xl:hidden ${textColor}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>
    </header>

      {/* Mobile menu (rendered outside <header> so the header's backdrop-blur
          doesn't create a containing block that clips this fixed overlay) */}
      {open && (
        <div className="fixed inset-0 z-[70] bg-white flex flex-col p-6 animate-fade-up">
          <div className="flex items-center justify-between h-[36px]">
            <img src={logo} alt="Koodh Media Group" className="h-6 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={28} className="text-black" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-5 overflow-y-auto">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-2xl sm:text-3xl font-extrabold uppercase-tight text-black"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
