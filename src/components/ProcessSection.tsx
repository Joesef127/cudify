import type { ProcessSectionProps } from "../Types";
import SectionIntro from "./ui/SectionIntro";

const ProcessSection = ({ header, subHeader, steps }: ProcessSectionProps) => {
  return (
    <section className="py-16 bg-[#FAFCFF] w-full">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-12">
        <SectionIntro header={header} subHeader={subHeader} />

        <div className="w-full grid grid-cols-1 gap-5">
          {steps.length > 0 && (
            <div
              className={`flex justify-between items-center gap-10 rounded-2xl py-10 px-16 overflow-hidden`}
              style={{ backgroundColor: steps[0].bgColor }}
            >
              <div className="flex flex-col gap-4">
                <h1 className="w-full text-2xl leading-8 font-semibold text-[#101828]">
                  {steps[0].title}
                </h1>
                <p className="font-normal text-lg leading-7 max-w-lg">
                  {steps[0].description}
                </p>
              </div>
              {steps[0].component}
            </div>
          )}

          {steps.length > 1 && (
            <div className="grid grid-cols-5 gap-6">
              {steps.slice(1).map((step, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl overflow-hidden pt-10 flex flex-col gap-16 justify-between items-center col-span-${step.colSpan ?? 1}`}
                  style={{ backgroundColor: step.bgColor }}
                >
                  <div className="flex flex-col gap-4">
                    <h1 className="w-full text-2xl leading-8 font-semibold text-[#101828]">
                      {step.title}
                    </h1>
                    <p className="font-normal text-lg leading-7 max-w-lg">
                      {step.description}
                    </p>
                  </div>
                  {step.component}
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
