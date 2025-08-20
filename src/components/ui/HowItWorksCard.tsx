import type { HowItWorksCardType } from "../../Types";

const HowItWorksCard = ({
  icon,
  heading,
  desc,
  isImage,
}: HowItWorksCardType) => {
  return (
    <div className="flex items-start justify-start gap-4 w-full transition-colors rounded-2xl py-3">
      <div className=" rounded-full bg-[#E7ECFC] w-10 h-10 flex justify-center items-center">
        {isImage ? (
          <img src={icon} alt={icon} className="w-5 h-5" />
        ) : (
          <span className="text-2xl text-[#0D41E1]">{icon}</span>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg leading-7 text-[#101828] font-semibold">
          {heading}
        </h3>
        <p className="text-base leading-6 text-[#667085] font-normal text-wrap w-10/11">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
