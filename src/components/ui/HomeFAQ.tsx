// HomeFAQ.tsx
import { useState } from "react";
import { faqData } from "../../DataArrays";

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="sm:p-6 w-full max-w-2xl rounded-lg">
      <div className="space-y-0">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b-[0.5px] border-gray-200 last:border-b-0"
             data-aos='fade-up'
          >
            <button
              className={`w-full ${index === 0 ? "pt-0  " : "pt-10"} pb-5 flex items-center justify-between text-left focus:outline-none`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-gray-900 font-medium text-sm sm:text-base md:text-lg pr-4">
                {item.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-500"
                  >
                    <path
                      d="M18 12H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-500"
                  >
                    <path
                      d="M12 6v12M6 12h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
            </button>

            {openIndex === index && item.answer && (
              <div className="pb-4 pr-2 sm:pr-6">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFAQ;
