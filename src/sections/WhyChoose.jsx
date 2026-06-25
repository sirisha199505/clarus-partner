import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { WHY_CHOOSE } from "../data/content";

export default function WhyChoose() {
  return (
    <Section id="why" className="bg-white/50 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Why Clarus"
        title="Built to earn long-term trust"
        subtitle="Companies choose Clarus when they want a partner who is genuinely accountable for outcomes — not just a vendor who ships and leaves."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 80}>
            <div className="group relative flex h-full gap-4 rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50/30 p-6 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white transition-all duration-400 group-hover:bg-cyan-500 group-hover:rotate-6">
                <Icon name={item.icon} size={22} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">
                  {item.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
