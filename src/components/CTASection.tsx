import hero_bg_texture from "../assets/images/hero_bg_texture.png";
import ThreePhones from "./ui/ThreePhones";
import DownloadApp from "./ui/DownloadApp";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 w-full flex justify-center items-center relative overflow-hidden">
      <div className="container bg-[#0D41E1] mx-2.5 sm:mx-5 md:mx-auto relative z-10 flex flex-col items-center text-center text-white overflow-hidden rounded-2xl">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center gap-6 mt-12 md:mt-16 max-w-2xl mx-auto px-3 z-10">
          <div className="flex flex-col gap-4 md:gap-6">
            <p
              className="text-sm md:text-base font-normal text-center text-[#F0F1F3]"
              data-aos="fade-right"
            >
              Download app
            </p>
            <h1
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug md:leading-[64px] lg:leading-[72px] relative px-2"
              data-aos="fade-left"
            >
              Create Your Cudify Account in 2 Minutes
            </h1>
          </div>

          {/* Buttons */}
          <DownloadApp />
        </div>

        {/* Phones Image (make sure ThreePhones is responsive inside) */}
        <div className="mt-12 w-full flex justify-center" data-aos='fade-up'>
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
