import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import { OPPORTUNITIES } from "../data/content";

export default function BusinessOpportunities() {
  return (
    <Section id="opportunities" className="bg-brand-50/30 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Business Opportunities"
        title="Let's grow together, globally"
        subtitle="We actively seek partners who share our standards. Whatever your model, there's a way to build something bigger with Clarus."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {OPPORTUNITIES.map((o, i) => (
          <Reveal key={o.title} delay={(i % 2) * 100}>
            <article className="group relative flex h-full items-start gap-5 overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-glow">
              <span className="absolute right-6 top-6 text-cyan-300/40 transition-all duration-400 group-hover:-translate-y-1 group-hover:text-cyan-400">
                <Icon name="arrowUpRight" size={24} />
              </span>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-glow transition-transform duration-400 group-hover:scale-110">
                <Icon name={o.icon} size={26} />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">
                  {o.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-soft">
                  {o.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* CTA banner */}
      <Reveal className="mt-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-600 to-cyan-500 p-8 text-center shadow-glow sm:p-12">
          <div className="ring-grid absolute inset-0 opacity-20" />
          <div className="relative">
            <h3 className="mx-auto max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to explore a partnership opportunity?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-brand-50/90">
              Tell us about your goals and our partnerships team will be in touch
              within one business day.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button
                href="#enquiry"
                variant="secondary"
                icon="arrowRight"
                className="!text-brand-700"
              >
                Become a Partner
              </Button>
              <Button href="#contact" variant="light" icon="mail">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
