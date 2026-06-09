import Image from "next/image";
import Container from "../../_components/ui/Container";

const stats = [
  { value: "150+", label: "Projects delivered" },
  { value: "70+", label: "Products shipped" },
  { value: "10+ yrs", label: "Engineering experience" },
];

export default function Manifesto() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        {/* Visual — framed square portrait of the work */}
        <div className="relative">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src="/assets/architects.png"
              alt="The threefold studio at work"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Mono caption tag */}
          <div className="absolute -bottom-4 left-6 flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 shadow-[0_18px_40px_-24px_rgba(10,10,10,0.45)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Team · in practice
            </span>
          </div>
        </div>

        {/* Narrative */}
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-faint">
            <span className="uppercase">Our story</span>
            <span className="h-px w-10 bg-border" />
          </div>

          <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-4xl">
            We started with a simple conviction — that the hardest problems
            deserve {""}
            <span className="text-accent">engineering you can trust.</span>
          </h2>

          <div className="flex flex-col gap-4 text-base leading-7 text-muted">
            <p>
              threefold grew out of a small group of engineers who kept being
              pulled into the projects nobody else wanted to touch: the payment
              rails that couldn&apos;t go down, the blockchain systems that had to
              be provably correct, the enterprise platforms buckling under their
              own scale.
            </p>
            <p>
              We learned that great software isn&apos;t a single discipline. It
              lives at the intersection of deep engineering, deliberate
              architecture, and sharp product thinking — carried all the way
              from first commit to deployment. So we built a team around all
              three, and named it for that union.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="relative rounded-2xl border border-border bg-subtle/60 p-6">
            <span className="absolute -top-3 left-5 font-serif text-4xl leading-none text-accent">
              &ldquo;
            </span>
            <p className="text-base font-medium leading-7 text-foreground">
              Ship systems we&apos;d be willing to put our own name on. Then put
              our name on them.
            </p>
          </blockquote>

          {/* Stats */}
          <dl className="mt-2 grid grid-cols-3 gap-6 border-t border-border pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold leading-none tracking-tight text-foreground md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs leading-tight text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
