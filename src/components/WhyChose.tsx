// WhyChose.tsx
import type { WhyChoseProps } from "../Types";
import WhyChoseCard from "./ui/WhyChoseCard";
import SectionIntro from "./ui/SectionIntro";

const WhyChose = ({ header, subHeader, whyChoseData, headerClass }: WhyChoseProps) => {
  return (
    <section className="flex justify-center py-12 sm:py-16 lg:py-24 bg-[#FAFCFF] w-full">
      <div className="w-full max-w-[1200px] px-4 md:px-0 flex flex-col justify-center items-center gap-10 sm:gap-12">
        <SectionIntro header={header} subHeader={subHeader ?? ""} customClass={headerClass} />

        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            gap-0 
            w-full
          "
        >
          {whyChoseData &&
            whyChoseData.map((item, index) => (
              <WhyChoseCard
                key={index}
                icon={item.icon}
                heading={item.heading}
                desc={item.desc}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChose;
