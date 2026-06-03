import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Careers", href: "#" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Blockchain & Web3", href: "#services" },
      { label: "Platform Engineering", href: "#services" },
      { label: "FinTech Infrastructure", href: "#services" },
      { label: "AEC Technology", href: "#services" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#team" },
      { label: "Case Studies", href: "#work" },
      { label: "Engineering Journal", href: "#team" },
      { label: "Press", href: "#" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "hello@threefold.dev", href: "mailto:hello@threefold.dev" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.4 9h3.16v10.5H3.4V9Zm5.27 0h3.03v1.43h.04c.42-.8 1.45-1.65 2.98-1.65 3.19 0 3.78 2.1 3.78 4.82v5.9h-3.16v-5.23c0-1.25-.02-2.85-1.74-2.85-1.74 0-2.01 1.36-2.01 2.76v5.32H8.67V9Z" />
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <path d="M17.53 3h3.06l-6.69 7.65L21.75 21h-6.16l-4.83-6.31L5.24 21H2.18l7.15-8.18L2.25 3h6.32l4.36 5.77L17.53 3Zm-1.07 16.2h1.7L7.62 4.71H5.8L16.46 19.2Z" />
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@threefold.dev",
    icon: (
      <path d="M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm.4 1.9 8.6 6 8.6-6H3.4ZM21 8.7l-8.46 5.9a1 1 0 0 1-1.08 0L3 8.7V17h18V8.7Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto px-4 pb-4">
      <div className="overflow-hidden rounded-3xl border border-border bg-surface text-muted">
        <Container className="!max-w-7xl px-8 py-14 md:px-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
            {/* Brand */}
            <div className="flex flex-col gap-6">
              <Link
                href="#"
                aria-label="threefold home"
                className="flex w-fit items-center"
              >
                <Image
                  src="/assets/logo.webp"
                  alt="threefold"
                  width={496}
                  height={452}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="max-w-xs text-sm leading-6 text-muted">
                A software engineering company building scalable solutions
                that power industries and transform ideas into impact.
              </p>

              <div className="mt-2 flex items-center gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-faint hover:bg-subtle hover:text-foreground"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {footerNav.map((group) => (
              <div key={group.heading} className="flex flex-col gap-4">
                <h3 className="text-sm font-medium text-foreground">
                  {group.heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-faint sm:flex-row">
            <span>
              © {new Date().getFullYear()} threefold. All rights reserved.
            </span>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
