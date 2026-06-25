import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { IT_SERVICES } from "../data/content";

export default function ITServices() {
  return (
    <Section id="it-services" className="bg-brand-50/40 py-24 sm:py-28">
      <SectionHeading
        eyebrow="IT Services"
        title="Engineering that scales with you"
        subtitle="From first line of code to enterprise-wide platforms, our teams design, build, and run the technology that powers your business."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {IT_SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 90}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-glow">
              {/* hover gradient wash */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/0 to-cyan-50/0 opacity-0 transition-opacity duration-400 group-hover:from-brand-50 group-hover:to-cyan-50/60 group-hover:opacity-100" />

              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={s.icon} size={26} />
                </span>

                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                  {s.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-brand-100 bg-brand-50/70 px-3 py-1 text-xs font-semibold text-brand-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#enquiry"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Learn more
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
