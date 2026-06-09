import Image from "next/image";
import Link from "next/link";
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

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  ratio: string;
  href: string;
  meta: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    id: "vpay",
    eyebrow: "Fintech · Mobile",
    title: "vPay",
    summary:
      "A secure digital wallet enabling fast, seamless transactions for modern users — built for trust at the speed of tap-to-pay.",
    image: "/assets/vpay.png",
    ratio: "1121 / 796",
    href: "http://vpay.fund/",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Role", value: "Product engineering" },
      { label: "Domain", value: "Digital payments" },
      { label: "Stack", value: "React Native · Node · PostgreSQL" },
    ],
  },
  {
    id: "lamina",
    eyebrow: "Manufacturing · Web 3D",
    title: "Lamina",
    summary:
      "A web platform that turns ideas into 3D reality with precision and ease — real-time geometry, rendered straight in the browser.",
    image: "/assets/lamina.png",
    ratio: "1478 / 985",
    href: "http://37.1.196.234:3001/",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Role", value: "Web platform & 3D" },
      { label: "Domain", value: "Manufacturing" },
      { label: "Stack", value: "Next.js · Three.js · WebGL" },
    ],
  },
];

export default function WorkIndex() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        {/* Section header — editorial split with running count */}
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-lg text-3xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-4xl">
            Case files
          </h2>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-faint">
            <span className="tabular-nums text-foreground">
              {String(projects.length).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="uppercase">Shipped</span>
          </div>
        </div>

        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => {
            const isExternal = /^https?:\/\//.test(project.href);
            const reversed = index % 2 === 1;
            return (
              <article
                key={project.id}
                id={project.id}
                className="group relative scroll-mt-28"
              >
                {/* Oversized index watermark */}
                <span
                  className={`pointer-events-none absolute -top-12 select-none font-mono text-[7rem] font-semibold leading-none text-foreground/[0.04] md:text-[9rem] ${
                    reversed ? "right-0 md:-right-2" : "left-0 md:-left-2"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Media */}
                  <Link
                    href={project.href}
                    {...(isExternal && {
                      target: "_blank",
                      rel: "noreferrer",
                    })}
                    className="relative block w-full overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-40px_rgba(10,10,10,0.45)] transition-transform duration-500 ease-out hover:-translate-y-1.5"
                    style={{ aspectRatio: project.ratio }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    {isExternal && (
                      <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-surface/90 text-foreground opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight />
                      </span>
                    )}
                  </Link>

                  {/* Copy + spec table */}
                  <div className="flex flex-col items-start gap-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      {project.eyebrow}
                    </span>
                    <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="max-w-md text-base leading-7 text-muted">
                      {project.summary}
                    </p>

                    {/* Spec table — hairline-divided metadata */}
                    <dl className="mt-1 grid w-full max-w-md grid-cols-1 divide-y divide-border border-y border-border">
                      {project.meta.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-baseline justify-between gap-6 py-3"
                        >
                          <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                            {row.label}
                          </dt>
                          <dd className="text-right text-sm font-medium text-foreground">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <Link
                      href={project.href}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noreferrer",
                      })}
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                    >
                      Visit live project
                      <ArrowUpRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
