import type { HeroStickyCardProps } from "../../Types";

const HeroStickyCard = ({
  image,
  name,
  timeStamp,
  amount,
  className,
}: HeroStickyCardProps) => {
  return (
    <div
      className={`flex justify-between items-center gap-5 sm:gap-8 w-max cursor-pointer bg-white transition-colors rounded-lg sm:rounded-xl py-1 px-2 sm:py-3 sm:px-2 shadow-lg ${className}`}
    >
      <div className="flex gap-2 sm:gap-4">
        <div className="rounded-full bg-[#E7ECFC] overflow-hidden w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-[5px] sm:text-[10px] leading-[7px] text-[#101828] font-medium mb-2">
            {name}
          </h3>
          <p className="text-[4px] sm:text-[8px] leading-[6px] text-[#667085] font-light">
            {timeStamp}
          </p>
        </div>
      </div>
      <p className="text-[5px] sm:text-xs leading-[7px] font-semibold text-[#101828]">
        {amount}
      </p>
    </div>
  );
};

export default HeroStickyCard;
