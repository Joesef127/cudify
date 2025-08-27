import { teamMembers } from "../DataArrays";
// import linkedin from "../assets/icons/linkedin.png";

const TeamSection = () => {
  return (
    <section className="pt-16 pb-28 w-full flex justify-center relative overflow-hidden bg-[#FAFCFF]">
      <div className="w-full max-w-[414px] sm:max-w-[1200px] px-4 relative z-10 flex flex-col items-center text-center gap-16 text-[#101828]">
        <h1
          className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-snug text-[#101828]"
          data-aos="fade-left"
        >
          Meet some of our team members
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 w-full justify-center items-center place-items-center">
          {teamMembers.map((member, index) => (
            <div
              className={`p-2 sm:p-4 w-full h-[224px] sm:h-[355px] md:h-[425px] bg-white border-[0.4px] border-[#E5E5E5] rounded-2xl cursor-pointer flex flex-col gap-2.5 ${
                index % 2 ? "justify-self-start" : "justify-self-end"
              } sm:justify-self-center items-center`}
            >
              <div
                className="overflow-hidden rounded-lg w-full h-[150px] sm:h-[256px] md:h-[355px]"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                }}
              >
                {/* <img
                  key={index}
                  className="h-full w-full object-cover object-top group flex items-end"
                  src={member.image}
                  data-aos="zoom-out-left"
                  data-aos-delay={index * 300}
                  data-aos-duration="500"
                /> */}
              </div>
              <div
                className="w-full flex justify-between items-center rounded-xl"
                data-aos="fade-up"
              >
                <div
                  className="text-left flex flex-col"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <h3 className="text-sm leading-5 sm:text-xl sm:leading-7 font-semibold text-[#101828] mb-2 sm:mb-4">
                    {member.name}
                  </h3>
                  <p className="text-xs leading-4 sm:text-base sm:leading-6 opacity-90 font-normal text-[#383E49]">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
