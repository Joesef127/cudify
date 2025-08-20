import type { SecurityCardProps } from "../../Types";

const WhyChoseCard = ({ icon, heading, desc }: SecurityCardProps) => {
  return (
    <div className="flex items-start justify-start gap-4 transition-colors rounded-2xl py-3 w-full">
      <div className=" rounded-full bg-[#E7ECFC] p-3 flex justify-center items-center">
        <img src={icon} alt={icon} className="w-6 h-6" />
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