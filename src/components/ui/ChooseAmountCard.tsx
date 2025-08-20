import { ChevronDown } from "lucide-react";

const ChooseAmountCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-4/6 -mb-3">
      {/* Header */}
      <div className="flex flex-col gap-4 justify-center items-center mb-8">
        {/* Amount */}
        <div>
          <div className="text-3xl leading-8 font-bold text-[#101828]">
            £100
          </div>
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

      {/* Bank Details */}
      <div className="">
        {/* Account Name */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between rounded-lg">
            <span className="text-[#667085] text-xs leading-4 font-normal">
              You’re sending
            </span>
            <span className="text-[#101828] text-xs leading-4 font-normal">
              100 GBP
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg">
            <span className="text-[#667085] text-xs leading-4 font-normal">
              Fee
            </span>
            <span className="text-[#12B76A] text-xs leading-4 font-normal">
              Free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAmountCard;
