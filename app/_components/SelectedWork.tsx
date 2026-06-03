"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./ui/Container";

gsap.registerPlugin(ScrollTrigger);

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
      width="15"
      height="15"
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

const projects = [
  {
    eyebrow: "Fintech · Mobile",
    title: "vPay",
    description:
      "A secure digital wallet enabling fast, secure, and seamless transactions for modern users.",
    image: "/assets/vpay.png",
    ratio: "1121 / 796",
    href: "http://vpay.fund/",
  },
  {
    eyebrow: "Banking · Neobank",
    title: "Veil",
    description:
      "A next-gen banking experience built for speed, security, and smart money management.",
    image: "/assets/veilbank.png",
    ratio: "1536 / 1024",
    href: "http://veilbank.app/",
  },
  {
    eyebrow: "Manufacturing · Web 3D",
    title: "Lamina",
    description:
      "A web platform transforming ideas into 3D reality with precision and ease.",
    image: "/assets/lamina.png",
    ratio: "1478 / 985",
    href: "http://37.1.196.234:3001/",
  },
];

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // Progressive enhancement: stacked layout until we confirm motion is allowed.
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      setAnimated(true);
    }
  }, []);

  useEffect(() => {
    if (!animated) return;
    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];
    if (slides.length === 0) return;

    const HIDDEN = "inset(0% 0% 0% 100% round 1.5rem)";
    const SHOWN = "inset(0% 0% 0% 0% round 1.5rem)";

    const ctx = gsap.context(() => {
      const parts = slides.map((slide) => ({
        slide,
        media: slide.querySelector("[data-media]"),
        inner: slide.querySelector("[data-media-inner]"),
        text: slide.querySelectorAll("[data-reveal]"),
      }));

      // Initial state: first slide revealed, the rest primed for entrance.
      parts.forEach((p, i) => {
        const first = i === 0;
        gsap.set(p.slide, { autoAlpha: first ? 1 : 0 });
        gsap.set(p.media, { clipPath: first ? SHOWN : HIDDEN });
        gsap.set(p.inner, { scale: first ? 1 : 1.25 });
        gsap.set(p.text, { yPercent: first ? 0 : 55, opacity: first ? 1 : 0 });
      });

      const endDistance = () =>
        "+=" + window.innerHeight * (slides.length * 0.9);

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top 22%",
          end: endDistance,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const active = Math.round(self.progress * (slides.length - 1));
            if (counterRef.current) {
              counterRef.current.textContent = String(active + 1).padStart(
                2,
                "0"
              );
            }
          },
        },
      });

      // Hold the first slide briefly before transitions begin
      tl.to({}, { duration: 0.5 });

      for (let i = 1; i < parts.length; i++) {
        const prev = parts[i - 1];
        const next = parts[i];

        // Outgoing: lift and fade, with the copy drifting upward in parallax.
        tl.to(
          prev.slide,
          { autoAlpha: 0, yPercent: -5, duration: 0.9, ease: "power2.in" },
          ">"
        )
          .to(
            prev.text,
            { yPercent: -30, stagger: 0.04, duration: 0.7, ease: "power2.in" },
            "<"
          )
          // Incoming: unveil the image with a clip-path wipe + parallax scale,
          // then stagger the copy in.
          .set(next.slide, { autoAlpha: 1, yPercent: 0 }, "<0.15")
          .fromTo(
            next.media,
            { clipPath: HIDDEN },
            { clipPath: SHOWN, duration: 1.1, ease: "power3.inOut" },
            "<"
          )
          .fromTo(
            next.inner,
            { scale: 1.25 },
            { scale: 1, duration: 1.3, ease: "power3.out" },
            "<"
          )
          .fromTo(
            next.text,
            { yPercent: 55, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              stagger: 0.09,
              duration: 0.85,
              ease: "power3.out",
            },
            "<0.2"
          );

        // Pause on each project before moving to the next
        tl.to({}, { duration: 0.6 });
      }

      // Scroll-linked progress bar spanning the whole pinned range
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top 22%",
            end: endDistance,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [animated]);

  return (
    <section ref={sectionRef} id="work" className="mt-24 bg-background">
      <div
        ref={pinRef}
        className={
          animated
            ? "relative h-screen overflow-hidden"
            : "py-20 md:py-28"
        }
      >
        <Container
          className={animated ? "flex h-full flex-col justify-center" : ""}
        >
          {/* Header / progress */}
          <div className="mb-2 flex items-end justify-between gap-6 md:mb-3">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Selected work
                <Asterisk />
              </h2>
              <p className="max-w-sm text-sm leading-6 text-muted">
                Platforms and products we&rsquo;ve engineered to solve
                real-world problems.
              </p>
            </div>

            {animated && (
              <div className="hidden flex-col items-end gap-3 sm:flex">
                <div className="font-mono text-sm tabular-nums text-faint">
                  <span ref={counterRef} className="text-foreground">
                    01
                  </span>{" "}
                  / {String(projects.length).padStart(2, "0")}
                </div>
                <div className="h-px w-28 overflow-hidden bg-border">
                  <div
                    ref={progressRef}
                    className="h-full w-full origin-left scale-x-0 bg-foreground"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Slides */}
          <div
            ref={stageRef}
            className={
              animated
                ? "relative flex-1 pt-6 md:pt-10"
                : "flex flex-col gap-20 md:gap-32"
            }
          >
            {projects.map((project, index) => {
              const isExternal = /^https?:\/\//.test(project.href);
              return (
                <div
                  key={project.title}
                  ref={(el) => {
                    slidesRef.current[index] = el;
                  }}
                  className={
                    animated
                      ? "absolute inset-0 flex items-start will-change-transform"
                      : "relative"
                  }
                  style={
                    animated && index > 0 ? { opacity: 0 } : undefined
                  }
                >
                  <div className="relative z-10 grid w-full items-center gap-8 md:grid-cols-2 md:gap-16">
                    {/* Media */}
                    <Link
                      data-media
                      href={project.href}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noreferrer",
                      })}
                      className="group relative block w-full max-w-[540px] overflow-hidden rounded-3xl transition-transform duration-500 ease-out hover:-translate-y-1.5 md:mx-auto"
                      style={{ aspectRatio: project.ratio }}
                    >
                      <div data-media-inner className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                      {isExternal && (
                        <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-surface/90 text-foreground opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <ArrowUpRight />
                        </span>
                      )}
                    </Link>

                    {/* Text */}
                    <div className="flex flex-col gap-4">
                      <span
                        data-reveal
                        className="text-xs font-medium tracking-wide text-accent"
                      >
                        {project.eyebrow}
                      </span>
                      <h3
                        data-reveal
                        className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl"
                      >
                        {project.title}
                      </h3>
                      <p
                        data-reveal
                        className="max-w-md text-base leading-7 text-muted"
                      >
                        {project.description}
                      </p>
                      <Link
                        data-reveal
                        href={project.href}
                        {...(isExternal && {
                          target: "_blank",
                          rel: "noreferrer",
                        })}
                        className="group mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                      >
                        View project
                        <ArrowUpRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
