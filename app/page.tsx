import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import OperationsSection from "./components/OperationsSection";
import PartnershipSection from "./components/PartnershipSection";
import SustainabilitySection from "./components/SustainabilitySection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <OperationsSection />
        <PartnershipSection />
        <SustainabilitySection />
      </main>
      <Footer />
    </>
  );
}
