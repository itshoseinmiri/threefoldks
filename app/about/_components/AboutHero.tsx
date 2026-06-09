import Container from "../../_components/ui/Container";

function TriadRing() {
  // Three nodes orbiting a central "3" — a literal nod to the threefold name.
  const nodes = [
    { angle: -90, label: "ENG" },
    { angle: 30, label: "ARC" },
    { angle: 150, label: "STR" },
  ];
  const r = 110;
  const cx = 150;
  const cy = 150;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px]">
      {/* Soft glow */}
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fa8f2]/25 blur-3xl" />

      <svg viewBox="0 0 300 300" className="relative h-full w-full">
        <defs>
          <linearGradient id="triadStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2f5de0" />
            <stop offset="100%" stopColor="#8fa8f2" />
          </linearGradient>
        </defs>

        {/* Connecting triangle between the three disciplines */}
        <g className="triad-spin">
          <polygon
            points={nodes
              .map((n) => {
                const rad = (n.angle * Math.PI) / 180;
                return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
              })
              .join(" ")}
            fill="none"
            stroke="url(#triadStroke)"
            strokeWidth="1.25"
            strokeLinejoin="round"
            opacity="0.7"
          />
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#ececec"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          {nodes.map((n) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = cx + r * Math.cos(rad);
            const y = cy + r * Math.sin(rad);
            return (
              <g key={n.label}>
                <circle cx={x} cy={y} r="7" fill="#ffffff" stroke="#2f5de0" strokeWidth="1.5" />
                <circle cx={x} cy={y} r="2.5" fill="#2f5de0" />
              </g>
            );
          })}
        </g>

        {/* Center mark */}
        <circle cx={cx} cy={cy} r="34" fill="#ffffff" stroke="#ececec" strokeWidth="1" />
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontSize: 42, fontWeight: 600, letterSpacing: "-0.04em" }}
        >
          3
        </text>
      </svg>

      {/* Orbit labels pinned to corners */}
      <span className="absolute left-1/2 top-2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        Engineering
      </span>
      <span className="absolute bottom-6 right-2 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        Architecture
      </span>
      <span className="absolute bottom-6 left-2 font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        Strategy
      </span>
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Dot-grid texture — mirrors the homepage backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,10,10,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      <Container className="relative grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start gap-7">
          <span
            className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur"
            style={{ "--reveal-delay": "0s" } as React.CSSProperties}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500/50" />
            About threefold
          </span>

          <h1
            className="reveal text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl"
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            Three disciplines.
            <br />
            One standard of
            <br />
            <span className="text-faint">craft.</span>
            <span className="text-accent">*</span>
          </h1>

          <p
            className="reveal max-w-md text-base leading-7 text-muted"
            style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
          >
            threefold is a small software engineering team where engineering
            rigor, systems architecture, and product strategy fold into one
            practice — taking every product from zero to a deployed, running
            system.
          </p>

          <dl
            className="reveal mt-2 flex flex-wrap gap-x-10 gap-y-4"
            style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
          >
            {[
              { value: "2015", label: "Founded" },
              { value: "Remote-first", label: "Distributed team" },
              { value: "3 domains", label: "Fintech · Web3 · AEC" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="text-lg font-semibold tracking-tight text-foreground">
                  {item.value}
                </dt>
                <dd className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="reveal"
          style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
        >
          <TriadRing />
        </div>
      </Container>
    </section>
  );
}
