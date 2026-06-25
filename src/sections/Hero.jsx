import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Counter from "../components/ui/Counter";
import Particles from "../components/ui/Particles";
import { HERO_STATS, TRUST_LOGOS } from "../data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 pt-28 text-white sm:pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 ring-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 animate-float rounded-full bg-brand-600/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Particles count={22} className="bg-cyan-300/50" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10">
        {/* Copy */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Global IT & Consulting Partner
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Technology partnerships that
            <span className="text-gradient animate-shine"> move business forward</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/80">
            Clarus IT Solutions blends enterprise-grade IT services with sharp
            business consulting — helping ambitious companies modernize, scale,
            and build lasting global partnerships.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#enquiry" icon="arrowRight">
              Start a Partnership
            </Button>
            <Button href="#it-services" variant="light" icon="arrowUpRight">
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <Counter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative mx-auto max-w-md">
            {/* Main glass panel */}
            <div className="glass-dark rounded-3xl p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500">
                    <Icon name="gauge" size={22} className="text-white" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Delivery Health</p>
                    <p className="text-xs text-brand-100/60">Live program metrics</p>
                  </div>
                </div>
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                  +24%
                </span>
              </div>

              {/* Faux chart */}
              <div className="mt-6 flex h-32 items-end gap-2.5">
                {[42, 58, 50, 70, 64, 82, 76, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600/40 to-cyan-400/90"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: "rocket", k: "Velocity", v: "98 pts" },
                  { icon: "shield", k: "Security", v: "A+" },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <Icon name={m.icon} size={18} className="text-cyan-300" />
                    <p className="mt-2 text-xs text-brand-100/60">{m.k}</p>
                    <p className="text-lg font-bold text-white">{m.v}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Trust marquee */}
      <div className="relative border-y border-white/10 bg-white/[0.03] py-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-100/50">
          Trusted by forward-thinking enterprises
        </p>
        <div className="group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14 group-hover:[animation-play-state:paused]">
            {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-xl font-bold tracking-tight text-white/35 transition-colors hover:text-white/70"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
