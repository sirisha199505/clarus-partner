/**
 * Logo — the Clarus IT Solutions mark + wordmark.
 * `light` renders white text for dark backgrounds.
 */
export default function Logo({ light = false, className = "" }) {
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 shadow-glow transition-transform duration-300 group-hover:scale-105">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M19 7.5A8 8 0 1 0 20 14"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2.6" fill="white" />
        </svg>
      </span>
      <span
        className={`font-display text-lg font-semibold leading-none tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Clarus
        <span className="text-gradient"> IT</span>
        <span className={`block text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${light ? "text-brand-100/70" : "text-slate-soft"}`}>
          Solutions
        </span>
      </span>
    </a>
  );
}
