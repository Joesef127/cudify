import CTASection from "../components/CTASection";
import SecuritySection from "../components/SecuritySection";
import trumpeteer from "../assets/images/trumpeteer.jpg";
import FeatureHeroSection from "../components/FeatureHeroSection";
import WhyChose from "../components/WhyChose";
import { cudifyWhyChoseData } from "../DataArrays";
import ProcessSection from "../components/ProcessSection";
import ProcessCard from "../components/ui/ProcessCard";
import ChooseAmountCard from "../components/ui/ChooseAmountCard";
import CudifyTagCard from "../components/ui/CudifyTagCard";
import Creator from "../components/Creators";

export default function CudifyMe() {
  return (
    <div>
      <FeatureHeroSection
        backgroundImage={trumpeteer}
        heading="Let’s the world reward you. Open an Icon account"
        desc="Support your favourite stars, creators, and mentors directly, safely and instantly."
        contentClass="max-w-[586px]"
      />
      <Creator  />
      <WhyChose
        header=" Why Creators Choose “Cudify Me”"
        headerClass= "max-w-[540px] w-full"
        whyChoseData={cudifyWhyChoseData}
      />
      <ProcessSection
      header="How to Send Money Home from Anywhere in the World"
      subHeader="It only takes a few taps to move your money home. Here's how."
      steps={[
        {
          title: "Find Their Cudify Tag",
          description:
            "Search for your celeb, fave or pastor by their Cudify handle.",
          bgColor: "#E7ECFC",
          component: <CudifyTagCard />,
          colSpan: 5, // full width
        },
        {
          title: "Choose an Amount",
          description:
            "Give your sender your preferred payout option — bank account, mobile money, or cash pickup.",
          bgColor: "#E6FAFE",
          component: <ChooseAmountCard />,
          colSpan: 3,
        },
        {
          title: "Sent Instantly",
          description: "As soon as the money is sent, you’ll receive it directly. Fast, secure, and stress-free.",
          bgColor: "#FEF4E6",
          component: <ProcessCard />,
          colSpan: 2,
        },
      ]}
    />
      <SecuritySection />
      <CTASection />
    </div>
  );
}
