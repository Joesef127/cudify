import CTASection from "../components/CTASection";
import FeatureHeroSection from "../components/FeatureHeroSection";
import SecuritySection from "../components/SecuritySection";
import grey_old_couple from "../assets/images/grey_old_couple.png";
import WhyChose from "../components/WhyChose";
import { sendWhyChoseData } from "../DataArrays";
import ProcessSection from "../components/ProcessSection";
import CurrencyExchange from "../components/CurrencyExchange";
import BankForm from "../components/ui/BankForm";
import ProcessCard from "../components/ui/ProcessCard";

export default function SendMoneyHome() {
  return (
    <div>
      <FeatureHeroSection
        backgroundImage={grey_old_couple}
        heading="Support friends and family"
        desc="Fast, secure transfers from the UK to Africa — no hidden fees."
        contentClass="max-w-lg"
      />
      <WhyChose
        header="Why choose Cudify for sending money home?"
        subHeader="It only takes a few taps to move your money home. Here's how."
        whyChoseData={sendWhyChoseData}
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
          component: <CurrencyExchange />,
          colSpan: 5, // full width
        },
        {
          title: "Add Recipient",
          description:
            "Select who you want to send money to and which pay-out method to use.",
          bgColor: "#E6FAFE",
          component: <BankForm />,
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
