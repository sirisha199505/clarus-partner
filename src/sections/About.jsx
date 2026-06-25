import Section, { SectionHeading } from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Icon from "../components/ui/Icon";
import { ABOUT_PILLARS } from "../data/content";

export default function About() {
  return (
    <Section id="about" className="bg-white py-24 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-100 to-cyan-100/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-navy-900 to-navy-800 p-8 shadow-soft">
              <div className="ring-grid absolute inset-0 opacity-30" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: "users", k: "Specialists", v: "450+" },
                  { icon: "globe", k: "Delivery hubs", v: "9" },
                  { icon: "briefcase", k: "Industries", v: "12+" },
                  { icon: "award", k: "Awards won", v: "30+" },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white">
                      <Icon name={m.icon} size={20} />
                    </span>
                    <p className="mt-4 font-display text-2xl font-extrabold text-white">
                      {m.v}
                    </p>
                    <p className="text-sm text-brand-100/60">{m.k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="About Clarus"
            title="A partner built for the long term"
            subtitle="We're an enterprise technology and consulting firm that exists to turn ambition into outcomes. For over a decade, we've helped organizations across the globe modernize their technology, sharpen their strategy, and grow through trusted partnerships."
          />

          <div className="mt-9 space-y-5">
            {ABOUT_PILLARS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-brand-100 hover:bg-brand-50/50"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={p.icon} size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-soft">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
