import Container from "./ui/Container";

const technologies = [
  "Ethereum",
  "Solana",
  "Node.js",
  "React",
  "AWS",
  "Kubernetes",
  "PostgreSQL",
];

export default function LogoStrip() {
  return (
    <section className="border-b border-border py-10">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium uppercase tracking-wide text-faint">
          Technologies we build with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {technologies.map((name) => (
            <span
              key={name}
              className="text-base font-medium tracking-tight text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
