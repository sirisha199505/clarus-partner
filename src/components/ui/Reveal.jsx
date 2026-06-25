import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Reveal — wraps children in a scroll-triggered fade/slide-up.
 * `delay` (ms) staggers grouped items; `as` swaps the element tag.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  ...props
}) {
  const ref = useScrollReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
