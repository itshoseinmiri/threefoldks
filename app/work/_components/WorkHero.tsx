import Container from "../../_components/ui/Container";

const stats = [
  { value: "2", label: "Domains shipped" },
  { value: "100%", label: "In production" },
  { value: "Remote-first", label: "How we run" },
];

const index = [
  { num: "01", title: "vPay", domain: "Fintech · Mobile", year: "2024" },
  { num: "02", title: "Lamina", domain: "Manufacturing · Web 3D", year: "2023" },
];

export default function WorkHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Dot-grid texture — mirrors the homepage backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute left-[-8%] top-1/4 h-72 w-72 rounded-full bg-[#8fa8f2]/20 blur-3xl" />

      <Container className="relative grid items-end gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        {/* Left — statement */}
        <div className="flex flex-col items-start gap-7">
          <span
            className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur"
            style={{ "--reveal-delay": "0s" } as React.CSSProperties}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500/50" />
            Selected work
          </span>

          <h1
            className="reveal text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl"
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            Proof, shipped
            <br />
            to <span className="text-faint">production.</span>
            <span className="text-accent">*</span>
          </h1>

          <p
            className="reveal max-w-md text-base leading-7 text-muted"
            style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
          >
            A selection of products we&apos;ve taken from zero to deployment —
            from on-chain payments to real-time 3D on the web. Every one is
            live, and every one solves a real problem.
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

        {/* Right — case-file index, anchors into the gallery below */}
        <div
          className="reveal w-full"
          style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
        >
          <div className="rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur md:p-7">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
              <span>Index</span>
              <span className="tabular-nums text-foreground">
                {String(index.length).padStart(2, "0")} files
              </span>
            </div>
            <ul className="divide-y divide-border">
              {index.map((item) => (
                <li key={item.title}>
                  <a
                    href={`#${item.title.toLowerCase()}`}
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="font-mono text-sm tabular-nums text-faint transition-colors duration-300 group-hover:text-accent">
                      {item.num}
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span className="text-base font-medium tracking-tight text-foreground transition-transform duration-300 ease-out group-hover:translate-x-1">
                        {item.title}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                        {item.domain}
                      </span>
                    </span>
                    <span className="font-mono text-xs tabular-nums text-faint">
                      {item.year}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
