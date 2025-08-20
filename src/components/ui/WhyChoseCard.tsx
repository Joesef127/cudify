import type { SecurityCardProps } from "../../Types";

const WhyChoseCard = ({ icon, heading, desc }: SecurityCardProps) => {
  return (
    <div className="flex items-start justify-start gap-4 w-fill bg-white transition-colors rounded-2xl py-3">
      <div className=" rounded-full bg-[#E7ECFC] w-10 h-10 flex justify-center items-center">
        <img src={icon} alt={icon} className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg leading-7 text-[#101828] font-semibold">
          {heading}
        </h3>
        <p className="text-base leading-6 text-[#667085] font-normal text-wrap">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WhyChoseCard;