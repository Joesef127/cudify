import SectionIntro from "./ui/SectionIntro";
import guy_cudify_card from "../assets/images/guy_cudify_card.png";

const VirtualSection = () => {
  return (
    <section className="py-16 bg-[#FAFCFF] w-full">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-12">
        <SectionIntro
          header="How it works"
          subHeader="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div></div>
          <div
            className="h-[660px] w-lg rounded-2xl relative flex items-end justify-self-end px-5 pb-8"
            style={{
              backgroundImage: `url(${guy_cudify_card})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default VirtualSection;
