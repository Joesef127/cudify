// HowItWorksCard.tsx
import type { HowItWorksCardType } from "../../Types";

const HowItWorksCard = ({ icon, heading, desc, isImage }: HowItWorksCardType) => {
  return (
    <div className="flex items-start gap-4 w-full transition-colors rounded-2xl py-3" data-aos="fade-up" data-aos-delay="100">
      {/* Icon */}
      <div className="rounded-full bg-[#E7ECFC] w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center">
        {isImage ? (
          <img src={icon} alt={icon} className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <span className="text-xl sm:text-2xl text-[#0D41E1]">{icon}</span>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-base sm:text-lg md:text-xl text-[#101828] font-semibold">
          {heading}
        </h3>
        <p className="text-sm sm:text-base leading-6 text-[#667085] font-normal w-full max-w-md">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
