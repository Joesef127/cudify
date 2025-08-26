// SectionIntro.tsx
import type { SectionIntroProps } from "../../Types";

const SectionIntro = ({ header, subHeader, customClass }: SectionIntroProps) => {
  return (
    <div className={`flex flex-col gap-4 sm:gap-5 max-w-2xl justify-center items-center ${customClass}`}>
      <h1
        className="
          font-semibold lg:text-center
          text-2xl sm:text-4xl
          leading-snug
          text-[#101828] 
        "
         data-aos="fade-left"
      >
        {header}
      </h1>
      <p
        className="
          text-[#48505E] lg:text-center
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
