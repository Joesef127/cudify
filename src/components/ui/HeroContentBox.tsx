// HeroContentBox.tsx
import Button from "./Button";
import apple_logo from "../../assets/icons/apple_logo.png";
import playstore from "../../assets/icons/playstore.png";
import type { HeroContentBoxProps } from "../../Types";

const HeroContentBox = ({
  heading,
  desc,
  contentClass,
}: HeroContentBoxProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 sm:gap-6 max-w-3xl lg:text-left ${contentClass}`}
    >
      {/* Heading */}
      <h1
        className="text-center
          font-bold 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          leading-auto sm:leading-[52px] md:leading-[60px] lg:leading-[72px]
          relative
        "
      >
        {heading}
      </h1>

      {/* Description */}
      <p className="text-sm text-center sm:text-base xl:text-xl max-w-md sm:max-w-lg">
        {desc}
      </p>

      {/* Buttons */}
      <div className="flex flex-row justify-center lg:justify-start gap-3 mt-4">
        {[
          { icon: apple_logo, isImage: true, children: "App Store" },
          { icon: playstore, isImage: true, children: "Google Play" },
        ].map((btn, index) => {
          return (
            <Button
              key={index}
              icon={btn.icon}
              isImage={btn.isImage}
              children={btn.children}
              className="py-2 px-4 sm:py-4 sm:px-7 bg-white rounded-full flex gap-2 sm:gap-3 text-[#212337] text-xs sm:text-base font-semibold items-center"
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroContentBox;
