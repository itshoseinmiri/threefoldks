import Image from "next/image";
import Container from "./ui/Container";

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

const team = [
  { name: "Vahid", role: "Software Architect", image: "/assets/vahid-profile.png" },
  { name: "Farshad", role: "Software Engineer", image: "/assets/farshad-profile.jpg" },
  { name: "Husein", role: "Software Engineer", image: "/assets/husein.jpg" },
  { name: "Mahdieh Fahimpour", role: "Learning & Development (L&D) Specialist", image: "/assets/mahdieh.png" },
];

export default function Journal() {
  return (
    <section id="team" className="py-20 md:py-28">
      <Container>
        {/* Header — asymmetric editorial split, mirrors the services ledger */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Meet the team
              <Asterisk />
            </h2>
            <p className="text-base leading-7 text-muted">
              A small, senior team of engineers who design, build, and ship
              products end to end — from zero to deployment.
            </p>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-faint">
            <span className="tabular-nums text-foreground">
              {String(team.length).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="uppercase">People</span>
          </div>
        </div>

        {/* Roster — hairline-divided rows; portraits colorize on hover */}
        <div className="border-t border-border">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group grid grid-cols-[2.25rem_3.25rem_minmax(0,1fr)] items-center gap-x-4 border-b border-border py-6 md:grid-cols-[4rem_5rem_minmax(0,1fr)_2.5rem] md:gap-x-8 md:py-7"
            >
              {/* Index */}
              <span className="font-mono text-sm tabular-nums text-faint transition-colors duration-300 group-hover:text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Portrait — grayscale at rest, color on hover */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-border md:h-16 md:w-16">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  sizes="64px"
                />
              </div>

              {/* Identity */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium leading-none tracking-tight text-foreground transition-transform duration-300 ease-out md:text-2xl md:group-hover:translate-x-1">
                  {member.name}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  {member.role}
                </span>
              </div>

              {/* Arrow indicator */}
              <span className="hidden text-faint opacity-0 transition-opacity duration-300 ease-out md:flex md:items-center md:justify-end md:group-hover:opacity-100">
                <ArrowUpRight />
              </span>
            </article>
          ))}

          {/* Open-position row — keeps the "Join us" CTA inside the ledger */}
          <a
            href="/contact"
            className="group grid grid-cols-[2.25rem_3.25rem_minmax(0,1fr)] items-center gap-x-4 border-b border-border py-6 md:grid-cols-[4rem_5rem_minmax(0,1fr)_2.5rem] md:gap-x-8 md:py-7"
          >
            <span className="font-mono text-sm tabular-nums text-faint transition-colors duration-300 group-hover:text-accent">
              +
            </span>

            <div className="grid h-12 w-12 place-items-center rounded-full border border-dashed border-border text-faint transition-colors duration-300 group-hover:border-accent group-hover:text-accent md:h-16 md:w-16">
              <span className="text-xl leading-none">+</span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-medium leading-none tracking-tight text-foreground transition-transform duration-300 ease-out md:text-2xl md:group-hover:translate-x-1">
                Join the team
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                Open positions
              </span>
            </div>

            <span className="hidden text-faint opacity-0 transition-opacity duration-300 ease-out md:flex md:items-center md:justify-end md:group-hover:opacity-100">
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
