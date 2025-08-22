import nigeria from "../../assets/icons/nigeria.png";
import uk from "../../assets/icons/uk.png";

const ProcessCard = () => {
  return (
    <div
      className="
        flex flex-col gap-4 items-center justify-center 
        rounded-t-2xl bg-white 
        w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
        p-4 sm:p-6
      "
    >
      <div className="flex items-center">
        <img src={uk} alt="UK" className="w-8 sm:w-10 -mr-3 sm:-mr-5" />
        <img src={nigeria} alt="Nigeria" className="w-8 sm:w-10" />
      </div>

      <p className="bg-[#E7F8F0] rounded-2xl py-1 px-6 sm:px-8 text-[#12B76A] text-xs sm:text-sm font-semibold">
        Successful
      </p>

      <p className="font-semibold text-lg sm:text-xl text-center">
        21,000.00 NGN
      </p>

      <p className="text-xs sm:text-sm text-[#667085] font-normal text-center max-w-[90%]">
        You’ve successfully sent 21,000 NGN to Joseph Stephen
      </p>
    </div>
  );
};

export default ProcessCard;
