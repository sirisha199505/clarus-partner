import { useMemo } from "react";

/**
 * Particles — a field of subtly floating dots. Positions/sizes/timings are
 * randomized once on mount. Each dot uses the `.particle` CSS animation.
 */
export default function Particles({ count = 24, className = "bg-brand-500/40" }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        duration: 12 + Math.random() * 16,
        delay: Math.random() * -22,
      })),
    [count]
  );

  return (
    <>
      {dots.map((d) => (
        <span
          key={d.id}
          className={`particle absolute ${className}`}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </>
  );
}
