const CommunitySection = () => {
  // WhatsApp icon component
  const WhatsAppIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 0C10.745 0 0 10.745 0 24c0 4.243 1.103 8.226 3.026 11.686L.053 46.73a1.5 1.5 0 001.917 1.917l11.044-2.973A23.864 23.864 0 0024 48c13.255 0 24-10.745 24-24S37.255 0 24 0z"
        fill="#25D366"
      />
      <path
        d="M34.759 32.582c-.578 1.629-2.864 2.981-4.683 3.373-1.241.266-2.86.48-8.31-1.783-6.993-2.903-11.507-10.026-11.86-10.487-.34-.461-2.793-3.718-2.793-7.092 0-3.373 1.768-5.034 2.394-5.721.627-.687 1.367-.859 1.824-.859.457 0 .914.005 1.315.024.422.02.988-.16 1.545 1.178.578 1.384 1.976 4.817 2.148 5.169.172.351.287.762.058 1.223-.23.461-.344.75-.687 1.154-.344.405-.723.905-1.033 1.215-.343.344-.7.714-.3 1.401.4.687 1.779 2.933 3.817 4.753 2.622 2.343 4.834 3.073 5.52 3.425.686.351 1.088.294 1.489-.172.4-.469 1.72-2.007 2.178-2.694.458-.687.915-.573 1.545-.344.63.23 4.004 1.887 4.69 2.232.686.344 1.144.516 1.315.802.172.286.172 1.652-.405 3.281z"
        fill="#fff"
      />
    </svg>
  );

  return (
    <section className="pb-16 px-3 md:px-5 w-full flex justify-center items-center bg-[#FAFCFF]">
      <div className="max-w-[1200px] w-full relative z-10 flex flex-col items-center text-center gap-8 md:gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-2xl px-4">
          <h1
            className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-snug text-[#101828]"
            data-aos="fade-left"
          >
            Join Our Community
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal text-[#667085]"
            data-aos="fade-right"
          >
            Connect with lots of Cudify users, get exclusive updates, and share
            experiences.
          </p>
        </div>

        {/* Community Card */}
        <div
          className="w-full max-w-3xl bg-gradient-to-br from-[#0D41E1] to-[#0A34B8] rounded-2xl p-8 md:p-12 flex flex-col items-center gap-8 relative overflow-hidden"
          data-aos="zoom-in"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 text-white">
            {/* <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <WhatsAppIcon className="w-12 h-12 md:w-16 md:h-16" />
            </div> */}

            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                WhatsApp Community
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-lg">
                Get instant support, share tips, and stay updated with the
                latest features. Join now and be part of something special!
              </p>
            </div>

            {/* Join Button */}
            <a
              href="https://chat.whatsapp.com/JFLaidMYTo1CprgntjHEAn?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0D41E1] hover:bg-transparent hover:text-white border sm:border-2 transition-colors duration-300 px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg flex items-center gap-3 mt-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Join Community
            </a>
          </div>
        </div>

        {/* Benefits Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full mt-4" data-aos="fade-up" data-aos-delay="300">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-12 h-12 bg-[#0D41E1]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold text-base md:text-lg text-[#101828]">
              Instant Support
            </h3>
            <p className="text-sm text-[#667085]">
              Get quick answers from our team and fellow users
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-12 h-12 bg-[#0D41E1]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="font-semibold text-base md:text-lg text-[#101828]">
              Exclusive Updates
            </h3>
            <p className="text-sm text-[#667085]">
              Be the first to know about new features and offers
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-12 h-12 bg-[#0D41E1]/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-semibold text-base md:text-lg text-[#101828]">
              Connect & Share
            </h3>
            <p className="text-sm text-[#667085]">
              Share experiences and tips with fellow Cudify users
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CommunitySection;
