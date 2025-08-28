import { ChevronRight } from "lucide-react";
import { countries } from "../DataArrays";

const BankSelector = () => {
  return (
    <div
      className="bg-white p-6 rounded-lg border border-gray-200 
      w-full max-w-lg -mb-10"
      data-aos="fade-right"
    >
      {/* Heading */}
      <div className="mb-6 text-center sm:text-left">
        <h2
          className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900"
          data-aos="fade-down"
        >
          Open an account with full bank details.
        </h2>
      </div>

      {/* Countries List */}
      <div className="space-y-2">
        {countries.map((country, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-3 sm:p-4 
              hover:bg-gray-50 rounded-lg transition-colors group"
            data-aos="fade-up"
          >
            {/* Flag + Country Info */}
            <div className="flex items-center space-x-3">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden 
                flex items-center justify-center bg-gray-100"
              >
                <span className="text-lg sm:text-xl">{country.flag}</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900 text-sm sm:text-base">
                  {country.name}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {country.currency}
                </div>
              </div>
            </div>

            {/* Chevron Icon */}
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BankSelector;
