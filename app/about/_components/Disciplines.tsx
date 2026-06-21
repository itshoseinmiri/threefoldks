import type { ComponentType } from "react";
import Container from "../../_components/ui/Container";

type IconProps = { className?: string };

function CodeIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
    </svg>
  );
}

function LayersIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

function CompassIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}

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

const disciplines: {
  title: string;
  tag: string;
  description: string;
  Icon: ComponentType<IconProps>;
}[] = [
  {
    title: "Engineering",
    tag: "We build",
    description:
      "Production-grade systems written with care — typed, tested, observable, and built to run for years under real load.",
    Icon: CodeIcon,
  },
  {
    title: "Architecture",
    tag: "We design",
    description:
      "Scalable, resilient structure from the data layer through delivery, so growth never forces a rewrite.",
    Icon: LayersIcon,
  },
  {
    title: "Strategy",
    tag: "We direct",
    description:
      "Product thinking that turns hard, ambiguous problems into clear roadmaps and measurable business value.",
    Icon: CompassIcon,
  },
];

export default function Disciplines() {
  return (
    <section className="border-t border-border bg-subtle/40 py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-md text-3xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-4xl">
            Why we&apos;re called Threefolks
            <Asterisk />
          </h2>
          <p className="max-w-xs text-sm leading-6 text-muted">
            One name, three folks. Each discipline reinforces the others — and
            none ships without the rest.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {disciplines.map(({ title, tag, description, Icon }, index) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_22px_50px_-30px_rgba(10,10,10,0.4)]"
            >
              {/* Oversized index watermark */}
              <span className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[7rem] font-semibold leading-none text-foreground/[0.04] transition-colors duration-300 group-hover:text-accent/[0.07]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-subtle text-foreground transition-colors duration-300 group-hover:border-transparent group-hover:bg-foreground group-hover:text-surface">
                <Icon className="h-6 w-6" />
              </span>

              <span className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {tag}
              </span>
              <h3 className="relative mt-2 text-xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="relative mt-3 text-sm leading-6 text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
