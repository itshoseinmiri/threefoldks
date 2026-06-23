import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Container from "../_components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Lumen Lab",
  description:
    "Privacy policy for Lumen Lab — how anonymous diagnostic and performance information is handled.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative pt-28 pb-24 md:pt-36 md:pb-28">
          <Container className="!max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Legal
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Privacy Policy for Lumen Lab
            </h1>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Last updated: June 2026
            </p>
            <div className="mt-8 flex flex-col gap-5 text-base leading-7 text-muted">
              <p>Lumen Lab does not require account registration.</p>
              <p>
                Lumen Lab may collect anonymous diagnostic and performance
                information to improve the game experience.
              </p>
              <p>
                If advertising services are added in the future, third-party
                advertising providers may collect limited device information in
                accordance with their own privacy policies.
              </p>
              <p>No personal information is knowingly collected from users.</p>
              <p>
                If you have questions regarding this Privacy Policy, contact us
                at:
              </p>
              <p>
                <a
                  href="mailto:contact@threefolks.team"
                  className="text-accent hover:underline"
                >
                  contact@threefolks.team
                </a>
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
