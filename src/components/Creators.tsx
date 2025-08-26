import celebrity_girl from "../assets/images/celebrity_girl.jpg";

const Creator = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center rounded-3xl py-8 px-4 lg:px-10 xl:px-16 lg:py-16 bg-[#FAFCFF]">
      <div
        className="my-auto flex flex-col gap-6 md:gap-8 lg:text-left"
        data-aos="fade-right"
      >
        <div className="relative flex items-center gap-2">
          <h1 className="w-fit text-2xl sm:text-3xl lg:text-4xl leading-snug font-semibold text-[#101828] max-w-[523px] col-span-3">
            Empowering creators across Africa
          </h1>
        </div>
        <p className="font-normal text-base sm:text-lg md:text-xl leading-relaxed max-w-[568px] lg:mx-0">
          As an artist, fave or a celeb your work deserves more than just likes
          and applause – it deserves lasting financial support. "Cudify Me" is
          built for creators like you to collect money without needing an
          account number.
        </p>
      </div>

      <div
        className="h-[530px] w-full rounded-2xl relative flex items-end px-4 md:px-5 pb-6 md:pb-8"
        style={{
          backgroundImage: `url(${celebrity_girl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-left"
      ></div>
    </div>
  );
};

export default Creator;
