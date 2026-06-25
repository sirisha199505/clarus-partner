import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { TECHNOLOGIES } from "../data/content";

export default function Technologies() {
  return (
    <Section id="technologies" className="bg-brand-50/30 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Technologies"
        title="A modern, battle-tested stack"
        subtitle="We work with the tools and platforms that power the world's leading products — chosen for fit, not fashion."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {TECHNOLOGIES.map((tech, i) => (
          <Reveal key={tech.name} delay={(i % 6) * 60}>
            <div className="group flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-glow">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-cyan-50 text-brand-600 transition-all duration-300 group-hover:from-brand-600 group-hover:to-cyan-500 group-hover:text-white">
                <Icon name={tech.icon} size={24} />
              </span>
              <span className="text-sm font-semibold text-ink">{tech.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
