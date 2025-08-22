import { useState } from "react";
import { features } from "../DataArrays";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GetPaidSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev: number) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev: number) => (prev - 1 + features.length) % features.length
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="
          font-semibold 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          leading-snug sm:leading-[42px] md:leading-[48px] lg:leading-[56px]
          text-[#101828] mb-2.5
        "
          >
            Get Paid for Anything, Anytime
          </h2>
          <p
            className="
          text-[#48505E] 
          text-sm sm:text-base md:text-lg 
          leading-auto 
          font-normal
        "
          >
            Wherever the money is coming from and whatever it's for, you'll get
            it quickly and securely — straight to your wallet or bank.
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl h-[512px] group cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${feature.image})`,
                backgroundSize: "cover",
                backgroundPosition: feature.bgPosition,
              }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                <h3 className="text-xl lg:text-2xl leading-slug font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base opacity-90 leading-auto font-normal text-[#F0F1F3]">
                  {feature.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative h-[476px]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${feature.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 p-2 sm:p-4 flex flex-col justify-end text-white">
                    <h3 className="text-xl leading-auto font-bold mb-3">{feature.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white border-none text-gray-800 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white border-none text-gray-800 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-gray-800" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetPaidSection;
