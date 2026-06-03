import Container from "./ui/Container";
import Button from "./ui/Button";
import Video from "./ui/Video";

export default function Hero() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
            Software Engineering · Blockchain · FinTech · AEC Technology
          </span>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            We engineer software that{" "}
            <span className="text-faint">powers industries.</span>
          </h1>

          <p className="max-w-md text-base leading-7 text-muted">
            From blockchain infrastructure to enterprise platforms, we partner
            with ambitious teams to build high-performance systems designed to
            scale.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="#work">Explore our work →</Button>
            <Button href="#contact" variant="secondary">
              Start a project →
            </Button>
          </div>
        </div>

        {/* Hero visual slot */}
        <Video
          className="h-auto w-full rounded-lg"
          src="/assets/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#fbfbfb]" />
    </section>
  );
}
