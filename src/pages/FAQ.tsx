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
    <div key={categoryIndex} className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {category.title}
      </h3>
      <div className="space-y-0">
        {category.items.map((item, itemIndex) => {
          const key = `${tab}-${categoryIndex}-${itemIndex}`;
          const isOpen = openItems[key] === itemIndex;

          return (
            <div
              key={itemIndex}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 px-2 -mx-2 rounded"
                onClick={() => toggleFAQ(tab, categoryIndex, itemIndex)}
              >
                <span className="text-gray-900 font-medium text-sm pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {isOpen ? (
                    <Minus className="h-5 w-5 text-blue-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-500" />
                  )}
                </div>
              </button>
              {isOpen && item.answer && (
                <div className="pb-4 px-2">
                  <p className="text-gray-600 text-sm leading-relaxed">
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
    <div className="min-h-screen bg-[#FAFCFF] pt-44">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Frequently asked questions
          </h1>
        </div>

        {/* Custom Tabs */}
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="inline-flex h-10 items-center justify-center rounded-full bg-gray-100 p-1 text-gray-500 w-full">
            <button
              onClick={() => setActiveTab("payment")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full ${
                activeTab === "payment"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Cudify payment
            </button>
            <button
              onClick={() => setActiveTab("loan")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full ${
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
          <div className="max-w-3xl mx-auto">
            {paymentFAQs.map((category, index) =>
              renderCategory(category, index, "payment")
            )}
          </div>
        )}

        {activeTab === "loan" && (
          <div className="max-w-3xl mx-auto">
            {loanFAQs.map((category, index) =>
              renderCategory(category, index, "loan")
            )}
          </div>
        )}

        <CTASection />
      </div>
    </div>
  );
};

export default FAQ;
