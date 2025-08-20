import HeroContentBox from "./ui/HeroContentBox";
import { type FeatureHeroSectionProps } from "../Types";

const FeatureHeroSection = ({backgroundImage, heading, desc, contentClass }: FeatureHeroSectionProps) => {
  return (
    <section className="bg-[#FAFCFF] pt-44 pb-10 w-full">
      <div
        className={`container mx-auto w-full h-full py-20 px-16 relative flex flex-col items-start justify-center text-white gap-8 min-h-[720px] rounded-2xl overflow-hidden`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <HeroContentBox heading={heading} desc={desc} contentClass={`z-10 items-start justify-center ${contentClass}`} />
      </div>
    </section>
  );
};

export default FeatureHeroSection;
