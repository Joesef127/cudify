import { ChevronDown } from "lucide-react";
import stephen from "../../assets/images/stephen.jpg";

const CudifyTagCard = () => {
  return (
    <div
      className="
        bg-white p-4 sm:py-9 rounded-2xl border border-gray-200 
        w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-10
        
      "
      data-aos="fade-left"
    >
      <div className="flex flex-col gap-4 justify-center items-center mb-6 sm:mb-8">
        <div
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border overflow-hidden flex justify-center"
          style={{
            backgroundImage: `url(${stephen})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
           data-aos="fade-down"
        ></div>

        <div className="text-xs sm:text-sm leading-5 font-normal text-[#101828]"  data-aos="fade-left">
          Send Money to
        </div>

        <div className="flex items-center justify-between gap-2.5 py-1 px-3 bg-[#F3F4F8] rounded-full" data-aos="fade-right">
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

      <div className="flex items-center justify-between rounded-lg bg-[#F3F4F8] p-3 sm:p-4" data-aos="fade-up">
        <span className="text-[#12B76A] text-xs sm:text-sm">Stephen</span>
        <span className="text-[#101828] text-xs sm:text-sm">Cudify Wallet</span>
      </div>
    </div>
  );
};

export default CudifyTagCard;
