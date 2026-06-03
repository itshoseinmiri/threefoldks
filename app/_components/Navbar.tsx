import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import Button from "./ui/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <Container className="flex h-16 items-center justify-between rounded-full border border-border bg-surface/80 px-6 backdrop-blur">
        {/* Logo */}
        <Link href="#" className="flex items-center">
          <Image
            src="/assets/logo.webp"
            alt="threefold"
            width={496}
            height={452}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="#contact">Contact us →</Button>
      </Container>
    </header>
  );
}
