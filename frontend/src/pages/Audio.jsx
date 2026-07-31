import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import ApiWorkGrid from "../components/ApiWorkGrid";
import usePageMeta from "../lib/seo";

const services = [
  {
    title: "Radio imaging",
    text: "The voice of your station between the songs. Sweepers, station IDs and imaging that instantly tell listeners where they are \u2014 sharp, energetic and unmistakably you.",
    features: [
      { title: "Sweepers & IDs", text: "Short, punchy audio that stamps your brand on every hour." },
      { title: "Imaging packs", text: "A full, consistent sound signature across your entire schedule." },
      { title: "Promo production", text: "Trailers and promos that build hype for shows and events." },
      { title: "Voice direction", text: "We direct and mix voice-overs so every line lands perfectly." },
    ],
  },
  {
    title: "Jingles & beds",
    text: "Original jingles and music beds tailored to your format \u2014 from a big sung package to subtle underscores for talk segments, produced to fit your station like a glove.",
    features: [
      { title: "Custom jingles", text: "Original, sung or instrumental jingles written around your brand." },
      { title: "Radio & music beds", text: "Beds and underscores that sit perfectly beneath your presenters." },
      { title: "Sound design", text: "Transitions, stings and effects that keep your sound moving." },
      { title: "Full branding packs", text: "A complete, coherent audio identity, delivered ready to air." },
    ],
  },
];

export default function Audio() {
  usePageMeta({
    title: "Audio & Imaging",
    description:
      "Audio branding for radio by Koodh Media Group \u2014 sweepers, jingles, radio beds and imaging that give your station its signature sound. On-brand audio for stations across the Netherlands and Belgium.",
    path: "/audio",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Audio & imaging"
          title={
            <>
              Imaging for your{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                brand
              </span>
            </>
          }
          subtitle={
            "Sweepers, jingles, radio beds and imaging that give your station its signature sound \u2014 crafted on brand and made to move."
          }
          chips={["Imaging", "Sweepers", "Jingles", "Radio beds"]}
        />

        {/* Services (text only) */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {services.map((s, i) => (
              <Reveal as="div" key={s.title} delay={i * 100}>
                <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-5 text-lg text-neutral-600 leading-relaxed max-w-xl">
                  {s.text}
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {s.features.map((f) => (
                    <div key={f.title} className="border-t-2 border-black pt-4">
                      <h3 className="font-bold text-black text-lg">{f.title}</h3>
                      <p className="mt-2 text-neutral-600 leading-relaxed">{f.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Selected work (API-driven) */}
        <ApiWorkGrid
          category="audio"
          heading="Selected"
          script="work"
          testId="audio-work-grid"
        />

        <CtaBand
          title={
            <>
              Ready to sound{" "}
              <span className="font-script text-[#c7d3f2]">unmistakable</span>?
            </>
          }
          label={"Let\u2019s talk audio"}
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
