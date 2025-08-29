import type { HeroContentBoxProps } from "../../Types";
import DownloadApp from "./DownloadApp";

const HeroContentBox = ({
  heading,
  desc,
  contentClass,
  headingClass,
  subHeaderClass,
}: HeroContentBoxProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-4 sm:gap-6 max-w-3xl ${contentClass}`}
    >
      {/* Heading */}
      <h1
        className={`
          font-bold 
          text-[36px] leading-[44px] lg:text-[60px] lg:leading-[72px]
          relative
        ${headingClass}`}
        data-aos="fade-left"
      >
        {heading}
      </h1>

      {/* Description */}
      <p
        className={`text-sm sm:text-base xl:text-xl max-w-md sm:max-w-[557px] ${subHeaderClass}`}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        {desc}
      </p>

      {/* Buttons */}
      <DownloadApp />
    </div>
  );
};

export default HeroContentBox;
