import nigeria from "../../assets/icons/nigeria.png";
import uk from "../../assets/icons/uk.png";

const ProcessCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center rounded-t-2xl bg-white w-7/9 p-4">
      <div className="flex items-center">
        <img src={uk} alt={uk} className="-mr-5" />
        <img src={nigeria} alt={nigeria} />
      </div>
      {/* <div className="flex gap-2 5"> */}
        <p className="bg-[#E7F8F0] rounded-2xl py-1 px-8 text-[#12B76A] text-sm font-semibold">
          Successful
        </p>
        <p className="font-semibold text-xl text-center">21,000.00 NGN</p>
      {/* </div> */}

      <p className="text-xs leading-4 text-[#667085] font-normal max-w-6/7">You’ve successfully send 21,000 NGN to Joseph Stephen</p>
    </div>
  );
};

export default ProcessCard;
