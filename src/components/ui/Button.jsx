import Icon from "./Icon";

/**
 * Button — primary/secondary/ghost variants with optional trailing icon and
 * a sliding shine micro-interaction on the primary variant.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  className = "",
  ...props
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "overflow-hidden bg-brand-600 text-white shadow-glow hover:-translate-y-0.5 hover:bg-brand-500",
    secondary:
      "border border-brand-200 bg-white text-brand-700 shadow-soft hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600",
    ghost:
      "text-white/90 hover:text-white",
    light:
      "border border-white/30 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20",
  };

  const content = (
    <>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative">{children}</span>
      {icon && (
        <Icon
          name={icon}
          size={18}
          className="relative transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {content}
    </button>
  );
}
