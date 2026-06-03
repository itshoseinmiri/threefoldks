"use client";

import Container from "./ui/Container";
import Video from "./ui/Video";

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "70+", label: "Products shipped" },
  { value: "10+ yrs", label: "Engineering experience" },
];

export default function TeamSection() {
  return (
    <section
      id="about"
      className="relative -mt-24 overflow-hidden pb-24 pt-8 md:-mt-40 md:pb-32 md:pt-12"
    >
      {/* Backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "#FBFBFB" }}
      />

      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,10,10,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Top + bottom fades that blend the dark band into the body background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent md:h-36" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent md:h-36" />

      <Container className="relative grid items-center gap-14 md:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500/50" />
            Who we are
          </span>

          <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl">
            We&apos;re engineers, architects, and{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/45 bg-clip-text font-bold text-transparent">
              problem-solvers.
            </span>
          </h2>

          <p className="max-w-md text-base leading-7 text-muted">
            Our team combines deep technical expertise with industry knowledge
            to deliver software that solves real operational challenges. Whether
            it&apos;s financial infrastructure, blockchain ecosystems,
            enterprise platforms, or AEC solutions, we focus on building
            products that create measurable business value.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-surface transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15"
            >
              Work with us
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-subtle"
            >
              See our work
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-8 grid w-full grid-cols-3 gap-6">
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

        {/* Tree visual */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-lg">
            <Video
              className="aspect-square w-full object-contain"
              src="/assets/videos/architects.mp4"
              aria-label="Architectural visualization"
              autoPlay
              loop
              muted
              playsInline
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
