import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0c] pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Spotlight: the only light source, sitting behind the crew */}
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute right-[-8%] top-1/2 h-[680px] w-[680px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,168,180,0.34),rgba(150,150,162,0.10)_42%,transparent_68%)] md:right-[2%] md:h-[800px] md:w-[800px]"
      />

      <Container className="relative grid items-center gap-12 md:grid-cols-[1fr_1.35fr]">
        <div className="flex min-w-0 flex-col items-start gap-7">
          <span
            className="reveal font-mono text-[11px] uppercase tracking-[0.18em] text-[#76767e]"
            style={{ ["--reveal-delay" as string]: "0.05s" }}
          >
            Full-stack engineering
            <span className="mx-2 text-[#3a3a40]">·</span>
            Zero to deployment
          </span>

          <h1
            className="reveal text-4xl font-semibold leading-[1.05] tracking-tight text-[#f5f5f5] md:text-5xl"
            style={{ ["--reveal-delay" as string]: "0.15s" }}
          >
            We build and ship
            <br className="hidden sm:block" /> products from zero{" "}
            <br className="hidden sm:block" />
            <span className="text-[#6e6e76]">to deployment.</span>
          </h1>

          <p
            className="reveal max-w-md text-sm leading-6 text-[#9a9aa2]"
            style={{ ["--reveal-delay" as string]: "0.25s" }}
          >
            We&apos;re a small team of software engineers who own the whole
            journey — product, architecture, code, and release. Real systems,
            shipped to production and running today.
          </p>

          <div
            className="reveal flex flex-wrap items-center gap-3 pt-1"
            style={{ ["--reveal-delay" as string]: "0.35s" }}
          >
            <Link
              href="#work"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 text-sm font-medium text-[#f5f5f5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-white/[0.12]"
            >
              View our work →
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-[#c9c9d0] transition-colors hover:border-white/30 hover:text-[#f5f5f5]"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* The crew — transparent render, floating on the spotlight */}
        <div className="hero-float relative min-w-0 origin-bottom md:scale-110">
          <Image
            className="h-auto w-full select-none"
            src="/assets/hero.webp"
            alt="Three 3D-rendered engineers building software together"
            width={1366}
            height={911}
            priority
          />
        </div>
      </Container>

      {/* Corner labels — frame the hero like a viewfinder */}
      <Container className="relative mt-10 hidden items-center justify-between md:mt-14 md:flex">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6a6a72]">
          <span aria-hidden className="text-[#9a9aa2]">
            ↓
          </span>
          Scroll to explore
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6a6a72]">
          <span aria-hidden className="text-[#9a9aa2]">
            ✳
          </span>
          Shipped to production
        </span>
      </Container>
    </section>
  );
}
