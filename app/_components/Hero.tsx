import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-[1fr_1.25fr]">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
            Full-stack engineering · Zero to deployment
          </span>

          <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            We build and ship products{" "}
            <span className="text-faint">from zero to deployment.</span>
          </h1>

          <p className="max-w-md text-sm leading-6 text-muted">
            We&apos;re a small team of software engineers who own the whole
            journey — product, architecture, code, and release. Real systems,
            shipped to production and running today.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="#work">View our work →</Button>
            <Button href="/contact" variant="secondary">
              Get in touch →
            </Button>
          </div>
        </div>

        {/* Hero visual slot */}
        <Image
          className="h-auto w-full rounded-lg"
          src="/assets/hero.png"
          alt="Software engineering visualization"
          width={1536}
          height={1024}
          priority
        />
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#fbfbfb]" />
    </section>
  );
}
