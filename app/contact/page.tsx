import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Container from "../_components/ui/Container";
import ContactForm from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — threefold",
  description:
    "Get in touch with threefold. Tell us what you're building and we'll reply within one business day.",
};

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

const channels = [
  {
    label: "Email",
    value: "hello@threefold.dev",
    href: "mailto:hello@threefold.dev",
  },
  { label: "Response time", value: "Within 1 business day", href: null },
  { label: "Working", value: "Remote-first · GMT ±5", href: null },
];

const steps = [
  {
    title: "Discovery call",
    description:
      "A 30-minute conversation to understand the problem, the constraints, and whether we're the right fit.",
  },
  {
    title: "Scope & plan",
    description:
      "We map the work into clear phases — what we'll build, in what order, and how it reaches production.",
  },
  {
    title: "Build & ship",
    description:
      "We start building toward deployment, with weekly demos and direct access to the engineers writing the code.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Contact split */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          {/* Dot-grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(10,10,10,0.10) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage:
                "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 75%)",
            }}
          />
          {/* Soft brand glow behind the form */}
          <div className="pointer-events-none absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-[#8fa8f2]/20 blur-3xl" />

          <Container className="relative grid items-start gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
            {/* Left — invitation + channels */}
            <div className="flex flex-col items-start gap-7 md:pt-4">
              <span
                className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted backdrop-blur"
                style={{ "--reveal-delay": "0s" } as React.CSSProperties}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500/50" />
                Get in touch
              </span>

              <h1
                className="reveal text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl"
                style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
              >
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-faint">durable.</span>
                <span className="text-accent">*</span>
              </h1>

              <p
                className="reveal max-w-md text-base leading-7 text-muted"
                style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
              >
                Whether it&apos;s a zero-to-one build or an existing product
                that needs to ship, tell us what you&apos;re working on. Real
                engineers read every message.
              </p>

              {/* Channels */}
              <dl
                className="reveal mt-2 flex w-full max-w-md flex-col divide-y divide-border border-y border-border"
                style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
              >
                {channels.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                      {c.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {c.href ? (
                        <a
                          href={c.href}
                          className="transition-colors hover:text-accent"
                        >
                          {c.value}
                        </a>
                      ) : (
                        c.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right — form */}
            <div
              className="reveal"
              style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
            >
              <ContactForm />
            </div>
          </Container>
        </section>

        {/* What happens next — a triad of steps */}
        <section className="border-t border-border bg-subtle/40 py-20 md:py-28">
          <Container>
            <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                What happens next
                <Asterisk />
              </h2>
              <p className="max-w-xs text-sm leading-6 text-muted">
                No black box. Here&apos;s exactly how an inquiry becomes a
                working partnership.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_22px_50px_-30px_rgba(10,10,10,0.4)]"
                >
                  <span className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[7rem] font-semibold leading-none text-foreground/[0.04] transition-colors duration-300 group-hover:text-accent/[0.07]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-2 text-xl font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-10 text-sm text-muted">
              Prefer email? Reach us directly at{" "}
              <Link
                href="mailto:hello@threefold.dev"
                className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                hello@threefold.dev
              </Link>
              .
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
