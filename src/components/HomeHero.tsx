import holding_phone from "../assets/images/holding_phone.png";
import hero_bg_texture from "../assets/images/hero_bg_texture.png";
import HeroStickyCard from "./ui/HeroStickyCard";
import cute_lady from "../assets/images/cute_lady.png";
import dread_guy from "../assets/images/dread_guy.png";
import HeroStickyToast from "./ui/HeroStickyToast";
import HeroContentBox from "./ui/HeroContentBox";

export default function HomeHero() {
  return (
    <section className="pt-44 bg-[#0D41E1] w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center text-white ">
        <HeroContentBox
          heading="Borderless Payments, Boundless Possibilities"
          desc="Built for the African diaspora. Send, receive, and manage money
            across borders easily."
        />
        {/* <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto">
          <h1 className="font-bold text-6xl leading-[72px] relative">
            
          </h1>
          <p className="text-xl max-w-lg">
            
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
        </div> */}

        {/* Phone Image */}
        <div className="flex justify-center items-center mt-12 -mr-40">
          <img
            src={holding_phone}
            alt="Holding phone"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* sticky cards */}
      <HeroStickyCard
        image={dread_guy}
        name="Cameron Williamson"
        timeStamp="April 3rd, 1:40: 40 PM"
        amount="+$100"
        className="absolute top-7/13 right-1/6 z-10"
      />
      <HeroStickyCard
        image={cute_lady}
        name="Esther Howard"
        timeStamp="April 3rd, 1:40: 40 PM"
        amount="+$100"
        className="absolute top-7/12 left-2/11 z-10"
      />

      <HeroStickyToast />

      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"> */}
      {/* Pattern as an overlay */}
      <img
        src={hero_bg_texture}
        alt="pattern"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-full z-0 opacity-80 pointer-events-none"
      />
      {/* </div> */}
    </section>
  );
}
