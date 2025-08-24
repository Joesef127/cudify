import { ChevronDown } from "lucide-react";

const ChooseAmountCard = () => {
  return (
    <div
      className="
        bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 
        w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
        -mb-3
      "
       data-aos="fade-right"
    >
      <div className="flex flex-col gap-4 justify-center items-center mb-6 sm:mb-8">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101828]" data-aos="fade-down">
          £100
        </div>

        <div className="flex items-center justify-between gap-2.5 py-1 px-3 bg-[#F3F4F8] rounded-full" data-aos="fade-down">
          <div className="flex justify-start items-center gap-1">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden flex items-center justify-center">
              <span className="text-xs sm:text-sm">🇬🇧</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#101828]">
              £420.20
            </p>
          </div>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="flex items-center justify-between">
          <span className="text-[#667085] text-xs sm:text-sm" data-aos="fade-right">You’re sending</span>
          <span className="text-[#101828] text-xs sm:text-sm" data-aos="fade-left">100 GBP</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#667085] text-xs sm:text-sm" data-aos="fade-right">Fee</span>
          <span className="text-[#12B76A] text-xs sm:text-sm" data-aos="fade-left">Free</span>
        </div>
      </div>
    </div>
  );
};

export default ChooseAmountCard;
