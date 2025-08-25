import { useState } from 'react';
import { banks } from '../../DataArrays';

const BankForm = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const [accountName, setAccountName] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBankSelect = (bank: string) => {
    setSelectedBank(bank);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white pb-6 pt-8 px-6 -mb-12 max-w-md lg:mx-auto rounded-t-2xl lg:w-6/9" data-aos="fade-up">
      <div className="space-y-4">
        {/* Select Bank */}
        <div className="space-y-2" data-aos="fade-left" data-aos-delay="100">
          <label className="block text-sm font-medium text-gray-700">
            Select Bank
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className={selectedBank ? 'text-gray-900' : 'text-gray-500'}>
                {selectedBank || 'Select bank option'}
              </span>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {banks.map((bank, index) => (
                  <button
                    key={index}
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    onClick={() => handleBankSelect(bank)}
                  >
                    {bank}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Account Name */}
        <div className="space-y-2" data-aos="fade-right" data-aos-delay="150">
          <label className="block text-sm font-medium text-gray-700">
            Account name
          </label>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter account name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default BankForm;