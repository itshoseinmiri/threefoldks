"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";
import { createPortal } from "react-dom";
import Container from "./ui/Container";

/* --- Shared iconography --------------------------------------------------- */

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

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({
  direction,
  className = "",
}: {
  direction: "left" | "right";
  className?: string;
}) {
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
        d={direction === "left" ? "M10 3.5L5.5 8l4.5 4.5" : "M6 3.5L10.5 8 6 12.5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* --- Brand monograms (small chip glyphs) ---------------------------------- */

const glyphProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const WalletGlyph = (p: { className?: string }) => (
  <svg {...glyphProps} className={p.className}>
    <rect x="3" y="6" width="18" height="13" rx="2.5" />
    <path d="M3 9.5h18M16.5 13.5h.01" />
  </svg>
);

const MeshGlyph = (p: { className?: string }) => (
  <svg {...glyphProps} className={p.className}>
    <path d="M12 3l8.5 4.9v8.2L12 21l-8.5-4.9V7.9L12 3z" />
    <path d="M3.8 8l8.2 4.7 8.2-4.7M12 12.7V21" />
  </svg>
);

/* --- Blueprint artifacts (the card signature) ----------------------------- */
/* Each is line-art on a tinted panel — the engineering-studio analogue of   */
/* the reference's per-brand artwork. One ink, drawn in faint blue.          */

type ArtifactProps = { className?: string };
const artBase: SVGProps<SVGSVGElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  preserveAspectRatio: "xMidYMid slice",
};

// vPay — a payment waveform settling into a tap pulse
function WaveformArt({ className = "" }: ArtifactProps) {
  return (
    <svg {...artBase} viewBox="0 0 340 150" className={className}>
      <g strokeWidth="1.1" opacity="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={20 + i * 38} y1="20" x2={20 + i * 38} y2="130" />
        ))}
      </g>
      <path
        strokeWidth="1.6"
        d="M16 96 L52 96 L66 60 L86 116 L104 40 L124 104 L142 72 L162 96 L196 96"
      />
      <g strokeWidth="1.4" opacity="0.85">
        <circle cx="248" cy="80" r="10" />
        <circle cx="248" cy="80" r="22" opacity="0.55" />
        <circle cx="248" cy="80" r="34" opacity="0.28" />
      </g>
    </svg>
  );
}

// Lamina — a rotating wireframe solid
function MeshArt({ className = "" }: ArtifactProps) {
  return (
    <svg {...artBase} viewBox="0 0 340 150" className={className}>
      <g strokeWidth="1.1" opacity="0.55">
        <path d="M120 26 L210 26 L250 74 L160 74 Z" />
        <path d="M120 26 L90 78 L130 124 L160 74 Z" />
        <path d="M250 74 L160 74 L130 124 L222 122 Z" />
        <path d="M160 74 L90 78M160 74 L222 122M160 74 L210 26" opacity="0.7" />
      </g>
      <g strokeWidth="1.1" opacity="0.28">
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={i} x1="24" y1={32 + i * 22} x2="316" y2={32 + i * 22} />
        ))}
      </g>
    </svg>
  );
}

/* --- Data ----------------------------------------------------------------- */

type CaseStudy = {
  id: string;
  brand: string;
  category: string;
  title: string;
  summary: string;
  metric: { value: string; label: string };
  href: string;
  Glyph: ComponentType<{ className?: string }>;
  Artifact: ComponentType<ArtifactProps>;
};

const studies: CaseStudy[] = [
  {
    id: "vpay",
    brand: "vPay",
    category: "Fintech · Wallet",
    title: "A digital wallet built for tap-to-pay trust",
    summary:
      "Secure payments engineered for the speed of a single tap — and the reliability of a system that never blinks.",
    metric: { value: "99.98%", label: "Payment uptime" },
    href: "http://vpay.fund/",
    Glyph: WalletGlyph,
    Artifact: WaveformArt,
  },
  {
    id: "lamina",
    brand: "Lamina",
    category: "Manufacturing · 3D web",
    title: "Turning ideas into 3D, straight in the browser",
    summary:
      "Real-time geometry rendered with zero installs — precision CAD that lives at a URL, not behind a download.",
    metric: { value: "60 fps", label: "In-browser render" },
    href: "/case_studies/lamina-case-study.html",
    Glyph: MeshGlyph,
    Artifact: MeshArt,
  },
];

