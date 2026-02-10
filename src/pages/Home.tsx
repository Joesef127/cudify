import CTASection from "../components/CTASection";
import CommunitySection from "../components/CommunitySection";
import FaqSection from "../components/FaqSection";
import HomeFeatureSection from "../components/HomeFeatureSection";
import HomeHero from "../components/HomeHero";
import PowerSection from "../components/PowerSection";
import SecuritySection from "../components/SecuritySection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFCFF]">
      <HomeHero />
      <PowerSection />
      <HomeFeatureSection />
      <SecuritySection />
      <CommunitySection />
      <FaqSection />
      <CTASection />
    </div>
  );
}
