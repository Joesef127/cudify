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
}: HeroFeatureProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center">
      {/* Text Content */}
      <div className="my-auto flex flex-col gap-6 md:gap-8 lg:text-left">
        <div className="relative flex items-center gap-2">
          <h1
            className={`w-fit text-2xl sm:text-3xl lg:text-4xl leading-snug font-semibold text-[#101828] ${
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
        <p className="font-normal text-base sm:text-lg md:text-xl leading-relaxed max-w-lg lg:mx-0">
          {desc}
        </p>
        <div className="flex justify-start w-full">
          <Button
            className="text-[#0D41E1] hover:text-white text-sm md:text-base leading-5 flex flex-row-reverse gap-2.5 py-3 md:py-3 px-10 lg:px-12 border rounded-3xl hover:bg-[#0D41E1] transition-colors duration-300"
            children={"Learn More "}
            icon="&rarr;"
            isImage={false}
            route={route}
          />
        </div>
      </div>

      {/* Image Block */}
      <div
        className="h-[400px] md:h-[500px] lg:h-[660px] w-full rounded-2xl relative flex items-end px-4 md:px-5 pb-6 md:pb-8"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
