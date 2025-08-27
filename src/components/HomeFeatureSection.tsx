// HomeFeatureSection.tsx
import { featuresData } from "../DataArrays";
import Herofeature from "./HeroFeature";

export default function HomeFeatureSection() {
  return (
    <section className="bg-[#FAFCFF] flex justify-center w-full py-16 mb-16">
      <div className="max-w-[1232px] w-full flex flex-col items-center justify-center gap-16 md:gap-24 lg:gap-28 px-4">
        {featuresData &&
          featuresData.map((feature, index) => (
            <Herofeature
              key={index}
              heading={feature.heading}
              desc={feature.desc}
              image={feature.image}
              icon={feature.icon}
              currency={feature.currency}
              picture_tag={feature.picture_tag}
              price={feature.price}
              tag={feature.tag}
              col_span={feature.col_span}
              has_tag={feature.has_tag}
              bgColor={feature.bgColor}
              route={feature.route}
            />
          ))}
      </div>
    </section>
  );
}
