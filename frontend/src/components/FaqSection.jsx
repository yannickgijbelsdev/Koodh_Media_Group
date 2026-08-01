import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What does Koodh Media Group do?",
    intro:
      "Two things, done with the same passion: audio branding and photography. We give radio stations and brands a signature sound, and we capture live events and people in striking images \u2014 across Belgium and the Netherlands.",
  },
  {
    q: "What kind of audio branding do you make?",
    intro: "Our audio branding includes:",
    list: [
      "Jingles",
      "Promos",
      "Sweepers",
      "Show elements",
    ],
    outro:
      "For audio branding we like to sit down together a few times throughout the process. That way we really get to understand your company \u2014 what you do and what you\u2019re looking for \u2014 so the sound truly fits your brand.",
  },
  {
    q: "What kind of photography do you offer?",
    intro: "We shoot:",
    list: [
      "Live events",
      "Festivals",
      "Concerts",
      "Company",
      "Portfolio",
    ],
    outro:
      "We capture the energy of the moment and deliver edited images fast, so you can share them while the buzz is still fresh.",
  },
  {
    q: "How far do you travel for a shoot?",
    intro:
      "Koodh Media Group is based in Budel-Schoot, but we drive all across Belgium and the Netherlands. Wherever it happens, we come to you \u2014 there is no fixed radius.",
  },
  {
    q: "Do you have your own photo studio?",
    intro:
      "No, we don\u2019t have our own photo studio, so having photos taken at our place isn\u2019t an option. We shoot on location \u2014 at your event, your venue or a spot that fits the story.",
  },
  {
    q: "What is included in the cost?",
    intro:
      "For a shoot, the price covers the drive to the location and back, the gear we bring, the shoot itself and all the editing work afterwards \u2014 everything you need to end up with a finished result.",
  },
  {
    q: "How much does it cost?",
    intro:
      "It depends on the scope and, for photography, on where the location is (the travel to and from it is part of the price). Because every job is different, it\u2019s best to request a quote \u2014 pop the details in an e-mail first and we\u2019ll send you a clear, no-obligation quote.",
  },
  {
    q: "How do we get started?",
    intro:
      "Easy \u2014 send us an e-mail at yannick.gijbels@koodhmediagroup.com with the details of your event, idea or brand. The more you share up front, the faster we can come back with honest advice and a tailored quote.",
  },
];

export default function FaqSection({ hideHeading = false }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-neutral-50 border-y border-black/5 py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        {!hideHeading && (
          <h2 className="font-extrabold uppercase-tight text-black text-3xl md:text-5xl">
            Frequently Asked{" "}
            <span className="font-script" style={{ color: "#f0603f" }}>
              questions
            </span>
          </h2>
        )}
        <div className={`${hideHeading ? "" : "mt-12"} border-t border-black/10`}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="div" key={i} delay={(i % 4) * 60} className="border-b border-black/10">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-bold text-black text-lg md:text-xl">
                    {f.q}
                  </span>
                  <span className="shrink-0 text-black">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-7 text-neutral-600 text-lg leading-relaxed space-y-4 animate-fade-up">
                    {f.intro && <p>{f.intro}</p>}
                    {f.list && (
                      <ul className="space-y-2">
                        {f.list.map((li, k) => (
                          <li key={k} className="flex items-start gap-3">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#f0603f] shrink-0" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {f.outro && <p>{f.outro}</p>}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
