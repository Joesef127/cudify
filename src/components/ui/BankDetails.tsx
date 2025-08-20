import { Copy } from "lucide-react";

const BankDetails = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 w-4/6 -mb-10">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
            <span className="text-sm">🇬🇧</span>
          </div>
          <h2 className="text-xs leading-3 font-normal text-[#101828]">
            GBP Bank details
          </h2>
        </div>

        {/* Amount */}
        <div>
          <div className="text-2xl leading-8 font-bold text-[#101828]">£20,000</div>
        </div>
      </div>

      {/* Bank Details */}
      <div className="">
        {/* Account Name */}
        <div>
          <label className="block text-[10px] leading-4 font-light text-[#101828]">
            Account Name
          </label>
          <div className="flex items-center justify-between rounded-lg">
            <span className="text-[#0D41E1] text-[10px] leading-4 font-light">Stephen Joseph</span>
            <button
              onClick={() => handleCopy("Stephen Joseph")}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <Copy className="w-4 h-4 text-[#0D41E1]" />
            </button>
          </div>
        </div>

        {/* Sort Code */}
        <div>
          <label className="block text-[10px] leading-4 font-light text-[#101828]">
            Sort code
          </label>
          <div className="flex items-center justify-between rounded-lg">
            <span className="text-[#0D41E1] text-[10px] leading-4 font-light">10-10-10</span>
            <button
              onClick={() => handleCopy("10-10-10")}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <Copy className="w-4 h-4 text-[#0D41E1]" />
            </button>
          </div>
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-[10px] leading-4 font-light text-[#101828]">
            Account Number
          </label>
          <div className="flex items-center justify-between rounded-lg">
            <span className="text-[#0D41E1] text-[10px] leading-4 font-light">12345678</span>
            <button
              onClick={() => handleCopy("12345678")}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <Copy className="w-4 h-4 text-[#0D41E1]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
