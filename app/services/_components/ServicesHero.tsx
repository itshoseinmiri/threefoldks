import Container from "../../_components/ui/Container";

const stats = [
  { value: "04", label: "Core practices" },
  { value: "03", label: "Industries served" },
  { value: "End-to-end", label: "Strategy → scale" },
];

// Engineering layers, top (closest to the idea) to bottom (closest to the metal).
const layers = [
  { label: "Strategy", note: "Direction", indent: 0, tone: "#eef1fb" },
  { label: "Architecture", note: "Structure", indent: 1, tone: "#dbe3fa" },
  { label: "Engineering", note: "Build", indent: 2, tone: "#b9c8f4" },
  { label: "Infrastructure", note: "Run", indent: 3, tone: "#7d99ec" },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Dot-grid texture */}
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
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute right-[-6%] top-1/4 h-72 w-72 rounded-full bg-[#8fa8f2]/20 blur-3xl" />

      <Container className="relative grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* Left — statement */}
        <div className="flex flex-col items-start gap-7">
          <span
            className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur"
            style={{ "--reveal-delay": "0s" } as React.CSSProperties}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500/50" />
            Services
          </span>

          <h1
            className="reveal text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl"
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            Engineering
            <br />
            across every
            <br />
            <span className="text-faint">layer.</span>
            <span className="text-accent">*</span>
          </h1>

          <p
            className="reveal max-w-md text-base leading-7 text-muted"
            style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
          >
            From the strategy that frames a problem to the infrastructure that
            keeps it running, we own every layer of building software — from
            zero to deployment — specialized across blockchain, fintech, and the
            3D web.
          </p>

          <dl
            className="reveal mt-2 flex flex-wrap gap-x-10 gap-y-4"
            style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
          >
            {stats.map((item) => (
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

        {/* Right — layered stack diagram */}
        <div
          className="reveal w-full"
          style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
        >
          <div className="relative mx-auto flex max-w-[420px] flex-col gap-3">
            {layers.map((layer, i) => (
              <div
                key={layer.label}
                className="reveal group flex items-center justify-between rounded-xl border border-[#dfe5f6] px-5 py-4 transition-transform duration-300 ease-out hover:-translate-y-0.5"
                style={
                  {
                    marginLeft: `${layer.indent * 1.5}rem`,
                    background: `linear-gradient(135deg, ${layer.tone}, #ffffff)`,
                    boxShadow:
                      "0 18px 40px -28px rgba(45,93,224,0.45)",
                    "--reveal-delay": `${0.36 + i * 0.08}s`,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tabular-nums text-accent">
                    L{layers.length - i}
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-foreground">
                    {layer.label}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  {layer.note}
                </span>
              </div>
            ))}
            {/* Spine connecting the layers */}
            <span className="pointer-events-none absolute -left-1 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#c4d0f5] to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
