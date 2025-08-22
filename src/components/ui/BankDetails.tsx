import { Copy } from "lucide-react";

const BankDetails = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 
      w-4/6 mx-auto -mb-10"
    >
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
            <span className="text-sm sm:text-base">🇬🇧</span>
          </div>
          <h2 className="text-xs sm:text-sm font-normal text-[#101828]">
            GBP Bank details
          </h2>
        </div>

        {/* Amount */}
        <div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#101828]">
            £20,000
          </div>
        </div>
      </div>

      {/* Bank Details */}
      <div className="space-y-4">
        {/* Account Name */}
        <div>
          <label className="block text-[10px] sm:text-xs font-light text-[#101828]">
            Account Name
          </label>
          <div className="flex items-center justify-between rounded-lg">
            <span className="text-[#0D41E1] text-[10px] sm:text-sm font-light">
              Stephen Joseph
            </span>
            <button
              onClick={() => handleCopy("Stephen Joseph")}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D41E1]" />
            </button>
          </div>
        </div>

        {/* Sort Code */}
        <div>
          <label className="block text-[10px] sm:text-xs font-light text-[#101828]">
            Sort code
          </label>
          <div className="flex items-center justify-between rounded-lg">
            <span className="text-[#0D41E1] text-[10px] sm:text-sm font-light">
              10-10-10
            </span>
            <button
              onClick={() => handleCopy("10-10-10")}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D41E1]" />
            </button>
          </div>
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-[10px] sm:text-xs font-light text-[#101828]">
            Account Number
          </label>
          <div className="flex items-center justify-between rounded-lg">
            <span className="text-[#0D41E1] text-[10px] sm:text-sm font-light">
              12345678
            </span>
            <button
              onClick={() => handleCopy("12345678")}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D41E1]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
