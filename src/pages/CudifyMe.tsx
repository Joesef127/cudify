import CTASection from "../components/CTASection";
import SecuritySection from "../components/SecuritySection";
import celebrity_girl from "../assets/images/celebrity_girl.jpg";
import FeatureHeroSection from "../components/FeatureHeroSection";
import WhyChose from "../components/WhyChose";
import { cudifyWhyChoseData } from "../DataArrays";
import ProcessSection from "../components/ProcessSection";
import ProcessCard from "../components/ui/ProcessCard";
import ChooseAmountCard from "../components/ui/ChooseAmountCard";
import CudifyTagCard from "../components/ui/CudifyTagCard";

export default function CudifyMe() {
  return (
    <div>
      <FeatureHeroSection
        backgroundImage={celebrity_girl}
        heading="Send Money to Your Celeb or Fave — No Account Needed"
        desc="Support your favourite stars, creators, and mentors directly — safely and instantly."
        contentClass="max-w-xl"
      />
      <WhyChose
        header="Why choose Cudify for global transfer and payment?"
        subHeader="It only takes a few taps to move your money home. Here's how."
        whyChoseData={cudifyWhyChoseData}
      />
      <ProcessSection
      header="How to Send Money Home from Anywhere in the World"
      subHeader="It only takes a few taps to move your money home. Here's how."
      steps={[
        {
          title: "Enter Amount",
          description:
            "Pay in GBP with your debit card or credit card, or send the money from your online banking.",
          bgColor: "#E7ECFC",
          component: <CudifyTagCard />,
          colSpan: 5, // full width
        },
        {
          title: "Add Recipient",
          description:
            "Select who you want to send money to and which pay-out method to use.",
          bgColor: "#E6FAFE",
          component: <ChooseAmountCard />,
          colSpan: 3,
        },
        {
          title: "Send Securely",
          description: "Confirm and track it instantly.",
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
