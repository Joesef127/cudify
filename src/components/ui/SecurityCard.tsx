import type { SecurityCardProps } from "../../Types";

const SecurityCard = ({ icon, heading, desc }: SecurityCardProps) => {
  return (
    <div
      className="
        flex items-start gap-3 sm:gap-4
        transition-colors rounded-2xl 
        py-3 px-2 sm:px-3 md:px-4 
        w-full max-w-full sm:max-w-md
      "
    >
      <div className="rounded-full bg-[#E7ECFC] w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center flex-shrink-0">
        <img src={icon} alt={heading} className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 text-left">
        <h3 className="text-base sm:text-lg font-semibold text-[#101828] leading-snug">
          {heading}
        </h3>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#667085] font-normal break-words">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SecurityCard;
