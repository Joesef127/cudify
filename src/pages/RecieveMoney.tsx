import CTASection from "../components/CTASection";
import FeatureHeroSection from "../components/FeatureHeroSection";
import SecuritySection from "../components/SecuritySection";
import dual_cuties from "../assets/images/dual_cuties.jpg";
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
        backgroundImage={dual_cuties}
        heading="Receive Money From Anywhere, Instantly"
        desc="Whether it’s from family, friends, or business partners — get your funds directly in your account or mobile wallet without any hassle."
        contentClass="max-w-3xl"
      />
      <GetPaidSection />
      <WhyChose
        header="Why choose Cudify for global transfer and payment?"
        subHeader="It only takes a few taps to move your money home. Here's how."
        whyChoseData={recieveWhyChoseData}
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
          component: <BankSelector />,
          colSpan: 5, // full width
        },
        {
          title: "Add Recipient",
          description:
            "Select who you want to send money to and which pay-out method to use.",
          bgColor: "#E6FAFE",
          component: <BankDetails />,
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
