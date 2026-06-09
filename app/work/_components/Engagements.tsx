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

const engagements = [
  {
    title: "Zero-to-one builds",
    description:
      "We take an idea from blank repo to a production launch — product, architecture, and engineering carried all the way to deployment.",
  },
  {
    title: "Platform rebuilds",
    description:
      "When a system can no longer scale, we re-architect it without stopping the business — migrating safely, shipping incrementally.",
  },
  {
    title: "Embedded with your team",
    description:
      "We plug in alongside your engineers and own a hard surface area end to end — from first commit through to release.",
  },
];

export default function Engagements() {
  return (
    <section className="border-t border-border bg-subtle/40 py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How we engage
            <Asterisk />
          </h2>
          <p className="max-w-xs text-sm leading-6 text-muted">
            The work above started in one of three ways — every one owned end to
            end, from zero to deployment.
          </p>
        </div>

        <div className="border-t border-border">
          {engagements.map((item, index) => (
            <article
              key={item.title}
              className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-5 gap-y-2 border-b border-border py-8 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.15fr)_2.5rem] md:items-baseline md:gap-x-10 md:py-9"
            >
              <span className="font-mono text-sm tabular-nums text-faint transition-colors duration-300 group-hover:text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {item.title}
              </h3>

              <p className="col-span-2 text-sm leading-6 text-muted md:col-span-1 md:col-start-3">
                {item.description}
              </p>

              <span className="hidden text-faint opacity-0 transition-opacity duration-300 ease-out md:flex md:items-center md:justify-end md:group-hover:opacity-100">
                <ArrowUpRight />
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
