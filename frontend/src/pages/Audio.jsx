import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import FeatureRow from "../components/FeatureRow";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import usePageMeta from "../lib/seo";
import radioStudio from "../assets/audio/radio-studio.jpg";
import soundDesign from "../assets/audio/sound-design.jpg";

const packages = [
  { client: "GRK Summer", title: "Sound of Summer ID Pack", type: "Imaging" },
  { client: "GRK ELO Encounter", title: "October Imaging", type: "Imaging" },
  { client: "GRK Ontbijtradio", title: "Sweeper Pack", type: "Sweepers" },
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

        <FeatureRow
          title="Radio"
          script="imaging"
          text={
            "The voice of your station between the songs. We produce sweepers, station IDs and imaging that instantly tell listeners where they are \u2014 sharp, energetic and unmistakably you."
          }
          features={[
            { title: "Sweepers & IDs", text: "Short, punchy audio that stamps your brand on every hour." },
            { title: "Imaging packs", text: "A full, consistent sound signature across your entire schedule." },
            { title: "Promo production", text: "Trailers and promos that build hype for shows and events." },
            { title: "Voice direction", text: "We direct and mix voice-overs so every line lands perfectly." },
          ]}
          image={radioStudio}
          imgAlt="Radio broadcast studio"
          mockup={false}
          caption={{ title: "Radio imaging", sub: "Sweepers, station IDs & promos" }}
        />

        <FeatureRow
          title="Jingles &"
          script="beds"
          text={
            "Original jingles and music beds tailored to your format. Whether you want a big sung package or subtle underscores for talk segments, we compose and produce audio that fits your station like a glove."
          }
          features={[
            { title: "Custom jingles", text: "Original, sung or instrumental jingles written around your brand." },
            { title: "Radio & music beds", text: "Beds and underscores that sit perfectly beneath your presenters." },
            { title: "Sound design", text: "Transitions, stings and effects that keep your sound moving." },
            { title: "Full branding packs", text: "A complete, coherent audio identity, delivered ready to air." },
          ]}
          image={soundDesign}
          imgAlt="Audio waveform and sound design"
          reverse
          tinted
          mockup={false}
          caption={{ title: "Jingles & sound design", sub: "Composed and produced in-house" }}
        />

        {/* Recent audio work */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            Recent{" "}
            <span className="font-script" style={{ color: "#3f5b9e" }}>
              packages
            </span>
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {packages.map((p, i) => (
              <Reveal
                key={p.client}
                delay={i * 90}
                className="border-t-2 border-black pt-6"
              >
                <span className="inline-flex items-center rounded-full bg-[#3f5b9e]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#3f5b9e]">
                  {p.type}
                </span>
                <h3 className="mt-5 font-extrabold uppercase-tight text-2xl text-black">
                  {p.client}
                </h3>
                <p className="mt-2 text-neutral-600 leading-relaxed">{p.title}</p>
              </Reveal>
            ))}
          </div>
        </section>

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
