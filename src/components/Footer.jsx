import Logo from "./Logo";
import Icon from "./ui/Icon";
import { CONTACT_INFO } from "../data/content";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Software Engineering", href: "#it-services" },
      { label: "Cloud & DevOps", href: "#it-services" },
      { label: "AI & Data Analytics", href: "#it-services" },
      { label: "Cybersecurity", href: "#it-services" },
    ],
  },
  {
    title: "Consulting",
    links: [
      { label: "Digital Transformation", href: "#consulting" },
      { label: "Business Strategy", href: "#consulting" },
      { label: "Process Optimization", href: "#consulting" },
      { label: "Technology Advisory", href: "#consulting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Industries", href: "#industries" },
      { label: "Partnership", href: "#partnership" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-brand-100/70">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed">
              Enterprise IT services and business consulting. We build long-term
              global technology partnerships that move businesses forward.
            </p>
            <div className="mt-6 flex gap-3">
              {["linkedin", "twitter", "globe"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={icon}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  <Icon name={icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-cyan-300"
                    >
                      <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          {CONTACT_INFO.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-3 text-sm transition-colors hover:text-white"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-cyan-300">
                <Icon name={c.icon} size={16} />
              </span>
              {c.value}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {2026} Clarus IT Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
