import CTASection from "../components/CTASection";
import SecuritySection from "../components/SecuritySection";
import celebrity_girl from "../assets/images/celebrity_girl.jpg";
import FeatureHeroSection from "../components/FeatureHeroSection";

export default function CudifyMe() {
  return (
    <div>
      <FeatureHeroSection
        backgroundImage={celebrity_girl}
        heading="Send Money to Your Celeb or Fave — No Account Needed"
        desc="Support your favourite stars, creators, and mentors directly — safely and instantly."
        contentClass="max-w-xl"
      />
      <SecuritySection />
      <CTASection />
    </div>
  );
}
