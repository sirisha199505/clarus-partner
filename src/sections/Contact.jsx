import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import { CONTACT_INFO } from "../data/content";

const OFFICES = [
  { city: "San Francisco", country: "United States", role: "Global HQ" },
  { city: "London", country: "United Kingdom", role: "EMEA Hub" },
  { city: "Singapore", country: "Singapore", role: "APAC Hub" },
  { city: "Bengaluru", country: "India", role: "Delivery Center" },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      container={false}
      className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 ring-grid opacity-40" />
      <div className="pointer-events-none absolute -right-16 top-10 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          light
          eyebrow="Contact"
          title="Let's start a conversation"
          subtitle="Reach out directly or use the enquiry form — wherever you are, we're ready to help you take the next step."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Contact methods */}
          <div className="grid gap-5 lg:col-span-1">
            {CONTACT_INFO.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 90}
                as="a"
                href={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
                  <Icon name={c.icon} size={22} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-100/50">
                    {c.label}
                  </p>
                  <p className="font-semibold text-white">{c.value}</p>
                </div>
                <Icon
                  name="arrowUpRight"
                  size={18}
                  className="ml-auto text-cyan-300/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                />
              </Reveal>
            ))}

            <Reveal delay={280}>
              <Button href="#enquiry" icon="arrowRight" className="w-full">
                Open the enquiry form
              </Button>
            </Reveal>
          </div>

          {/* Offices */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <Icon name="globe" size={24} className="text-cyan-300" />
                <h3 className="font-display text-xl font-bold text-white">
                  Our global offices
                </h3>
              </div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {OFFICES.map((o) => (
                  <div
                    key={o.city}
                    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-cyan-400/30"
                  >
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 text-cyan-300">
                      <Icon name="mapPin" size={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{o.city}</p>
                      <p className="text-sm text-brand-100/60">{o.country}</p>
                      <span className="mt-2 inline-block rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
                        {o.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-7 text-sm leading-relaxed text-brand-100/60">
                Operating across 28 countries with follow-the-sun delivery — so
                your projects keep moving around the clock.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
