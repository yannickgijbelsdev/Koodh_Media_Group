import React from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, PenTool, Rocket } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import usePageMeta from "../lib/seo";

const EMAIL = "yannick.gijbels@koodhmediagroup.com";

const steps = [
  { icon: MessageCircle, title: "You reach out", text: "Send us a quick e-mail with your station, event or idea \u2014 no essay needed." },
  { icon: PenTool, title: "We think along", text: "We reply with honest, jargon-free advice and a clear next step that fits you." },
  { icon: Rocket, title: "We get to work", text: "Once it clicks, we roll up our sleeves and turn the plan into sound and images." },
];

export default function Contact() {
  usePageMeta({
    title: "Contact",
    description:
      "Get in touch with Koodh Media Group about radio imaging, jingles or event photography. E-mail yannick.gijbels@koodhmediagroup.com \u2014 based in Budel-Schoot (NL) and Pelt (BE).",
    path: "/contact",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s start a{" "}
              <span className="font-script" style={{ color: "#f0603f" }}>
                conversation
              </span>
            </>
          }
          subtitle={"Got a station to brand or an event to capture? Drop us a line and we\u2019ll get back to you \u2014 real people, no ticket numbers."}
          chips={["Radio imaging", "Jingles", "Event photography", "NL & BE"]}
        />

        {/* Contact channel */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 pb-6">
          <div className="max-w-2xl">
            <Reveal as="div">
              <a
                href={`mailto:${EMAIL}?subject=Project%20enquiry`}
                data-testid="contact-channel-0"
                className="group flex items-start gap-5 rounded-2xl border border-black/10 bg-neutral-50 p-7 md:p-8 hover:border-[#f0603f] hover:bg-white transition-colors h-full"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0603f]/10 text-[#f0603f] group-hover:bg-[#f0603f] group-hover:text-white transition-colors">
                  <Mail size={20} strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    General enquiries
                  </p>
                  <p className="mt-2 text-lg md:text-2xl font-bold text-black break-words">
                    {EMAIL}
                  </p>
                  <p className="mt-3 text-neutral-600 leading-relaxed">
                    Audio branding or event photography &mdash; start here.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f0603f]">
                    Send an e-mail
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Where we work */}
          <Reveal as="div" className="mt-6 max-w-2xl flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-black/10 p-6 md:p-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-black">
              <MapPin size={18} strokeWidth={1.8} />
            </span>
            <p className="text-neutral-600">
              <span className="font-semibold text-black">Budel-Schoot (NL) &amp; Pelt (BE).</span>{" "}
              Working across Limburg, Brabant, the Netherlands and Belgium.
            </p>
          </Reveal>
        </section>

        {/* What happens next */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            What happens{" "}
            <span className="font-script" style={{ color: "#f0603f" }}>
              next
            </span>
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 100} className="border-t-2 border-black pt-6">
                  <div className="flex items-center gap-4">
                    <span className="font-extrabold text-3xl text-neutral-300">0{i + 1}</span>
                    <Icon size={24} strokeWidth={1.7} className="text-[#f0603f]" />
                  </div>
                  <h3 className="mt-5 font-bold text-xl text-black">{s.title}</h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed">{s.text}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <CtaBand
          title={
            <>
              Not sure where to{" "}
              <span className="font-script text-[#ffb59c]">start</span>?
            </>
          }
          to="/about"
          label="Explore what we do"
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
