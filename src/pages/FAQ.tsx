import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import CTASection from "../components/CTASection";
import { paymentFAQs, loanFAQs } from "../DataArrays";
import type { FAQCategory } from "../Types";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("payment");
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>(
    {}
  );

  const toggleFAQ = (tab: string, categoryIndex: number, itemIndex: number) => {
    const key = `${tab}-${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: prev[key] === itemIndex ? null : itemIndex,
    }));
  };

  const renderCategory = (
    category: FAQCategory,
    categoryIndex: number,
    tab: string
  ) => (
    <div key={categoryIndex} className="mb-6 sm:mb-8">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900" data-aos="fade-up">
        {category.title}
      </h3>
      <div className="space-y-0" data-aos="fade-up">
        {category.items.map((item, itemIndex) => {
          const key = `${tab}-${categoryIndex}-${itemIndex}`;
          const isOpen = openItems[key] === itemIndex;

          return (
            <div
              key={itemIndex}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className={`w-full ${itemIndex === 0 ? "pt-5" : "pt-10"} pb-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 -mx-2 rounded`}
                onClick={() => toggleFAQ(tab, categoryIndex, itemIndex)}
              >
                <span className="text-gray-900 font-medium text-sm sm:text-base pl-2">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {isOpen ? (
                    <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  ) : (
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  )}
                </div>
              </button>
              {isOpen && item.answer && (
                <div className="pb-3 sm:pb-4">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFCFF] pt-28 sm:pt-36 md:pt-44">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="mb-4 md:mb-8 text-base md:text-lg lg:text-xl leading-7 font-normal text-[#2B2F38]" data-aos='fade-right'>
            FAQ
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2" data-aos="fade-right">
            Frequently asked questions
          </h1>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-md mx-auto mb-6 sm:mb-8" data-aos="fade-left">
          <div className="inline-flex h-9 sm:h-10 items-center justify-center rounded-full bg-gray-100 py-6 text-gray-500 w-full">
            <button
              onClick={() => setActiveTab("payment")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-2.5 text-sm sm:text-base font-medium transition-all w-1/2 ${
                activeTab === "payment"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Cudify payment
            </button>
            <button
              onClick={() => setActiveTab("loan")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm sm:text-base font-medium transition-all w-1/2 ${
                activeTab === "loan"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Cudify for loan
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "payment" && (
          <div className="max-w-3xl mx-auto px-2 sm:px-4">
            {paymentFAQs.map((category, index) =>
              renderCategory(category, index, "payment")
            )}
          </div>
        )}

        {activeTab === "loan" && (
          <div className="max-w-3xl mx-auto px-2 sm:px-4">
            {loanFAQs.map((category, index) =>
              renderCategory(category, index, "loan")
            )}
          </div>
        )}
      </div>
      <CTASection />
    </div>
  );
};

export default FAQ;
