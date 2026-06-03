import Container from "./ui/Container";

function Cube({
  size,
  className = "",
  delay = 0,
}: {
  size: number;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`cube-float absolute ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="cube"
        style={{ ["--s" as string]: `${size}px` } as React.CSSProperties}
      >
        <span className="cube__face cube__face--top" />
        <span className="cube__face cube__face--front" />
        <span className="cube__face cube__face--right" />
      </div>
    </div>
  );
}

export default function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div
          className="cube-scene relative grid items-center gap-10 overflow-hidden rounded-[28px] border border-[#e3e7f6] px-8 py-14 md:grid-cols-2 md:px-14 md:py-16"
          style={{
            background:
              "radial-gradient(120% 130% at 82% 50%, #d6e0fb 0%, #e6ebfb 32%, #f2f4fd 60%, #fbfbfb 100%)",
          }}
        >
          {/* Copy */}
          <div className="relative z-10 flex flex-col items-start gap-6">
            <h2 className="max-w-md text-2xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-[2.2rem]">
              Building the next generation of software?
            </h2>
            <p className="max-w-md text-base leading-7 text-muted">
              Whether you&apos;re launching a startup, scaling financial
              infrastructure, or modernizing enterprise operations, we&apos;re
              ready to help bring your vision to life.
            </p>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-surface transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(10,10,10,0.45)]"
            >
              Let&apos;s build together
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>

          {/* Cube cluster */}
          <div className="relative hidden h-72 md:block">
            <div className="absolute right-[14%] top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-[#8fa8f2]/35 blur-3xl" />
            <Cube size={150} className="left-[40%] top-[26%]" delay={0} />
            <Cube size={82} className="left-[20%] top-[10%]" delay={0.9} />
            <Cube size={72} className="left-[64%] top-[56%]" delay={1.5} />
            <Cube size={52} className="left-[28%] top-[66%]" delay={0.4} />
          </div>
        </div>
      </Container>
    </section>
  );
}
