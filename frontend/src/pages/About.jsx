import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Camera, Radio } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import {
  koodhIntro,
  koodhValues,
  koodhStats,
  koodhClients,
} from "../mock";
import accentBg from "../assets/accent-bg.png";
import usePageMeta from "../lib/seo";
import yannickImg from "../assets/yannick-gijbels.png";

const services = [
  {
    name: "Photography",
    icon: Camera,
    desc: "Festival, concert and live event photography that captures the energy of the stage.",
    to: "/photography",
  },
  {
    name: "Audio & Imaging",
    icon: Radio,
    desc: "Sweepers, jingles, radio beds and imaging that give your station its signature sound.",
    to: "/audio",
  },
];

const team = [{ name: "Yannick Gijbels", photo: yannickImg }];

export default function About() {
  usePageMeta({
    title: "About",
    description:
      "Koodh Media Group creates audio branding for radio and shoots event photography across the Netherlands and Belgium \u2014 sweepers, jingles, imaging and live festival photography.",
    path: "/about",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="About Koodh Media Group"
          title={
            <>
              Creating new{" "}
              <span className="font-script" style={{ color: "#f0603f" }}>
                experiences
              </span>
            </>
          }
          subtitle={koodhIntro}
          chips={["Radio imaging", "Jingles", "Event photography", "NL & BE"]}
        />

        {/* What we do */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            What we{" "}
            <span className="font-script" style={{ color: "#f0603f" }}>
              do
            </span>
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.name} delay={i * 90}>
                  <Link
                    to={s.to}
                    data-testid={`about-service-${i}`}
                    className="group block h-full border-t-2 border-black pt-6 hover:border-[#f0603f] transition-colors"
                  >
                    <Icon size={30} strokeWidth={1.6} className="text-black group-hover:text-[#f0603f] transition-colors" />
                    <h3 className="mt-5 font-extrabold uppercase-tight text-2xl text-black">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-neutral-600 leading-relaxed">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f0603f]">
                      Learn more
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* How we work */}
        <section className="relative overflow-hidden bg-[#160638] text-[#f4efe3] py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-50 bg-cover bg-center"
            style={{ backgroundImage: `url(${accentBg})` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#160638] via-[#160638]/90 to-[#160638]/70" />
          <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
            <Reveal className="max-w-3xl">
              <h2 className="font-extrabold uppercase-tight text-3xl md:text-5xl leading-[1.05]">
                How we{" "}
                <span className="font-script text-[#ffb59c]">work</span>
              </h2>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-[#f4efe3]/75 leading-relaxed">
                <p>
                  We start by listening. We get to know your station, your event
                  and the feeling you want your audience to have. From there we
                  shape a sound and a look that are distinctly yours.
                </p>
                <p>
                  Whether it&rsquo;s a full imaging pack, a set of jingles or a
                  weekend of festival photography, we work fast, stay on brand and
                  deliver on time &mdash; so you can focus on the show.
                </p>
              </div>
            </Reveal>
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

        {/* Stats */}
        <section className="relative overflow-hidden bg-[#160638] text-[#f4efe3] py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-50 bg-cover bg-center"
            style={{ backgroundImage: `url(${accentBg})` }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#160638]/70 via-[#160638]/85 to-[#160638]" />
          <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {koodhStats.map((s, i) => (
                <Reveal as="div" key={s.label} delay={i * 90}>
                  <div className="font-extrabold text-5xl md:text-7xl">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[#f4efe3]/60 text-sm font-medium">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="bg-[#160638] border-t border-white/10 pb-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <h2 className="text-[#f4efe3] text-2xl md:text-3xl font-extrabold uppercase-tight pt-16">
              Trusted <span className="font-script text-[#ffb59c]">by</span>
            </h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
              {koodhClients.map((c, i) => (
                <Reveal as="div" key={c.name} delay={i * 80} className="flex items-center justify-center h-16">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-14 max-w-[190px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team teaser */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl leading-[1.05]">
                Meet the{" "}
                <span className="font-script" style={{ color: "#f0603f" }}>
                  maker
                </span>
              </h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-xl">
                Behind Koodh Media Group is Yannick &mdash; the person behind the
                mic and the lens. Get to know who you&rsquo;ll actually be working
                with.
              </p>
              <Link
                to="/meet-us"
                data-testid="about-meet-us-link"
                className="mt-8 inline-flex items-center gap-2 bg-black text-white rounded-full pl-6 pr-5 py-3.5 text-sm font-semibold hover:bg-[#f0603f] transition-colors group"
              >
                Meet us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-1 gap-5 max-w-sm">
              {team.map((m) => (
                <div key={m.name} className="group">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 ring-1 ring-black/5">
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>
                  <p className="mt-3 font-semibold text-black text-sm">{m.name}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <CtaBand
          title={
            <>
              Have a{" "}
              <span className="font-script text-[#ffb59c]">project</span> in mind?
            </>
          }
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
