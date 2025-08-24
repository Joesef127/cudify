// SectionIntro.tsx
import type { SectionIntroProps } from "../../Types";

const SectionIntro = ({ header, subHeader }: SectionIntroProps) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 max-w-2xl justify-center items-center">
      <h1
        className="
          font-semibold text-center
          text-2xl sm:text-3xl
          leading-snug
          text-[#101828] max-w-[479px]
        "
         data-aos="fade-left"
      >
        {header}
      </h1>
      <p
        className="
          text-[#48505E] text-center
          text-sm sm:text-base md:text-lg 
          leading-6 sm:leading-7 
          font-normal
        "
         data-aos="fade-right"
      >
        {subHeader}
      </p>
    </div>
  );
};

export default SectionIntro;
