import group_of_people from "../assets/images/group_of_people.jpg";

const AboutHero = () => {
  return (
    <section className="pt-32 flex justify-center md:pt-44 pb-16 bg-[#FAFCFF] w-full relative overflow-hidden">
      <div className="w-full max-w-[1232px] px-4 relative z-10 flex flex-col items-center text-center gap-12 text-[#101828]">
        {/* Intro text */}
        <div className="flex flex-col gap-3 md:gap-5 max-w-xl text-center">
          <p
            className="text-[#101828] text-lg md:text-xl leading-6 md:leading-7 font-light"
            data-aos="fade-right"
          >
            About us
          </p>
          <h1
            className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-[60px] text-[#101828]"
            data-aos="fade-left"
          >
            Built for Africans. Powered by Trust.
          </h1>
        </div>

        {/* Hero image background block */}
        <div
          className="w-full h-[320px] sm:h-[480px] md:min-h-[720px] py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16 relative flex flex-col items-start justify-center text-white gap-6 sm:gap-8 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${group_of_people})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          data-aos="fade-up"
        ></div>

        {/* Story grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 justify-between items-start gap-6 md:gap-8 text-start pt-12 lg:pt-16">
          <h1
            className="md:col-span-2 text-2xl sm:text-3xl md:text-5xl text-[#101828] font-semibold leading-snug md:leading-[56px]"
            data-aos="fade-right"
          >
            Our Story
          </h1>
          <div className="md:col-span-3 grid gap-4 md:gap-5 text-sm sm:text-base md:text-lg text-[#667085]">
            <p data-aos="fade-up" data-aos-delay="100">
              Cudify was born out of a simple belief: moving money across
              borders shouldn’t be hard, slow, or expensive. We saw everyday
              people, students, workers, parents, entrepreneurs, struggling with
              unreliable payment systems, hidden fees, and long wait times just
              to send money home or pay someone abroad.
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
              So, we built Cudify, a platform designed to make international
              payments as easy as sending a text. No hidden charges. No
              complicated steps. Just fast, secure, transparent transfers
              powered by great rates and built for real people.
            </p>

            <p data-aos="fade-up" data-aos-delay="300">
              We started with a mission to connect communities and businesses
              across continents, especially between the UK and Africa, with
              tools that feel local, simple, and trustworthy. Today, we're proud
              to be changing how money moves globally one user, one transaction,
              one story at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
