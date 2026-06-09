import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CTASection from "../_components/CTASection";
import WorkHero from "./_components/WorkHero";
import WorkIndex from "./_components/WorkIndex";
import Engagements from "./_components/Engagements";

export const metadata: Metadata = {
  title: "Work — threefold",
  description:
    "Selected work from threefold — production products we've shipped from zero to deployment, including vPay and Lamina across fintech and the 3D web.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <WorkHero />
        <WorkIndex />
        <Engagements />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
