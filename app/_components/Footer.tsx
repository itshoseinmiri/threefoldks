import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/#work" },
      { label: "Services", href: "/#services" },
      { label: "Team", href: "/#team" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/#team" },
      { label: "Case Studies", href: "/#work" },
      { label: "Engineering Journal", href: "/#team" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "hello@threefold.dev", href: "mailto:hello@threefold.dev" },
    ],
  },
];

const socials = [
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
          <div className="grid gap-12 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
            {/* Brand */}
            <div className="flex flex-col gap-6">
              <Link
                href="/"
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
                A team of software engineers who design, build, and ship
                products from zero to deployment.
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
          </div>
        </Container>
      </div>
    </footer>
  );
}
