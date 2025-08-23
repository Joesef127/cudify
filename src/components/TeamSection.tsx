import { teamMembers } from "../DataArrays";
import linkedin from "../assets/icons/linkedin.png";

const TeamSection = () => {
  return (
    <section className="pt-24 md:pt-36 pb-16 w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center gap-10 text-[#101828]">
        <h1
          className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-snug text-[#101828]"
          data-aos="fade-left"
        >
          Meet some of our team members
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl w-full max-w-sm aspect-[3/4] group cursor-pointer flex items-end"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              data-aos="zoom-out-left"
              data-aos-delay={index * 300}
              data-aos-duration="500"
            >
              <div
                className="w-full p-4 flex justify-between items-center bg-white rounded-xl m-4 shadow-md"
                data-aos="fade-up"
              >
                <div className="text-left" data-aos="fade-right" data-aos-delay="100">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#101828] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base opacity-90 font-normal text-[#383E49]">
                    {member.position}
                  </p>
                </div>
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  data-aos="fade-left"
                   data-aos-delay="100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
