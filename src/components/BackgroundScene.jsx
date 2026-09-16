import { useMemo } from "react";

// Fixed-position backdrop that sits behind the entire page and never scrolls.
// It's built from three cheap layers rather than an image, so it's crisp at
// any resolution, adapts instantly to the light/dark theme (it reads the
// --scene-* CSS variables from index.css), and never fights page content
// for contrast because it lives at z-index -10 with pointer-events off.
//
// Layer 1: two soft drifting glow blobs (radial gradients)
// Layer 2: a PCB-trace SVG — right-angled lines + node dots, one live pulse
// Layer 3: a handful of twinkling particles, standing in for "circuit dust"

// Hand-placed trace paths, motherboard-style: mostly right angles, a few
// diagonals, spread across a 1600x900 canvas so it tiles nicely at any
// viewport via bg-size/object cover behavior of the wrapping SVG.
const TRACES = [
  "M 80 120 H 340 V 260 H 620",
  "M 620 260 V 60 H 940",
  "M 940 60 H 1240 V 220",
  "M 120 420 H 420 V 560 H 200 V 760",
  "M 420 560 H 760 V 700 H 1040",
  "M 1040 700 V 480 H 1320 V 640",
  "M 1240 220 V 460 H 1480",
  "M 760 700 V 860",
  "M 200 760 H 60",
  "M 1320 640 H 1540",
];

const NODES = [
  [80, 120],
  [340, 120],
  [340, 260],
  [620, 260],
  [620, 60],
  [940, 60],
  [1240, 60],
  [1240, 220],
  [120, 420],
  [420, 420],
  [420, 560],
  [200, 560],
  [200, 760],
  [760, 560],
  [760, 700],
  [1040, 700],
  [1040, 480],
  [1320, 480],
  [1320, 640],
  [1480, 220],
  [60, 760],
  [1540, 640],
];

function seededRandom(seed) {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
}

function BackgroundScene() {
  // Particles are generated once (not on every render) with a fixed seed so
  // the layout is stable across re-renders and theme toggles.
  const particles = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      left: `${(seededRandom(i * 3 + 1) * 100).toFixed(1)}%`,
      top: `${(seededRandom(i * 7 + 2) * 100).toFixed(1)}%`,
      size: 1.5 + seededRandom(i * 5 + 3) * 2,
      delay: `${(seededRandom(i * 11 + 4) * 4).toFixed(2)}s`,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-core-black transition-colors duration-500"
    >
      {/* Layer 1: drifting glows */}
      <div
        className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full blur-3xl animate-drift"
        style={{ background: "var(--scene-glow-a)" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-8%] h-[620px] w-[620px] rounded-full blur-3xl animate-drift"
        style={{ background: "var(--scene-glow-b)", animationDelay: "1.4s" }}
      />

      {/* Layer 2: PCB traces */}
      <svg
        className="absolute inset-0 h-full w-full opacity-90"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {TRACES.map((d, i) => (
          <path
            key={d}
            d={d}
            stroke="var(--scene-line-soft)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
        {/* One or two traces get a traveling pulse for a hint of "live circuit" */}
        <path
          d={TRACES[1]}
          stroke="var(--scene-line)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="14 226"
          className="animate-[pulseTrace_5s_linear_infinite]"
        />
        <path
          d={TRACES[5]}
          stroke="var(--scene-line)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="10 230"
          className="animate-[pulseTrace_6.5s_linear_infinite]"
          style={{ animationDelay: "1.8s" }}
        />

        {NODES.map(([x, y]) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="3"
            fill="var(--scene-line-soft)"
          />
        ))}
      </svg>

      {/* Layer 3: twinkling particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-signal-cyan animate-twinkle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Vignette so text stays readable over busy traces */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, transparent 0%, var(--scene-vignette) 85%)",
        }}
      />
    </div>
  );
}

export default BackgroundScene;
