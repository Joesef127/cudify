import Button from "./Button"
import apple_logo from "../../assets/icons/apple_logo.png";
import playstore from "../../assets/icons/playstore.png";
import type { HeroContentBoxProps } from "../../Types";

const HeroContentBox = ({heading, desc, contentClass}: HeroContentBoxProps) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-4 max-w-3xl ${contentClass}`}>
          <h1 className="font-bold text-6xl leading-[72px] relative">
            {heading}
          </h1>
          <p className="text-xl max-w-lg">
            {desc}
          </p>

          <div className="flex justify-center gap-4">
            <Button
              icon={apple_logo}
              isImage={true}
              children="App Store"
              className="py-4 px-8 bg-white rounded-4xl flex gap-3 text-[#212337] leading-7 text-lg font-semibold"
            />
            <Button
              icon={playstore}
              isImage={true}
              children="Google Play"
              className="py-4 px-8 bg-white rounded-4xl flex gap-3 text-[#212337] leading-7 text-lg font-semibold"
            />
          </div>
        </div>
    )
}

export default HeroContentBox;