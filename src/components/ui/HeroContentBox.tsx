import type { HeroContentBoxProps } from "../../Types";
import DownloadApp from "./DownloadApp";

const HeroContentBox = ({
  heading,
  desc,
  contentClass,
}: HeroContentBoxProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-4 sm:gap-6 max-w-3xl lg:text-left ${contentClass}`}
    >
      {/* Heading */}
      <h1
        className="
          font-bold 
          text-[28px] sm:text-4xl md:text-5xl lg:text-6xl 
          leading-auto relative
        "
      >
        {heading}
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base xl:text-xl max-w-md sm:max-w-lg">
        {desc}
      </p>

      {/* Buttons */}
      <DownloadApp />
    </div>
  );
};

export default HeroContentBox;