/* --- Component ------------------------------------------------------------ */

export default function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Fullscreen case-study modal (renders the standalone deck in an iframe)
  const [modal, setModal] = useState<{ src: string; title: string } | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const openCaseStudy = (el: HTMLElement, src: string, title: string) => {
    triggerRef.current = el;
    setModal({ src, title });
  };

  const closeModal = () => {
    setModal(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModal(null);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [modal]);

  const updateBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const scrollable = scrollWidth - clientWidth > 8;
    setIsScrollable(scrollable);
    setCanPrev(scrollLeft > 8);
    setCanNext(scrollable && scrollLeft < scrollWidth - clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateBounds();
    el.addEventListener("scroll", updateBounds, { passive: true });
    window.addEventListener("resize", updateBounds);
    return () => {
      el.removeEventListener("scroll", updateBounds);
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      id="case-studies"
      className="border-t border-border py-20 md:py-28"
    >
      <Container>
        {/* Header — eyebrow + title/description left, carousel nav right */}
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Proof in production
            </span>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl">
              Case studies
            </h2>
            <p className="max-w-md text-sm leading-6 text-muted">
              How teams partner with Threefolks to take products from first
              commit to production — and keep them running once the world shows
              up.
            </p>
          </div>

          {isScrollable && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous case studies"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_10px_24px_-16px_rgba(10,10,10,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-35"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next case studies"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_10px_24px_-16px_rgba(10,10,10,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-35"
            >
              <Chevron direction="right" />
            </button>
          </div>
          )}
        </div>
      </Container>

      {/* Track — full-bleed, snap-scrolling row of cards */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pt-3 pb-12 -mt-1 -mb-10 [-ms-overflow-style:none] [scrollbar-width:none] md:px-[max(1.5rem,calc((100vw-72rem)/2))] [&::-webkit-scrollbar]:hidden"
      >
        {studies.map(({ id, brand, category, title, summary, metric, href, Glyph, Artifact }) => {
          const isExternal = /^https?:\/\//.test(href);
          return (
            <a
              key={id}
              data-card
              href={href}
              onClick={
                isExternal
                  ? undefined
                  : (e) => {
                      e.preventDefault();
                      openCaseStudy(e.currentTarget, href, `${brand} — case study`);
                    }
              }
              {...(isExternal && { target: "_blank", rel: "noreferrer" })}
              className="group relative flex w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_28px_60px_-32px_rgba(10,10,10,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-[20rem] md:w-[21.5rem]"
            >
              {/* Copy block */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-subtle text-accent transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                      <Glyph className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold tracking-tight text-foreground">
                      {brand}
                    </span>
                  </span>
                  <span className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    <ArrowUpRight />
                  </span>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  {category}
                </span>

                <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-muted">{summary}</p>
              </div>

              {/* Signature — blueprint artifact panel with metric badge */}
              <div className="relative mx-4 mb-4 mt-1 h-[150px] overflow-hidden rounded-2xl border border-border bg-subtle text-accent transition-colors duration-500 group-hover:border-accent/20 group-hover:bg-accent/[0.06]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.6]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(109,140,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(109,140,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <Artifact className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]" />

                <span className="absolute bottom-3 left-3 inline-flex items-baseline gap-1.5 rounded-full border border-border bg-surface/90 px-3 py-1 backdrop-blur">
                  <span className="text-xs font-semibold tabular-nums text-foreground">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                    {metric.label}
                  </span>
                </span>
              </div>
            </a>
          );
        })}

        {/* Trailing spacer so the last card can clear the right edge */}
        <span aria-hidden className="-ml-5 w-px shrink-0 md:w-6" />
      </div>

      {/* Fullscreen case-study modal */}
      {modal &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={modal.title}
            className="fixed inset-0 z-[100] bg-[#0B0B0D] motion-safe:animate-[fadeIn_260ms_ease-out]"
          >
            <div className="absolute inset-0 will-change-transform motion-safe:animate-[modalSlideUp_480ms_cubic-bezier(0.16,1,0.3,1)]">
              <iframe
                src={modal.src}
                title={modal.title}
                className="h-full w-full border-0"
              />
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeModal}
              aria-label="Close case study"
              className="fixed right-5 top-5 z-[101] grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/80 backdrop-blur transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.12] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:animate-[fadeIn_320ms_ease-out_160ms_both]"
            >
              <CloseIcon />
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}
