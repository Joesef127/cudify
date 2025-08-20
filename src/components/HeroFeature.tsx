import type { HeroFeatureProps } from "../Types";
import Button  from "./ui/Button";


const Herofeature = ({
  heading,
  desc,
  image,
  tag,
  icon,
  picture_tag,
  price,
  currency,
  col_span,
  has_tag
}: HeroFeatureProps) => {
  return (
    <div className="grid grid-cols-2 gap-10 w-full">
      <div className="my-auto flex flex-col gap-8">
        <div className="relative grid grid-cols-4 items-center gap-2">
          <h1 className={`w-full text-4xl leading-11 font-semibold text-[#101828] col-span-${col_span}`}>
            {heading}
          </h1>
          {has_tag && (
            <span className="bg-[#F79009] rounded-4xl text-[#FEF4E6] py-1 px-2.5 h-fit w-max">
              {tag}
            </span>
          )}
        </div>
        <p className="font-normal text-xl leading-7 max-w-lg">{desc}</p>
        <div className="flex justify-start w-full">
          <Button
            className="text-[#0D41E1] text-sm leading-5 flex flex-row-reverse gap-2.5 py-2.5 px-6 border rounded-3xl hover:bg-[#E7ECFC] transition-colors duration-300"
            children={"Learn More "}
            icon="&rarr;"
            isImage={false}
          />
        </div>
      </div>
      <div
        className="h-[660px] w-lg rounded-2xl relative flex items-end justify-self-end  px-5 pb-8"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bottom-0 left-0 py-4 px-5 bg-white rounded-full w-full h-fit flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            {icon && (
              <div className="overflow-hidden left-4 bg-white rounded-full text-sm font-medium text-gray-700">
                <img src={icon} alt={icon} className="w-8 h-8 top-4" />
              </div>
            )}
            {picture_tag && (
              <div className="rounded-full text-lg font-semibold text-[#2B2F38]">
                {picture_tag}
              </div>
            )}
          </div>
          {price && currency && (
            <div className="bottom-16 left-4 text-lg font-semibold text-gray-900">
              {price} {currency} 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Herofeature;