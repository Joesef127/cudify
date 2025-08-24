// FaqSection.tsx
import HomeFAQ from "./ui/HomeFAQ";

const FaqSection = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FAFCFF] w-full">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-4 lg:gap-12 px-4">
        {/* Left: Title */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-xl mx-auto lg:mx-0" data-aos='fade-right'>
          <p className="text-base md:text-lg lg:text-xl leading-7 font-normal text-[#2B2F38]" data-aos='fade-right'>
            FAQ
          </p>
          <h1 className="text-[#101828] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug font-semibold" data-aos='fade-left'>
            Got questions? We’re here with the answers.
          </h1>
        </div>

        {/* Right: FAQ Accordion */}
        <div className="w-full max-w-2xl mx-auto lg:mx-0" data-aos='fade-left'>
          <HomeFAQ />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
