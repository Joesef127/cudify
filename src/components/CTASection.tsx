import Button  from "./ui/Button";
import hero_bg_texture from "../assets/images/hero_bg_texture.png";
import apple_logo from "../assets/icons/apple_logo.png";
import playstore from "../assets/icons/playstore.png";
import ThreePhones from "./ui/ThreePhones";

export default function CTASection() {
  return (
    <section className="py-24  w-full relative overflow-hidden bg-[#FAFCFF]">
      <div className="container bg-[#0D41E1] mx-auto px-4 relative z-10 flex flex-col items-center text-center text-white overflow-hidden rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-8 mt-16 max-w-2xl mx-auto z-10">
          <div className="flex flex-col gap-6">
            <p className="text-5 leading-6 font-normal text-center text-[#F0F1F3]">
              Download app
            </p>
            <h1 className="font-bold text-6xl leading-[72px] relative">
              Create Your Cudify Account in 2 Minutes
            </h1>
          </div>

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

        <ThreePhones />

        {/* Phone Image */}
        {/* <div className="flex justify-center items-center mt-12 -mr-40 relative z-10">
          <img
            src={iphone_left}
            alt="Holding phone"
            className="w-full max-w-md"
          />
          <img
            src={iphone_straight}
            alt="Holding phone"
            className="w-full max-w-md"
          />
          <img
            src={iphone_right}
            alt="Holding phone"
            className="w-full max-w-md"
          />
        </div> */}
        {/* Pattern as an overlay */}
        <img
          src={hero_bg_texture}
          alt="pattern"
          className="absolute left-1/2 -translate-x-1/2 w-full z-0 opacity-80 pointer-events-none"
        />
      </div>
    </section>
  );
}
