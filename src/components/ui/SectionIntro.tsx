// SectionIntro.tsx
import type { SectionIntroProps } from "../../Types";

const SectionIntro = ({ header, subHeader }: SectionIntroProps) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 max-w-2xl">
      <h1
        className="
          font-semibold 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          leading-snug sm:leading-[42px] md:leading-[48px] lg:leading-[56px]
          text-[#101828]
        "
      >
        {header}
      </h1>
      <p
        className="
          text-[#48505E] 
          text-base sm:text-lg md:text-xl 
          leading-6 sm:leading-7 
          font-normal
        "
      >
        {subHeader}
      </p>
    </div>
  );
};

export default SectionIntro;
