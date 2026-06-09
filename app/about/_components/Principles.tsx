import Container from "../../_components/ui/Container";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 11L11 5M11 5H6M11 5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const principles = [
  {
    title: "Correctness before cleverness",
    description:
      "In fintech and on-chain systems, a clever shortcut is a future incident. We optimize for code that is obviously right.",
  },
  {
    title: "Own the outcome, not the ticket",
    description:
      "We measure ourselves by the problem solved and the value shipped — not by hours logged or features merged.",
  },
  {
    title: "Architecture is a long game",
    description:
      "Every decision is made with the next five years in mind. We build foundations that growth strengthens rather than breaks.",
  },
  {
    title: "Write it down, make it legible",
    description:
      "Clear documentation, clear interfaces, clear thinking. Software that only one person understands is a liability.",
  },
];

const ticker = [
  "Rigor",
  "Ownership",
  "Craft",
  "Clarity",
  "Resilience",
  "Trust",
  "Precision",
];

export default function Principles() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How we operate
          </h2>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-faint">
            <span className="tabular-nums text-foreground">
              {String(principles.length).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="uppercase">Principles</span>
          </div>
        </div>

        {/* Ledger rows — mirrors the homepage services pattern */}
        <div className="border-t border-border">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-5 gap-y-2 border-b border-border py-8 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.15fr)_2.5rem] md:items-baseline md:gap-x-10 md:py-9"
            >
              <span className="font-mono text-sm tabular-nums text-faint transition-colors duration-300 group-hover:text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {principle.title}
              </h3>

              <p className="col-span-2 text-sm leading-6 text-muted md:col-span-1 md:col-start-3">
                {principle.description}
              </p>

              <span className="hidden text-faint opacity-0 transition-opacity duration-300 ease-out md:flex md:items-center md:justify-end md:group-hover:opacity-100">
                <ArrowUpRight />
              </span>
            </article>
          ))}
        </div>
      </Container>

      {/* Value ticker — quiet, continuous motion */}
      <div className="relative mt-16 overflow-hidden border-y border-border py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="about-ticker flex w-max items-center gap-10 pr-10">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((word, i) => (
            <span
              key={`${word}-${i}`}
              aria-hidden={i >= ticker.length}
              className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.3em] text-faint"
            >
              {word}
              <span className="text-accent">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
