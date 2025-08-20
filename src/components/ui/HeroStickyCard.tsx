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
      className={`flex justify-between gap-10 w-max cursor-pointer bg-white transition-colors rounded-2xl p-4 ${className}`}
    >
      <div className="flex gap-4">
        <div className="rounded-full bg-[#E7ECFC] overflow-hidden w-fit">
          <img src={image} alt={image} />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-xs leading-normal text-[#101828] font-normal">
            {name}
          </h3>
          <p className="text-[10px] leading-4 text-[#667085] font-light">
            {timeStamp}
          </p>
        </div>
      </div>
      <p>{amount}</p>
    </div>
  );
};

export default HeroStickyCard;