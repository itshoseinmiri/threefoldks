"use client";

import type { ComponentType } from "react";
import Container from "./ui/Container";

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "70+", label: "Products shipped" },
  { value: "10+ yrs", label: "Engineering experience" },
];

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

function CubeIcon({ className = "" }: IconProps) {
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
      <path d="M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4L12 2.5z" />
      <path d="M3.8 7.2L12 12l8.2-4.8M12 12v9.3" />
    </svg>
  );
}

function SparkIcon({ className = "" }: IconProps) {
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
      <path d="M12 3v18M5 8.5l14 7M19 8.5l-14 7" />
    </svg>
  );
}

function ArrowRight({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5L13.5 8 9 12.5" />
    </svg>
  );
}

const pillars: {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
}[] = [
  {
    title: "Engineering",
    description:
      "Production-grade systems built with modern, battle-tested stacks.",
    Icon: CodeIcon,
  },
  {
    title: "Architecture",
    description:
      "Scalable, resilient design from the data layer through delivery.",
    Icon: LayersIcon,
  },
  {
    title: "Product Thinking",
    description:
      "Strategy and UX that turn hard problems into clear products.",
    Icon: CubeIcon,
  },
  {
    title: "Problem-Solving",
    description:
      "Pragmatic execution focused on measurable business value.",
    Icon: SparkIcon,
  },
];

export default function TeamSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-24 pt-8 md:pb-32 md:pt-12"
    >
      {/* Backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "#0b0b0c" }}
      />

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Top + bottom fades that blend the dark band into the body background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent md:h-36" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent md:h-36" />

      <Container className="relative grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        {/* Left — editorial intro */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500/50" />
            Who we are
          </span>

          <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
            We&apos;re engineers, architects, and{" "}
            <span className="font-bold text-accent">problem-solvers.</span>
          </h2>

          <p className="max-w-md text-base leading-7 text-muted">
            We pair deep engineering with product instinct to ship software that
            solves real problems — owning every build from first commit to live
            deployment, across fintech, blockchain, and the 3D web.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-surface transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15"
            >
              Work with us
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-subtle"
            >
              See our work
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-6 grid w-full max-w-md grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold leading-none tracking-tight text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs leading-tight text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — craft pillars grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(({ title, description, Icon }) => (
            <a
              key={title}
              href="#services"
              className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_18px_40px_-24px_rgba(10,10,10,0.35)]"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-subtle text-foreground transition-colors duration-300 group-hover:border-transparent group-hover:bg-foreground group-hover:text-surface">
                <Icon className="h-5.5 w-5.5" />
              </span>

              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>

              <span className="mt-5 inline-flex text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
