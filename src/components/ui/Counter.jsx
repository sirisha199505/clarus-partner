import useCountUp from "../../hooks/useCountUp";

/**
 * Counter — an animated stat that counts up when scrolled into view.
 */
export default function Counter({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  className = "",
}) {
  const [ref, value] = useCountUp(end, { decimals });
  return (
    <div ref={ref} className={className}>
      <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {prefix}
        {value}
        {suffix}
      </div>
      {label && (
        <p className="mt-2 text-sm font-medium text-brand-100/80">{label}</p>
      )}
    </div>
  );
}
