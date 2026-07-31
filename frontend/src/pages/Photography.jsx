import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import FeatureRow from "../components/FeatureRow";
import CtaBand from "../components/CtaBand";
import ApiWorkGrid from "../components/ApiWorkGrid";
import usePageMeta from "../lib/seo";
import jeugd from "../assets/photography/jeugd.webp";
import triggerfinger from "../assets/photography/triggerfinger.webp";

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
              <span className="font-script" style={{ color: "#f0603f" }}>
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

        {/* Selected work (API-driven) */}
        <ApiWorkGrid
          category="fotografie"
          heading="Selected"
          script="work"
          testId="photography-work-grid"
        />

        <CtaBand
          title={
            <>
              Got an event to{" "}
              <span className="font-script text-[#ffb59c]">capture</span>?
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
