import nigeria from "../../assets/icons/nigeria.png";
import uk from "../../assets/icons/uk.png";

const HeroStickyToast = () => {
  return (
    <div className="absolute top-10/12 left-3/11 z-10 flex flex-col gap-2 items-center justify-center bg-white rounded-lg shadow-lg py-4 px-8">
      <div className="flex items-center">
          <img src={uk} alt={uk} className="-mr-5" />
          <img src={nigeria} alt={nigeria} />
      </div>
      <p className="bg-[#E7F8F0] rounded-2xl py-1 px-8 text-[#12B76A] text-sm font-semibold">Successful</p>
      <p className="font-semibold text-xl text-center">₦21,000.00</p>
    </div>
  );
};

export default HeroStickyToast;