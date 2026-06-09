import Image from "next/image";
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

const founders = [
  {
    name: "Vahid",
    role: "Software Architect",
    fold: "The Architecture fold",
    image: "/assets/vahid.jpg",
    bio: "Designs the systems beneath the systems — turning fuzzy requirements into structures that scale cleanly for years.",
  },
  {
    name: "Farshad",
    role: "Software Engineer",
    fold: "The Engineering fold",
    image: "/assets/farshad.jpg",
    bio: "Lives in the details that make software trustworthy: correctness, performance, and the tests that prove both.",
  },
  {
    name: "Husein",
    role: "Software Engineer",
    fold: "The Strategy fold",
    image: "/assets/husein.jpg",
    bio: "Bridges product and code, keeping every line of work pointed at the outcome that actually matters to the business.",
  },
];

export default function Leadership() {
  return (
    <section className="border-t border-border bg-subtle/40 py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              The people behind it
              <Asterisk />
            </h2>
            <p className="text-base leading-7 text-muted">
              A small, senior team — each carrying one of the three folds, all
              accountable for the whole.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-faint">
            <span className="tabular-nums text-foreground">
              {String(founders.length).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="uppercase">Founders</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {founders.map((person) => (
            <article
              key={person.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_22px_50px_-30px_rgba(10,10,10,0.4)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur">
                  {person.fold}
                </span>
              </div>

              <div className="flex flex-col gap-2 p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {person.name}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {person.role}
                  </span>
                </div>
                <p className="text-sm leading-6 text-muted">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
