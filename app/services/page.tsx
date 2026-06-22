import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CTASection from "../_components/CTASection";
import ServicesHero from "./_components/ServicesHero";
import ServiceDetail from "./_components/ServiceDetail";
import Process from "./_components/Process";

export const metadata: Metadata = {
  title: "Services — Threefolks",
  description:
    "Threefolks engineers software across every layer — from product strategy and architecture to build and deployment — specialized in blockchain, fintech, and the 3D web.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServicesHero />
        <ServiceDetail />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
