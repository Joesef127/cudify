import HeroContentBox from "./ui/HeroContentBox";
import { type FeatureHeroSectionProps } from "../Types";

const FeatureHeroSection = ({
  backgroundImage,
  heading,
  desc,
  contentClass,
}: FeatureHeroSectionProps) => {
  return (
    <section className="bg-[#FAFCFF] flex justify-center items-center pt-[102px] lg:pt-[130px] pb-10 md:px-10 w-full mx-auto">
      <div
        className="
          max-w-[1200px] mx-2.5 sm:mx-5 md:mx-auto w-full h-full 
          py-12 sm:py-16 lg:py-20 
          px-4 sm:px-8 lg:px-16 
          relative flex flex-col items-start justify-center 
          text-white gap-6 lg:gap-8 
          min-h-[480px] sm:min-h-[600px] lg:min-h-[720px] 
          rounded-2xl overflow-hidden
        "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>

        <HeroContentBox
          heading={heading}
          desc={desc}
          contentClass={`z-10 items-start justify-center ${contentClass}`}
        />
      </div>
    </section>
  );
};

export default FeatureHeroSection;
