import CTASection from "../components/CTASection";
import FeatureHeroSection from "../components/FeatureHeroSection";
import SecuritySection from "../components/SecuritySection";
import bunny_girl from "../assets/images/bunny_girl.jpg";
import WhyChose from "../components/WhyChose";
import { virtualWhyChoseData } from "../DataArrays";
import VirtualSection from "../components/VirtualSection";

export default function VirtualCard() {
  return (
    <div>
      <FeatureHeroSection
        backgroundImage={bunny_girl}
        heading="The Card That Moves With You"
        desc="Spend directly from your Cudify Wallet online, in-store, or anywhere your journey takes you."
        contentClass="max-w-xl"
      />
      <WhyChose
        header="Why choose Cudify for your virtual dollar card?"
        headerClass="max-w-[540px] w-full"
        whyChoseData={virtualWhyChoseData}
      />
      <VirtualSection />
      <SecuritySection />
      <CTASection />
    </div>
  );
}
