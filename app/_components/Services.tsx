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

const services = [
  {
    title: "Blockchain & Web3 Engineering",
    description:
      "Smart contracts, DApps, DeFi platforms, tokenization systems, wallet integrations, and blockchain infrastructure.",
  },
  {
    title: "FinTech Infrastructure",
    description:
      "Payment systems, banking integrations, compliance workflows, transaction processing, and financial platforms.",
  },
  {
    title: "Platform Engineering",
    description:
      "Cloud infrastructure, microservices, DevOps automation, scalable architectures, and enterprise-grade backend systems.",
  },
  {
    title: "AEC Technology Solutions",
    description:
      "Digital platforms for architecture, engineering, and construction firms including project management, field operations, BIM integrations, and workflow automation.",
  },
  {
    title: "Conversational AI Agents",
    description:
      "Multi-account AI agents that take part in live group chats and respond naturally in context. They pick up on the tone, topic, and pace of each community — across Telegram and Discord — and reply with the right style and timing, even with images and reactions, all running on their own and powered by Gemini and GPT.",
  },
  {
    title: "Telegram & Discord Bots",
    description:
      "Messaging and engagement automation running across many accounts at once.",
  },
  {
    title: "Browser Extensions & Web Automation",
    description:
      "Extensions and scripts that automate sign-ups and pull data from sites — like the Luma auto-register tool.",
  },
  {
    title: "AI Content Generation",
    description:
      "Writing posts, replies, and announcements with AI across Twitter, Discord, and Telegram — shaped to the purpose, from marketing and ads to introductions.",
  },
  {
    title: "Backend Platforms & CRM",
    description:
      "Microservice platforms for heavy, around-the-clock workloads — plus the CRM and lead tools that keep clients and partnerships in order.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-border py-20 md:py-28">
      <Container>
        {/* Header — asymmetric editorial split */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            What we do
            <Asterisk />
          </h2>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-faint">
            <span className="tabular-nums text-foreground">
              {String(services.length).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="uppercase">Capabilities</span>
          </div>
        </div>

        {/* Ledger — hairline-divided rows that reveal on hover */}
        <div className="border-t border-border">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group grid grid-cols-[2.5rem_1fr] items-start gap-x-5 gap-y-2 border-b border-border py-8 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.15fr)_2.5rem] md:items-baseline md:gap-x-10 md:py-9"
            >
              {/* Index */}
              <span className="font-mono text-sm tabular-nums text-faint transition-colors duration-300 group-hover:text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="col-span-2 text-sm leading-6 text-muted md:col-span-1 md:col-start-3">
                {service.description}
              </p>

              {/* Arrow indicator */}
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
