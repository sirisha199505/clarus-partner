import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { INDUSTRIES } from "../data/content";

export default function Industries() {
  return (
    <Section id="industries" className="bg-white/50 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Deep expertise across sectors"
        subtitle="We bring domain knowledge to every engagement, so solutions fit the realities of your industry from day one."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.name} delay={(i % 4) * 70}>
            <div className="group relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-glow">
              {/* fill on hover */}
              <div className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-br from-brand-600 to-cyan-500 transition-transform duration-400 group-hover:scale-y-100" />
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-400 group-hover:bg-white/15 group-hover:text-white">
                <Icon name={ind.icon} size={30} />
              </span>
              <h3 className="relative font-display text-base font-bold text-ink transition-colors duration-400 group-hover:text-white">
                {ind.name}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
