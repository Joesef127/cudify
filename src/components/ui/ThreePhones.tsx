import iphone_straight from "../../assets/images/iPhone_straight.png";
import iphone_left from "../../assets/images/iPhone_left.png";
import iphone_right from "../../assets/images/iPhone_right.png";

const ThreePhones = () => {
  return (
    <div className="flex justify-center items-end mt-12 relative z-10 w-full">
      <img
        src={iphone_left}
        alt="Holding phone"
        className="w-48 sm:w-80 md:w-md absolute -translate-x-14 sm:-translate-x-16"
      />
      <img
        src={iphone_straight}
        alt="Holding phone"
        className="w-36 sm:w-64 z-10"
      />
      <img
        src={iphone_right}
        alt="Holding phone"
        className="w-48 xs: sm:w-80 md:w-md absolute translate-x-14 sm:translate-x-16"
      />
    </div>
  );
};

export default ThreePhones;
