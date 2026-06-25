import Particles from "./ui/Particles";

/**
 * AuroraBackground — a fixed, full-viewport premium backdrop.
 * Layers: base gradient → slow-drifting violet/purple aurora blobs →
 * faint grid → floating particles. Sits behind the app (-z-10); the
 * translucent sections let it glow through for a glassmorphism feel.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base tint */}
      <div className="premium-bg absolute inset-0" />

      {/* Aurora blobs — slow, elegant drift (GPU-composited transforms) */}
      <div className="absolute inset-0">
        <div className="absolute -left-[12%] -top-[18%] h-[58vw] w-[58vw] animate-aurora-1 rounded-full bg-brand-500/30 blur-[90px]" />
        <div className="absolute -right-[14%] top-[6%] h-[50vw] w-[50vw] animate-aurora-2 rounded-full bg-cyan-500/25 blur-[100px]" />
        <div className="absolute -bottom-[20%] left-[22%] h-[55vw] w-[55vw] animate-aurora-3 rounded-full bg-brand-600/25 blur-[110px]" />
        <div className="absolute left-[52%] top-[34%] h-[34vw] w-[34vw] animate-aurora-2 rounded-full bg-cyan-400/20 blur-[90px]" />
      </div>

      {/* Faint grid for depth */}
      <div className="ring-grid absolute inset-0 opacity-30" />

      {/* Floating particles */}
      <Particles count={28} className="bg-brand-500/40" />
    </div>
  );
}
