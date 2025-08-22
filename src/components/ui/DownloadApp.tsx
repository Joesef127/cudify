import Button from "./Button";
import apple_logo from "../../assets/icons/apple_logo.png";
import playstore from "../../assets/icons/playstore.png";

const DownloadApp = () => {
  return (
    <div className="flex flex-row justify-center lg:justify-start gap-3 mt-4">
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
            className="py-2 px-3 sm:py-4 sm:px-7 bg-white rounded-full flex gap-2 sm:gap-3 text-[#212337] text-xs sm:text-base font-semibold items-center"
          />
        );
      })}
    </div>
  );
};

export default DownloadApp;
