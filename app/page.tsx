import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import LogoStrip from "./_components/LogoStrip";
import SelectedWork from "./_components/SelectedWork";
import TeamSection from "./_components/TeamSection";
import Services from "./_components/Services";
import Journal from "./_components/Journal";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <SelectedWork />
        <TeamSection />
        <Services />
        <Journal />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
