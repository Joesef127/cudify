import { ChevronRight } from "lucide-react";
import { countries } from "../DataArrays";

const BankSelector = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 w-4/8 -mb-10">
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900">
          Open an account with full bank details.
        </h2>
      </div>
      <div className="space-y-1">
        {countries.map((country, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                <span className="text-lg">{country.flag}</span>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">{country.name}</div>
                <div className="text-sm text-gray-500">{country.currency}</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BankSelector;
