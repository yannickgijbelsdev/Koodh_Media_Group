import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import FeatureRow from "../components/FeatureRow";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import usePageMeta from "../lib/seo";
import jeugd from "../assets/photography/jeugd.webp";
import triggerfinger from "../assets/photography/triggerfinger.webp";
import jonna from "../assets/photography/jonna-fraser.webp";
import tourist from "../assets/photography/tourist-lemc.webp";
import davina from "../assets/photography/davina-michelle.webp";
import pommelien from "../assets/photography/pommelien-thijs.webp";
import laura from "../assets/photography/laura-tesoro.webp";
import sylver from "../assets/photography/sylver.webp";

const gallery = [
  { img: jeugd, title: "De Jeugd van Tegenwoordig", sub: "Genk On Stage 2026" },
  { img: triggerfinger, title: "Triggerfinger", sub: "Genk On Stage 2026" },
  { img: jonna, title: "Jonna Fraser", sub: "Genk On Stage 2026" },
  { img: tourist, title: "Tourist LeMC", sub: "Genk On Stage 2026" },
  { img: laura, title: "Laura Tesoro", sub: "Zomernoten 2025" },
  { img: sylver, title: "Sylver", sub: "Zomernoten 2025" },
  { img: davina, title: "Davina Michelle", sub: "Genk On Stage 2024" },
  { img: pommelien, title: "Pommelien Thijs", sub: "Genk On Stage 2023" },
];

export default function Photography() {
  usePageMeta({
    title: "Photography",
    description:
      "Event, festival and concert photography by Koodh Media Group. We capture the raw energy of live stages \u2014 from Genk On Stage to Zomernoten \u2014 across the Netherlands and Belgium.",
    path: "/photography",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Photography"
          title={
            <>
              Capturing the{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                moment
              </span>
            </>
          }
          subtitle={
            "A visual journey through festivals, concerts and stages. We freeze the energy of live moments so you can relive and share them."
          }
          chips={["Festivals", "Concerts", "Live stages", "Portraits"]}
        />

        <FeatureRow
          title="Live &"
          script="festival"
          text={
            "From the front of the stage to the heart of the crowd, we shoot the moments that make an event unforgettable. Fast turnaround and carefully edited images, ready to share while the moment is still hot."
          }
          features={[
            { title: "Festivals", text: "Full-day coverage of the artists, the crowd and the atmosphere." },
            { title: "Concerts", text: "Stage-lit action shots that capture the energy of every set." },
            { title: "Portraits", text: "Backstage and on-stage portraits of the artists you book." },
            { title: "Fast delivery", text: "Edited highlights delivered quickly, so you can post while it's hot." },
          ]}
          image={jeugd}
          imgAlt="De Jeugd van Tegenwoordig at Genk On Stage 2026"
          mockup={false}
          caption={{ title: "De Jeugd van Tegenwoordig", sub: "Genk On Stage 2026" }}
        />

        <FeatureRow
          title="On"
          script="stage"
          text={
            "We know how to work with tough stage lighting, fast movement and unrepeatable moments. The result: sharp, dynamic images that put your audience right back in the front row."
          }
          image={triggerfinger}
          imgAlt="Triggerfinger at Genk On Stage 2026"
          reverse
          tinted
          mockup={false}
          caption={{ title: "Triggerfinger", sub: "Genk On Stage 2026" }}
        />

        {/* Gallery */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            Selected{" "}
            <span className="font-script" style={{ color: "#3f5b9e" }}>
              work
            </span>
          </h2>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {gallery.map((g, i) => (
              <Reveal
                as="div"
                key={g.title + i}
                delay={(i % 4) * 80}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 ring-1 ring-black/5"
              >
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 to-transparent">
                  <p className="text-white font-bold text-sm md:text-base leading-tight">{g.title}</p>
                  <p className="text-white/70 text-xs">{g.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBand
          title={
            <>
              Got an event to{" "}
              <span className="font-script text-[#c7d3f2]">capture</span>?
            </>
          }
          label="Book a shoot"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
