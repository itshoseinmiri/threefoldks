import Container from "../../_components/ui/Container";

function Asterisk() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="ml-1 inline-block -translate-y-2 text-accent"
    >
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="4.5" y1="7.5" x2="19.5" y2="16.5" />
        <line x1="4.5" y1="16.5" x2="19.5" y2="7.5" />
      </g>
    </svg>
  );
}

const phases = [
  {
    key: "Discover",
    title: "Discover",
    description:
      "We pressure-test the problem, the constraints, and the risk before a line of code is written.",
  },
  {
    key: "Architect",
    title: "Architect",
    description:
      "We design the system for the next five years — data, services, and delivery mapped end-to-end.",
  },
  {
    key: "Build",
    title: "Build",
    description:
      "Typed, tested, observable code shipped in weekly increments, with engineers you talk to directly.",
  },
  {
    key: "Scale",
    title: "Scale",
    description:
      "We harden, instrument, and optimize — then hand over a system your team can own with confidence.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-border bg-subtle/40 py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How we deliver
            <Asterisk />
          </h2>
          <p className="max-w-xs text-sm leading-6 text-muted">
            One repeatable path from first conversation to a system in
            production — no black boxes.
          </p>
        </div>

        {/* Stepped timeline */}
        <div className="relative grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting rail (desktop) */}
          <span className="pointer-events-none absolute left-0 right-0 top-[2.15rem] hidden h-px bg-border lg:block" />

          {phases.map((phase, index) => (
            <article
              key={phase.key}
              className="group relative flex flex-col gap-4 bg-subtle/40 px-1 py-2 lg:px-6"
            >
              {/* Node */}
              <div className="relative flex items-center gap-4">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs tabular-nums text-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border lg:hidden" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {phase.title}
              </h3>
              <p className="max-w-xs text-sm leading-6 text-muted">
                {phase.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
