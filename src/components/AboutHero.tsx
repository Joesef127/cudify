import triple_ladies from "../assets/images/triple_ladies.png";

const AboutHero = () => {
  return (
    <section className="pt-44 pb-24 bg-[#FAFCFF] w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center gap-12 text-[#101828]">
        <div className="flex flex-col gap-5 max-w-xl text-center">
          <p className="text-[#101828] text-xl leading-7 font-light">
            About us
          </p>
          <h1 className="font-semibold text-5xl leading-15 text-[#101828]">
            Built for Africans. Powered by Trust.
          </h1>
        </div>
        <div
          className={`container mx-auto w-full h-full py-20 px-16 relative flex flex-col items-start justify-center text-white gap-8 min-h-[720px] rounded-2xl overflow-hidden`}
          style={{
            backgroundImage: `url(${triple_ladies})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="grid grid-cols-5 justify-between items-start gap-4">
          <h1 className="col-span-2 justify-self-start text-5xl text-[#101828] font-semibold leading-14">Our Story</h1>
          <div className="col-span-3 grid grid-rows-3 gap-5 text-start text-[#667085]">
            <p>
              Cudify was born out of a simple belief: moving money across
              borders shouldn’t be hard, slow, or expensive. We saw everyday
              people, students, workers, parents, entrepreneurs, struggling with
              unreliable payment systems, hidden fees, and long wait times just
              to send money home or pay someone abroad.
            </p>

            <p>
              So, we built Cudify, a platform designed to make international
              payments as easy as sending a text. No hidden charges. No
              complicated steps. Just fast, secure, transparent transfers
              powered by great rates and built for real people.{" "}
            </p>

            <p>
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
