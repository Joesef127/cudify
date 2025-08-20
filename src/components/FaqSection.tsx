import HomeFAQ from "./ui/HomeFAQ";

const FaqSection = () => {
  return (
    <section className="py-16 bg-[#FAFCFF] w-full">
      <div className="container mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-10">
        <div className="flex flex-col gap-8 max-w-md">
            <p className="text-xl leading-7 font-normal text-[#2B2F38]">FAQ</p>
            <h1 className="text-[#101828] text-4xl leading-11 font-semibold">Got questions? We’re here with the answers.</h1>
        </div>
        <div className="w-4/8">
          <HomeFAQ />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;