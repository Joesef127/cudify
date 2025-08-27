import CTASection from "../components/CTASection";
import FeatureHeroSection from "../components/FeatureHeroSection";
import SecuritySection from "../components/SecuritySection";
import woman_pressing_laptop from "../assets/images/woman_pressing_laptop.jpg";
import WhyChose from "../components/WhyChose";
import { recieveWhyChoseData } from "../DataArrays";
import GetPaidSection from "../components/GetPaidSection";
import ProcessSection from "../components/ProcessSection";
import BankSelector from "../components/BankSelector";
import BankDetails from "../components/ui/BankDetails";
import ProcessCard from "../components/ui/ProcessCard";

export default function RecieveMoney() {
  return (
    <div>
      <FeatureHeroSection
        backgroundImage={woman_pressing_laptop}
        heading="Receive Money From Anywhere, Instantly"
        desc="Whether it’s from family, friends, or business partners, get your funds directly in your account or mobile wallet without any hassle."
        contentClass="max-w-3xl"
      />
      <GetPaidSection />
      <WhyChose
        header="Why choose Cudify for global transfer and payment?"
        subHeader="It only takes a few taps to move your money home. Here's how."
        whyChoseData={recieveWhyChoseData}
      />
      <ProcessSection
        header="How to Receive Money from Anywhere in the World."
        steps={[
          {
            title: "Choose Your Preferred Currency",
            description:
              "Select the currency you want to receive money in, whether it’s your local currency or something else. You’re in control.",
            bgColor: "#E7ECFC",
            component: <BankSelector />,
            colSpan: 5, // full width
          },
          {
            title: "Share Your Details",
            description:
              "Give your sender your preferred payout option — bank account, mobile money, or cash pickup.",
            bgColor: "#E6FAFE",
            component: <BankDetails />,
            colSpan: 3,
          },
          {
            title: "Get Paid Instantly",
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
