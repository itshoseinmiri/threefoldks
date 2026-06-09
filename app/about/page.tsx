import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CTASection from "../_components/CTASection";
import AboutHero from "./_components/AboutHero";
import Manifesto from "./_components/Manifesto";
import Disciplines from "./_components/Disciplines";
import Principles from "./_components/Principles";
import Leadership from "./_components/Leadership";

export const metadata: Metadata = {
  title: "About — threefold",
  description:
    "threefold is a three-person software engineering team that takes products from zero to deployment — owning product, architecture, engineering, and release end to end.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <Manifesto />
        <Disciplines />
        <Principles />
        <Leadership />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
