import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a number from 0 to `end` once the element scrolls
 * into view. Returns [ref, displayValue].
 */
export default function useCountUp(end, { duration = 1800, decimals = 0 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const reduce = window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;
            if (reduce) {
              setValue(end);
              return;
            }
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              // easeOutExpo
              const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
              setValue(end * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setValue(end);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return [ref, display];
}
