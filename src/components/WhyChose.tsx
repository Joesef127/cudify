import type { WhyChoseProps } from "../Types";
import WhyChoseCard from "./ui/WhyChoseCard";
import SectionIntro from "./ui/SectionIntro";

const WhyChose = ({
  header,
  subHeader,
  whyChoseData
}: WhyChoseProps) => {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-12">
        <SectionIntro header={header} subHeader={subHeader} />
        {/* <div className="flex flex-col gap-5 max-w-xl text-center">
          <h1 className="font-semibold text-4xl leading-11 text-[#101828]">{header}</h1>
          <p className="text-[#48505E] text-xl leading-7 font-normal">{subHeader}</p>
        </div> */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {whyChoseData &&
            whyChoseData.map((item, index) => {
              return (
                <WhyChoseCard
                  key={index}
                  icon={item.icon}
                  heading={item.heading}
                  desc={item.desc}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default WhyChose;
