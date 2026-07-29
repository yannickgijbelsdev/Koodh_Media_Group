import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import FaqSection from "../components/FaqSection";
import CtaBand from "../components/CtaBand";
import usePageMeta from "../lib/seo";

export default function Faq() {
  usePageMeta({
    title: "FAQ",
    description:
      "Answers to frequently asked questions about Koodh Media Group \u2014 radio imaging, jingles, event photography, delivery times and how to start.",
    path: "/faq",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="FAQ"
          title={
            <>
              Frequently asked{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                questions
              </span>
            </>
          }
          subtitle={"Everything you might want to know about working with Koodh Media Group \u2014 from radio imaging and jingles to event photography and how we deliver."}
        />

        <FaqSection hideHeading />

        <CtaBand
          title={
            <>
              Still have a{" "}
              <span className="font-script text-[#c7d3f2]">question</span>?
            </>
          }
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
