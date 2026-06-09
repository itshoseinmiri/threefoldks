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

type Service = {
  id: string;
  tag: string;
  title: string;
  description: string;
  capabilities: string[];
};

const services: Service[] = [
  {
    id: "blockchain",
    tag: "We secure",
    title: "Blockchain & Web3 Engineering",
    description:
      "Trust-minimized systems where a bug is a liability. We write, audit, and operate on-chain software built to hold real value.",
    capabilities: [
      "Smart contract development & audits",
      "DeFi, DEX & staking platforms",
      "Tokenization & NFT systems",
      "Wallet & custody integration",
      "Node infrastructure & indexing",
      "On-chain / off-chain bridges",
    ],
  },
  {
    id: "fintech",
    tag: "We process",
    title: "FinTech Infrastructure",
    description:
      "Money movement that has to be right every time. Payment rails, ledgers, and compliance built for correctness under load.",
    capabilities: [
      "Payment rails & processing",
      "Banking & card integrations",
      "KYC / AML & compliance flows",
      "Double-entry ledgering & reconciliation",
      "Real-time transaction systems",
      "PCI-aware architecture",
    ],
  },
  {
    id: "platform",
    tag: "We scale",
    title: "Platform Engineering",
    description:
      "The backbone everything else runs on. Cloud-native architecture, automated delivery, and observability that grows with you.",
    capabilities: [
      "Cloud architecture (AWS / GCP)",
      "Microservices & API design",
      "CI/CD & DevOps automation",
      "Observability & SRE practices",
      "Data pipelines & storage",
      "Performance & cost optimization",
    ],
  },
  {
    id: "aec",
    tag: "We model",
    title: "AEC Technology Solutions",
    description:
      "Software for how the physical world gets built. Platforms that connect the field, the model, and the back office.",
    capabilities: [
      "Project & field management tools",
      "BIM & 3D model integration",
      "Web-based CAD & geometry",
      "Workflow & approval automation",
      "Real-time collaboration",
      "Document & asset management",
    ],
  },
];

function Marker() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-accent"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceDetail() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-lg text-3xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-4xl">
            What we build
            <Asterisk />
          </h2>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-faint">
            <span className="tabular-nums text-foreground">
              {String(services.length).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="uppercase">Practices</span>
          </div>
        </div>

        {/* Detail blocks — sticky index rail + capability grid */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="group grid scroll-mt-28 gap-8 border-t border-border py-12 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-12 md:py-16"
            >
              {/* Index rail */}
              <div className="flex items-start md:sticky md:top-28 md:h-fit">
                <span className="font-mono text-2xl font-semibold tabular-nums text-foreground/15 transition-colors duration-300 group-hover:text-accent/50 md:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
                {/* Left — identity */}
                <div className="flex flex-col items-start gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    {service.tag}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="max-w-sm text-base leading-7 text-muted">
                    {service.description}
                  </p>
                </div>

                {/* Right — capability list */}
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 md:self-center">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2.5 border-b border-border/70 pb-3 text-sm leading-6 text-foreground"
                    >
                      <Marker />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <span className="border-t border-border" />
        </div>
      </Container>
    </section>
  );
}
