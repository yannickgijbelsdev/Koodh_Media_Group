import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What does Koodh Media Group do?",
    intro:
      "We create audio branding for radio \u2014 sweepers, jingles, radio beds and imaging \u2014 and we shoot event and concert photography. In short: we make your station sound unmistakable and your event look unforgettable.",
  },
  {
    q: "What kind of audio do you produce?",
    intro: "Our audio work includes:",
    list: [
      "Sweepers & station IDs",
      "Promos & trailers",
      "Jingles",
      "Radio beds & music beds",
      "Voice-over direction and mixing",
    ],
  },
  {
    q: "What kind of photography do you offer?",
    intro:
      "Live event, festival and concert photography. We capture the artists on stage and the energy of the crowd, and deliver edited images fast so you can share them while the moment is still hot. Recent work includes Genk On Stage and Zomernoten.",
  },
  {
    q: "Where are you based and where do you work?",
    intro:
      "We\u2019re based in Budel-Schoot (Noord-Brabant, NL) and Pelt (Limburg, BE) and work across Limburg, Brabant and the whole of the Netherlands and Belgium. For events we travel to wherever the stage is.",
  },
  {
    q: "How fast do you deliver?",
    intro:
      "Audio productions are delivered on agreed deadlines \u2014 radio moves fast and so do we. For event photography we deliver edited highlights quickly, usually within a day, so you can post while the buzz is still fresh.",
  },
  {
    q: "How much does it cost?",
    intro:
      "It depends on the scope \u2014 a single sweeper is very different from a full imaging pack or a weekend of festival photography. We always send a clear, no-obligation quote up front so you know exactly what to expect, with no surprises.",
  },
  {
    q: "How do we get started?",
    intro:
      "Easy \u2014 send us an e-mail at yannick.gijbels@koodhmediagroup.com with your station, event or idea. We\u2019ll get back to you with honest advice and a tailored quote.",
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
