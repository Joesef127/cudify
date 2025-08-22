import type { ProcessSectionProps } from "../Types";
import SectionIntro from "./ui/SectionIntro";

const ProcessSection = ({ header, subHeader, steps }: ProcessSectionProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#FAFCFF] w-full">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10 sm:gap-12">
        <SectionIntro header={header} subHeader={subHeader} />

        <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {/* --- First Step (highlight) --- */}
          {steps.length > 0 && (
            <div
              className="
                flex flex-col lg:flex-row 
                justify-between items-center 
                gap-6 lg:gap-10 
                rounded-2xl p-3 sm:p-6 lg:p-8 
                overflow-hidden
              "
              style={{ backgroundColor: steps[0].bgColor }}
            >
              <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#101828] leading-snug">
                  {steps[0].title}
                </h1>
                <p className="font-normal text-base sm:text-lg leading-6 sm:leading-7 max-w-lg mx-auto lg:mx-0">
                  {steps[0].description}
                </p>
              </div>
              <div className="flex justify-center items-center w-full">
                {steps[0].component}
              </div>
            </div>
          )}

          {/* --- Remaining Steps --- */}
          {steps.length > 1 && (
            <div
              className="
                grid 
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 
                gap-6 sm:gap-8 lg:gap-10
              "
            >
              {steps.slice(1).map((step, idx) => (
                <div
                  key={idx}
                  className={`
                    rounded-2xl overflow-hidden 
                    p-6 sm:p-8 lg:pt-10 
                    flex flex-col gap-8 
                    justify-center items-center 
                    text-center lg:text-left
                    ${step.colSpan ? `col-span-${step.colSpan}` : ""}
                  `}
                  style={{ backgroundColor: step.bgColor }}
                >
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#101828] leading-snug">
                      {step.title}
                    </h1>
                    <p className="font-normal text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex justify-center items-center w-full">
                    {step.component}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
