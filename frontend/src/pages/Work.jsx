import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import WorkCard from "../components/WorkCard";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { fetchWorkItems } from "../api";
import usePageMeta from "../lib/seo";

export default function Work() {
  usePageMeta({
    title: "Work",
    description:
      "Selected work by Koodh Media Group: audio branding and event photography for radio stations, festivals and live events across the Netherlands and Belgium.",
    path: "/work",
  });
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetchWorkItems()
      .then((data) => alive && setItems(data))
      .catch(() => alive && setItems([]))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Work"
          title={
            <>
              Our recent{" "}
              <span className="font-script" style={{ color: "#f0603f" }}>
                work
              </span>
            </>
          }
          subtitle="Real audio branding and photography we crafted for radio stations, festivals and live events across the Netherlands and Belgium."
          chips={["Audio Branding", "Photography"]}
        />

        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i}>
                    <div className="aspect-square rounded-2xl bg-neutral-100 animate-pulse" />
                    <div className="mt-4 h-6 w-3/4 rounded bg-neutral-100 animate-pulse" />
                  </div>
                ))
              : items.map((c, i) => (
                  <Reveal key={c.id} delay={(i % 3) * 90}>
                    <WorkCard item={c} />
                  </Reveal>
                ))}
          </div>
          {!loading && items.length === 0 && (
            <p className="text-neutral-500 py-20 text-center">
              No projects yet.
            </p>
          )}
        </section>

        <CtaBand
          title={
            <>
              Want to be our next{" "}
              <span className="font-script text-[#ffb59c]">project</span>?
            </>
          }
          label="Start a project"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
