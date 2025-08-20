import CTASection from "../components/CTASection";
import FeatureHeroSection from "../components/FeatureHeroSection";
import SecuritySection from "../components/SecuritySection";
import bunny_girl from "../assets/images/bunny_girl.jpg";
import WhyChose from "../components/WhyChose";
import { virtualWhyChoseData } from "../DataArrays";

export default function VirtualCard() {
  return (
    <div>
      <FeatureHeroSection
        backgroundImage={bunny_girl}
        heading="The Card That Moves With You"
        desc="Spend directly from your Cudify Wallet — online, in-store, or anywhere your journey takes you."
        contentClass="max-w-xl"
      />
      <WhyChose
        header="Why choose Cudify for virtual dollar card?"
        subHeader="It only takes a few taps to move your money home. Here's how."
        whyChoseData={virtualWhyChoseData}
      />
      <SecuritySection />
      <CTASection />
    </div>
  );
}
