import nigeria from "../../assets/icons/nigeria.png";
import uk from "../../assets/icons/uk.png";

const HeroStickyToast = () => {
  return (
    <div
      className="absolute top-5/7 left-2/10 -translate-x-1/2 sm:translate-x-0 sm:-left-1/9 z-10 flex flex-col gap-2 items-center justify-center bg-white rounded-lg shadow-lg py-1 sm:py-2 px-3 sm:px-5 scale-90 sm:scale-100"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="flex items-center">
        <img src={uk} alt="UK flag" className="-mr-3 sm:-mr-5 w-6 sm:w-8" />
        <img src={nigeria} alt="Nigeria flag" className="w-6 sm:w-8" />
      </div>
      <p className="bg-[#E7F8F0] rounded-2xl py-1 px-6 sm:px-8 text-[#12B76A] text-[6px] sm:text-[10px] font-semibold">
        Successful
      </p>
      <p className="font-semibold text-[#101828] text-[8px] sm:text-sm text-center">
        ₦21,000.00
      </p>
    </div>
  );
};

export default HeroStickyToast;
