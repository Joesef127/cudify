import phone_exchange from "../assets/images/phone_exchange.png";
import CurrencyExchange from "./CurrencyExchange";

const PowerSection = () => {
  return (
    <section className="bg-white py-24 w-full">
      <div
        className="container mx-auto bg-no-repeat bg-center bg-contain w-full h-full py-20 relative flex flex-col items-center justify-center text-center text-white gap-8"
        style={{
          backgroundImage: `url(${phone_exchange})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <h1 className="font-semibold text-5xl z-10 max-w-2xl">
          The platform built to power global remittances
        </h1>
        <p className="font-normal text-xl z-10 max-w-lg">
          Connecting you globally with instant money transfers, anytime.
        </p>
        <CurrencyExchange />
      </div>
    </section>
  );
};

export default PowerSection;
