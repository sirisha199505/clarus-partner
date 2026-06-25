import { useEffect, useState } from "react";
import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <Section id="testimonials" className="bg-white/50 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Client Testimonials"
        title="Trusted by leaders who demand results"
        subtitle="Don't just take our word for it — here's what our partners say about working with Clarus."
      />

      <Reveal className="mt-10">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-glow sm:p-12">
          <div className="ring-grid absolute inset-0 opacity-30" />
          <Icon
            name="quote"
            size={64}
            className="relative text-cyan-400/30"
            strokeWidth={1.4}
          />

          <div className="relative mt-2 min-h-[10rem]">
            {TESTIMONIALS.map((t, i) => (
              <blockquote
                key={t.name}
                className={`transition-all duration-500 ${
                  i === index
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"
                }`}
              >
                <p className="font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                  "{t.quote}"
                </p>
                <footer className="mt-7 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 font-display text-lg font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-brand-100/60">{t.role}</p>
                  </div>
                  <div className="ml-auto hidden gap-0.5 sm:flex">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Icon
                        key={s}
                        name="star"
                        size={18}
                        className="fill-cyan-400 text-cyan-400"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Dots */}
          <div className="relative mt-8 flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-cyan-400" : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
