import holding_phone from "../assets/images/holding_phone.png";
import hero_bg_texture from "../assets/images/hero_bg_texture.png";
import HeroStickyCard from "./ui/HeroStickyCard";
import cute_lady from "../assets/images/cute_lady.png";
import dread_guy from "../assets/images/dread_guy.png";
import HeroStickyToast from "./ui/HeroStickyToast";
import HeroContentBox from "./ui/HeroContentBox";

export default function HomeHero() {
  return (
    <section className="pt-28 sm:pt-36 md:pt-44 bg-[#0D41E1] w-full relative overflow-hidden sora">
      <div className="container mx-auto px-2 relative gap-6 z-10 flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <HeroContentBox
          heading="Borderless Payments, Boundless Possibilities"
          desc="Built for the African diaspora. Send, receive, and manage money
            across borders easily."
        />

        {/* Phone Image */}
        <div className="relative flex justify-center items-center -mr-24 sm:-mr-36 mt-8 sm:mt-12 md:mt-16">
          <img
            src={holding_phone}
            alt="Holding phone"
            className="w-3/4 sm:w-5/6 md:w-full max-w-xl"
          />

          <HeroStickyCard
            image={dread_guy}
            name="Cameron Williamson"
            timeStamp="April 3rd, 1:40:40 PM"
            amount="+$100"
            className="absolute top-0 right-2/7 sm:right-1/16 z-10 rotate-[30deg] lg:rotate-0"
          />
          <HeroStickyCard
            image={cute_lady}
            name="Esther Howard"
            timeStamp="April 3rd, 1:40:40 PM"
            amount="+$100"
            className="absolute top-2/10 left-1 sm:-left-1/9 md:-left-2/9 z-10"
          />

          <HeroStickyToast />
        </div>
      </div>

      {/* Pattern Overlay */}
      {/* <img
        src={hero_bg_texture}
        alt="pattern"
        className="absolute top-0 w-[120%] sm:w-full z-0 opacity-80 pointer-events-none"
      /> */}
      <div
        className="absolute z-0 w-full h-full top-0 left-0"
        style={{
          backgroundImage: `url(${hero_bg_texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}
