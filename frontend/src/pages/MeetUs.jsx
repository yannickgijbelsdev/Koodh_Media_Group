import React from "react";
import { Music, Music2, PenTool, Palette, Camera, Aperture } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import usePageMeta from "../lib/seo";
import { koodhValues } from "../mock";
import yannickImg from "../assets/yannick-gijbels.png";

const tools = [
  { name: "Pro Tools", Icon: Music },
  { name: "Ableton", Icon: Music2 },
  { name: "Affinity", Icon: PenTool },
  { name: "Adobe", Icon: Palette },
  { name: "Nikon Z8", Icon: Camera },
  { name: "Canon EOS R5", Icon: Aperture },
];

const team = [
  {
    name: "Yannick Gijbels",
    role: "Photography & Audio Branding",
    photo: yannickImg,
    bio: "Yannick is the eye behind the lens and the ear behind the mic. As a photographer he freezes the raw energy of festivals, concerts and live stages; as an audio producer he crafts the sweepers, jingles and beds that give radio stations their signature sound. One maker, two crafts \u2014 hands-on, fast and always on brand, from the first frame and the first bar to the final master.",
  },
];

export default function MeetUs() {
  usePageMeta({
    title: "Meet Us",
    description:
      "Meet Yannick Gijbels, founder of Koodh Media Group \u2014 creating audio branding for radio and shooting live event photography across the Netherlands and Belgium.",
    path: "/meet-us",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Meet us"
          title={
            <>
              The person behind the{" "}
              <span className="font-script" style={{ color: "#f0603f" }}>
                sound
              </span>
            </>
          }
          subtitle="Real craft, real people. When you work with Koodh Media Group, you work directly with the maker — no middlemen, no call centres."
        />

        {/* Team */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-8">
          <div className="grid grid-cols-1 gap-10 max-w-3xl">
            {team.map((m, i) => (
              <Reveal as="div" key={m.name} delay={i * 120} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-black/5">
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <h3 className="mt-6 font-bold text-black text-2xl">{m.name}</h3>
                <p className="text-[#f0603f] font-medium">{m.role}</p>
                <p className="mt-4 text-neutral-600 text-lg leading-relaxed max-w-xl">
                  {m.bio}
                </p>
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Yannick works with
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2.5">
                    {tools.map(({ name, Icon }) => (
                      <span
                        key={name}
                        data-testid={`tool-${name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center gap-2 rounded-full pl-3 pr-4 py-2 bg-[#160638] ring-1 ring-black/5 hover:bg-[#2a1466] transition-colors"
                      >
                        <Icon size={15} strokeWidth={2} className="text-[#f0603f] shrink-0" />
                        <span className="text-[13px] font-semibold text-white whitespace-nowrap">
                          {name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl max-w-3xl">
            What we stand{" "}
            <span className="font-script" style={{ color: "#f0603f" }}>
              for
            </span>
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-14">
            {koodhValues.map((v, i) => (
              <Reveal as="div" key={v.title} delay={(i % 2) * 90} className="flex gap-6">
                <span className="text-neutral-300 font-extrabold text-3xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-2xl text-black">{v.title}</h3>
                  <p className="mt-3 text-neutral-600 text-lg leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBand
          title={
            <>
              Want to work{" "}
              <span className="font-script text-[#ffb59c]">with us</span>?
            </>
          }
          label="Get in touch"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
