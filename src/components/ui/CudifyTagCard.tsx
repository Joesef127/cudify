import { ChevronDown } from "lucide-react";
import stephen from "../../assets/images/stephen.jpg";

const CudifyTagCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-3/7 -mb-3">
      <div className="flex flex-col gap-4 justify-center items-center mb-8">
        <div className="w-28 h-28 rounded-full border overflow-hidden flex justify-center" style={{
                backgroundImage: `url(${stephen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
          {/* <img src={stephen} alt={stephen} /> */}
        </div>
        {/* Header */}
        <div className="text-sm leading-5 font-normal text-[#101828]">
          Send Money to
        </div>

        <div className="flex items-center justify-between gap-2.5 py-1 px-3 bg-[#F3F4F8] rounded-full">
          <div className="flex justify-start items-center">
            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
              <span className="text-sm">🇬🇧</span>
            </div>
            <p className="text-xs leading-4 font-semibold text-[#101828]">
              £420.20
            </p>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-[#F3F4F8] p-4">
        <span className="text-[#12B76A] text-xs leading-4 font-normal">
          Stephen
        </span>
        <span className="text-[#101828] text-xs leading-4 font-normal">
          Cudify Wallet
        </span>
      </div>
    </div>
  );
};

export default CudifyTagCard;
