import { LandingNavbar } from "../components/landing/LandingNavbar";
import { HeroSection } from "../components/landing/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { LandingPricingSection } from "../components/landing/LandingPricingSection";
import { LandingFooter } from "../components/landing/LandingFooter";

export function LandingPage() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }} className="min-h-screen bg-white">
      <LandingNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LandingPricingSection />
      </main>
      <LandingFooter />
    </div>
  );
}
