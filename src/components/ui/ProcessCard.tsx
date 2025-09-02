import nigeria from "../../assets/icons/nigeria.svg";
import uk from "../../assets/icons/uk.svg";

const ProcessCard = () => {
  return (
    <div
      className="
        flex flex-col gap-6 items-center justify-center 
        rounded-t-2xl bg-white 
        w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
        pb-6 pt-8 sm:px-6 -mb-12
      "
       data-aos="fade-left"
    >
      <div className="flex items-center" data-aos="fade-down">
        <img src={uk} alt="UK" className="w-8 sm:w-10 -mr-3 sm:-mr-5" />
        <img src={nigeria} alt="Nigeria" className="w-8 sm:w-10" />
      </div>

      <p className="bg-[#E7F8F0] rounded-2xl py-1 px-6 sm:px-8 text-[#12B76A] text-xs sm:text-sm font-semibold" data-aos="fade-up">
        Successful
      </p>

      <p className="font-semibold text-lg sm:text-xl text-center" data-aos="fade-left">
        21,000.00 NGN
      </p>

      <p className="text-xs sm:text-sm text-[#667085] font-normal text-center max-w-[280px]" data-aos="fade-right">
        You’ve successfully sent 21,000 NGN to Joseph Stephen
      </p>
    </div>
  );
};

export default ProcessCard;
