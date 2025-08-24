// WhyChoseCard.tsx
import type { SecurityCardProps } from "../../Types";

const WhyChoseCard = ({ icon, heading, desc }: SecurityCardProps) => {
  return (
    <div
      className="
        flex items-start gap-3 sm:gap-4 
        rounded-2xl p-4 
        w-full h-full
        transition-colors
      "
       data-aos="fade-up"
    >
      <div className="rounded-full bg-[#E7ECFC] p-2 sm:p-3 flex justify-center items-center shrink-0">
        <img src={icon} alt={heading} className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-[#101828] font-semibold">
          {heading}
        </h3>
        <p className="text-sm sm:text-base leading-5 sm:leading-6 text-[#667085] font-normal">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WhyChoseCard;
