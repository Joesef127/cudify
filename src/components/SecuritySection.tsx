import SecurityCard from "./ui/SecurityCard";
import locked from "../assets/images/locked.png";
import { securityCardData } from "../DataArrays";

const SecuritySection = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAFCFF] w-full">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 sm:gap-8 lg:text-left">
            <h1 className="text-[#101828] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-xl mx-auto lg:mx-0">
              Your money is safe here, always.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal text-[#48505E] max-w-2xl mx-auto lg:mx-0">
              Cudify puts your safety first with round-the-clock monitoring and
              smart security built to protect your transactions every time.
            </p>
          </div>

          <div className="flex justify-center w-full lg:w-auto">
            <img
              src={locked}
              alt="Locked Security"
              className="w-72 md:w-96 h-auto object-contain"
            />
          </div>
        </div>

        {/* Security Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {securityCardData?.map((card, index) => (
            <SecurityCard
              key={index}
              icon={card.icon}
              heading={card.heading}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
