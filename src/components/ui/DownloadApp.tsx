import Button from "./Button";
import apple_logo from "../../assets/icons/apple_logo.png";
import playstore from "../../assets/icons/playstore.png";

const DownloadApp = () => {
  return (
    <div className="grid grid-cols-2 w-full max-w-[342px] sm:max-w-[472px] justify-center lg:justify-start gap-1.5 sm:gap-3 mt-4">
      {[
        { icon: apple_logo, isImage: true, children: "App Store" },
        { icon: playstore, isImage: true, children: "Google Play" },
      ].map((btn, index) => {
        return (
          <Button
            key={index}
            icon={btn.icon}
            isImage={btn.isImage}
            children={btn.children}
            className="py-2 px-3 sm:py-4 sm:px-7 w-full max-w-[163px] sm:max-w-[256px] bg-white rounded-full flex gap-2 sm:gap-3 text-[#212337] text-xs sm:text-base font-semibold justify-center items-center"
          />
        );
      })}
    </div>
  );
};

export default DownloadApp;
