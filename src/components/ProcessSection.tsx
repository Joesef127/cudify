import type { ProcessSectionProps } from "../Types";
import SectionIntro from "./ui/SectionIntro";

const ProcessSection = ({ header, subHeader, steps }: ProcessSectionProps) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAFCFF] w-full flex justify-center items-center">
      <div className="w-full max-w-[1200px] px-4 md:px-0 flex flex-col justify-center items-center gap-10 overflow-hidden">
        <SectionIntro header={header} subHeader={subHeader} />

        <div className="w-full flex flex-col gap-6 justify-center items-center">
          {steps.length > 0 && (
            <div
              className="w-full overflow-hidden
                flex flex-col lg:flex-row 
                justify-between items-center 
                gap-6 lg:gap-10 
                rounded-2xl px-4 pt-10 sm:px-6 lg:px-8 
              "
              style={{ backgroundColor: steps[0].bgColor }}
            >
              <div className="flex flex-col w-full gap-3 sm:gap-4">
                <h1
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#101828] leading-snug"
                  data-aos="fade-left"
                >
                  {steps[0].title}
                </h1>
                <p
                  className="font-normal text-base text-[#48505E] sm:text-lg leading-6 sm:leading-7 max-w-lg mx-auto lg:mx-0"
                  data-aos="fade-right"
                >
                  {steps[0].description}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end items-center w-full">
                {steps[0].component}
              </div>
            </div>
          )}

          {steps.length > 1 && (
            <div
              className="
               flex flex-wrap md:flex-nowrap justify-center items-start w-full
                gap-6
              "
            >
              {steps.slice(1).map((step, idx) => (
                <div
                  key={idx}
                  className={`w-full h-[408px]
                    rounded-2xl overflow-hidden 
                    p-6 sm:p-8 lg:pt-10 
                    flex flex-col gap-7 justify-between
                    ${step.colSpan ? `col-span-${step.colSpan}` : ""}
                  `}
                  style={{ backgroundColor: step.bgColor }}
                >
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h1
                      className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#101828] leading-snug"
                      data-aos="fade-left"
                    >
                      {step.title}
                    </h1>
                    <p
                      className="font-normal text-lg text-[#48505E] leading-6 sm:leading-7 max-w-md"
                      data-aos="fade-right"
                    >
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
