// HeroFeature.tsx
import type { HeroFeatureProps } from "../Types";
import Button from "./ui/Button";

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
  has_tag,
  route,
  bgColor,
}: HeroFeatureProps) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center rounded-3xl py-8 px-4 lg:px-10 xl:px-16 lg:py-16"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="my-auto flex flex-col gap-5 lg:gap-8"
        data-aos="fade-right"
      >
        <div className="relative flex items-center gap-2">
          <h1
            className={`w-fit text-2xl leading-8 lg:text-[40px] lg:leading-[52px] font-semibold text-[#101828] ${
              col_span ? `col-span-${col_span}` : "col-span-3"
            }`}
          >
            {heading}
          </h1>
          {has_tag && (
            <span className="bg-[#F79009] rounded-4xl text-[#FEF4E6] py-1 px-3 h-fit w-max text-xs sm:text-sm">
              {tag}
            </span>
          )}
        </div>
        <p className="font-normal text-sm leading-5 lg:text-lg lg:leading-7 max-w-lg lg:mx-0">
          {desc}
        </p>
        <div className="flex justify-start w-full">
          <Button
            className="text-[#101828] text-sm md:text-base leading-5 flex flex-row-reverse gap-2.5 py-3 md:py-3 px-10 lg:px-12 border border-transparent hover:border-[#101828] rounded-3xl bg-[#F3F4F8] transition-colors duration-300"
            children={"Learn More "}
            icon="&rarr;"
            isImage={false}
            route={route}
          />
        </div>
      </div>

      <div
        className="h-[343px] md:h-[500px] lg:h-[530px] w-full rounded-2xl relative flex items-end px-4 md:px-5 pb-6 md:pb-8"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-left"
      >
        <div className="w-full py-3 px-4 md:py-4 md:px-5 bg-white rounded-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            {icon && (
              <div className="overflow-hidden bg-white rounded-full">
                <img src={icon} alt={icon} className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            )}
            {picture_tag && (
              <div className="rounded-full text-xs sm:text-base md:text-lg font-semibold text-[#2B2F38]">
                {picture_tag}
              </div>
            )}
          </div>
          {price && currency && (
            <div className="text-xs sm:text-base md:text-lg font-semibold text-gray-900">
              {price} {currency}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Herofeature;
