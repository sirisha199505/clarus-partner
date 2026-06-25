import Reveal from "./Reveal";

/**
 * SectionHeading — consistent eyebrow + title + subtitle block used across
 * every section. Centered by default.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <Reveal
          as="span"
          className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={80}
        className={`font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-[2.6rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={160}
          className={`text-base leading-relaxed sm:text-lg ${
            light ? "text-brand-100/80" : "text-slate-soft"
          }`}
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}

/**
 * Section — standard padded section wrapper with id anchor.
 */
export default function Section({ id, className = "", children, container = true }) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}>
      {container ? (
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
