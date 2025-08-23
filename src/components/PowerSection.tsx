import phone_exchange from "../assets/images/phone_exchange.png";
import CurrencyExchange from "./CurrencyExchange";

const PowerSection = () => {
  return (
    <section className="bg-[#FAFCFF] px-2.5 py-16 md:py-20 lg:py-24 w-full">
      <div
        className="container overflow-hidden rounded-2xl mx-auto py-12 md:py-16 lg:py-20 relative flex flex-col items-center justify-center text-center text-white gap-4 sm:gap-6 md:gap-8"
        style={{
          backgroundImage: `url(${phone_exchange})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="z-10 flex flex-col items-center justify-center  gap-4 sm:gap-6 md:gap-8 min-w-4/9 lg:min-w-4/10 max-w-[532px]">
          {/* Heading */}
          <h1 className="font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-5xl z-10 max-w-md sm:max-w-xl lg:max-w-2xl leading-auto mx-2.5" data-aos='fade-left'>
            The platform built to power global remittances
          </h1>

          {/* Paragraph */}
          <p className="mx-2.5 font-normal text-sm sm:text-base md:text-xl z-10 max-w-sm sm:max-w-md md:max-w-lg"  data-aos='fade-right'>
            Connecting you globally with instant money transfers, anytime.
          </p>
        </div>

        {/* Exchange Component */}
        {/* <div className="z-10 w-full max-w-sm sm:max-w-md md:max-w-lg"> */}
        <CurrencyExchange />
        {/* </div> */}
      </div>
    </section>
  );
};

export default PowerSection;
