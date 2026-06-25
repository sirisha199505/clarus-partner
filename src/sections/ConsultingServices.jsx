import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import { CONSULTING_SERVICES } from "../data/content";

export default function ConsultingServices() {
  return (
    <Section
      id="consulting"
      container={false}
      className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 ring-grid opacity-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <SectionHeading
              align="left"
              light
              eyebrow="Consulting"
              title="Strategy that turns into results"
              subtitle="Technology only matters when it serves the business. Our consultants pair industry insight with hands-on delivery to make change actually happen."
            />
            <div className="mt-8">
              <Button href="#enquiry" variant="light" icon="arrowRight">
                Book a strategy call
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {CONSULTING_SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 2) * 100}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-400 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                <span className="grid h-13 w-13 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/30 to-cyan-500/30 p-3.5 text-cyan-300 transition-colors duration-300 group-hover:text-white">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-100/70">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
