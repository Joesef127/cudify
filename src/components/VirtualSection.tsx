// VirtualSection.tsx
import SectionIntro from "./ui/SectionIntro";
import card_phone from "../assets/images/card_phone.png";
import HowItWorksCard from "./ui/HowItWorksCard";
import { howItWorksData } from "../DataArrays";

const VirtualSection = () => {
  return (
    <section className="py-16 bg-[#FAFCFF] w-full flex justify-center">
      <div className="w-full max-w-[1200px] px-4 flex flex-col justify-center items-center gap-12">
        <SectionIntro
          header="Get Your Virtual Dollar Card in 5 Minutes"
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
              backgroundImage: `url(${card_phone})`,
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
