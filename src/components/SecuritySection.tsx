import SecurityCard from "./ui/SecurityCard";
import locked from "../assets/images/locked.png";
import { securityCardData } from "../DataArrays";

const SecuritySection = () => {
  return (
    <section className="py-16 bg-[#FAFCFF] w-full">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-[#101828] font-semibold text-5xl leading-14 max-w-lg">
              Your money is safe here, always.
            </h1>
            <p className="text-xl leading-7 font-normal text-[#48505E] max-w-xl">
              Cudify puts your safety first with round-the-clock monitoring and
              smart security built to protect your transactions every time.
            </p>
          </div>
          <div>
            <img src={locked} alt={locked} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 w-full ">
          {securityCardData &&
            securityCardData.map((card, index) => (
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
