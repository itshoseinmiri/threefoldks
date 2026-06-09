import type { ComponentType, CSSProperties } from "react";
import Container from "./ui/Container";

type IconProps = { className?: string };

function ChainIcon({ className = "" }: IconProps) {
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
      <path d="M9 12a3 3 0 0 1 3-3h2.5a3.5 3.5 0 0 1 0 7H12" />
      <path d="M15 12a3 3 0 0 1-3 3H9.5a3.5 3.5 0 0 1 0-7H12" />
    </svg>
  );
}

function WindowIcon({ className = "" }: IconProps) {
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
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
    </svg>
  );
}

function ServerIcon({ className = "" }: IconProps) {
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
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.6" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.6" />
      <path d="M7 7.25h.01M7 16.75h.01" />
    </svg>
  );
}

function CloudIcon({ className = "" }: IconProps) {
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
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

const groups: {
  category: string;
  Icon: ComponentType<IconProps>;
  items: string[];
}[] = [
  {
    category: "Blockchain & Web3",
    Icon: ChainIcon,
    items: ["Ethereum", "Solana", "Solidity"],
  },
  {
    category: "Frontend",
    Icon: WindowIcon,
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    Icon: ServerIcon,
    items: ["Node.js", "Python", "Django", "FastAPI", "Go"],
  },
  {
    category: "Data & Cloud",
    Icon: CloudIcon,
    items: ["PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"],
  },
];

export default function LogoStrip() {
  return (
    <section className="border-b border-border py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        {/* Header — editorial split */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Our stack
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Technologies we build with
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted">
            A modern, battle-tested toolchain we use to take products from first
            commit to production.
          </p>
        </div>

        {/* Domain cards — 4 in a row */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map(({ category, Icon, items }) => (
            <div
              key={category}
              className="group flex flex-col rounded-2xl border border-border bg-transparent p-6 transition-colors duration-300 hover:border-foreground/15 hover:bg-surface"
            >
              {/* Card header */}
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-subtle text-foreground transition-colors duration-300 group-hover:border-transparent group-hover:bg-foreground group-hover:text-surface">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs tabular-nums text-faint">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-sm font-semibold tracking-tight text-foreground">
                {category}
              </h3>

              {/* Tech chips — auto-loop marquee, dragging disabled */}
              <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <ul
                  className="marquee-track flex w-max flex-nowrap gap-2 select-none"
                  style={{ "--marquee-duration": `${items.length * 6}s` } as CSSProperties}
                >
                  {[...items, ...items, ...items, ...items].map((name, i) => (
                    <li
                      key={`${name}-${i}`}
                      aria-hidden={i >= items.length}
                      className="shrink-0 rounded-lg border border-border px-2.5 py-1 text-xs font-medium tracking-tight text-muted"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
