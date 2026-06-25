import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { PARTNERSHIP_STEPS } from "../data/content";

export default function PartnershipProcess() {
  return (
    <Section id="partnership" className="bg-brand-50/40 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Global Partnership Process"
        title="How a partnership with Clarus works"
        subtitle="A clear, proven path from first conversation to long-term, scalable collaboration — wherever in the world you operate."
      />

      <div className="relative mt-16">
        {/* Connecting line (desktop) */}
        <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-brand-200 via-cyan-300 to-brand-200 lg:block" />

        <div className="grid gap-8 lg:grid-cols-4">
          {PARTNERSHIP_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 120} className="relative">
              <div className="group flex h-full flex-col items-center text-center">
                <div className="relative z-10 grid h-24 w-24 place-items-center rounded-full border-4 border-brand-50/40 bg-white shadow-soft transition-transform duration-400 group-hover:scale-105">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
                    <Icon name={step.icon} size={28} />
                  </span>
                  <span className="absolute -right-1 -top-1 grid h-9 w-9 place-items-center rounded-full bg-navy-900 font-display text-xs font-bold text-cyan-300 ring-4 ring-brand-50/40">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
