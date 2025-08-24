// VirtualSection.tsx
import SectionIntro from "./ui/SectionIntro";
import guy_cudify_card from "../assets/images/guy_cudify_card.png";
import HowItWorksCard from "./ui/HowItWorksCard";

const VirtualSection = () => {
  const howItWorksData = [
    {
      icon: "1",
      isImage: false,
      heading: "Create Your Account",
      desc: "Sign up in minutes with your email or phone number. No paperwork needed.",
    },
    {
      icon: "2",
      isImage: false,
      heading: "Activate Your Virtual Card",
      desc: "Get your virtual card instantly. Use it for online purchases, subscriptions, and more.",
    },
    {
      icon: "3",
      isImage: false,
      heading: "Top Up & Spend",
      desc: "Fund your wallet and start spending online anywhere major cards are accepted.",
    },
  ];

  return (
    <section className="py-16 bg-[#FAFCFF] w-full">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-12">
        <SectionIntro
          header="How it works"
          subHeader="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 w-full">
          {/* Cards */}
          <div className="flex flex-col gap-8 w-full">
            {howItWorksData.map((item, index) => (
              <HowItWorksCard
                key={index}
                icon={item.icon}
                isImage={item.isImage}
                heading={item.heading}
                desc={item.desc}
              />
            ))}
          </div>

          {/* Image section */}
          <div
            className="h-[500px] lg:h-[600px] w-full rounded-2xl relative flex items-end px-5 pb-8"
            style={{
              backgroundImage: `url(${guy_cudify_card})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-left"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default VirtualSection;
