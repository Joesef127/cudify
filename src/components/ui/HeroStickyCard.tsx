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
      className={`flex justify-between items-center gap-3 sm:gap-6 w-max cursor-pointer bg-white transition-colors rounded-lg sm:rounded-xl py-1 px-1 sm:py-2 sm:px-2 ${className}`}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="flex gap-1 sm:gap-2">
        <div className="rounded-full bg-[#E7ECFC] overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-4 h-4 sm:w-8 sm:h-8 object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-[5px] sm:text-[10px] leading-[7px] text-[#101828] font-medium sm:mb-2">
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
