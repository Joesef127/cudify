import Button from "./ui/Button";
import hero_bg_texture from "../assets/images/hero_bg_texture.png";
import apple_logo from "../assets/icons/apple_logo.png";
import playstore from "../assets/icons/playstore.png";
import ThreePhones from "./ui/ThreePhones";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 w-full flex justify-center items-center relative overflow-hidden">
      <div className="container bg-[#0D41E1] w-[90%] mx-auto relative z-10 flex flex-col items-center text-center text-white overflow-hidden rounded-2xl">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center gap-6 mt-12 md:mt-16 max-w-2xl mx-auto z-10">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-sm md:text-base font-normal text-center text-[#F0F1F3]">
              Download app
            </p>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-[64px] lg:leading-[72px] relative px-2">
              Create Your Cudify Account in 2 Minutes
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4">
            <Button
              icon={apple_logo}
              isImage={true}
              children="App Store"
              className="w-full sm:w-auto py-3 px-6 sm:py-4 sm:px-8 bg-white rounded-3xl flex items-center justify-center gap-3 text-[#212337] leading-6 sm:leading-7 text-base sm:text-lg font-semibold"
            />
            <Button
              icon={playstore}
              isImage={true}
              children="Google Play"
              className="w-full sm:w-auto py-3 px-6 sm:py-4 sm:px-8 bg-white rounded-3xl flex items-center justify-center gap-3 text-[#212337] leading-6 sm:leading-7 text-base sm:text-lg font-semibold"
            />
          </div>
        </div>

        {/* Phones Image (make sure ThreePhones is responsive inside) */}
        <div className="mt-12 w-full flex justify-center">
          <ThreePhones />
        </div>

        {/* Pattern as background overlay */}
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(${hero_bg_texture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </section>
  );
}
