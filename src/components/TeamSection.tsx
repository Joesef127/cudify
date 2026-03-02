import { teamMembers } from "../DataArrays";

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div
                className="w-full h-[160px] sm:h-[240px] md:h-[280px]"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                }}
              />

              {/* Info */}
              <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-5 text-left">
                <div>
                  <h3 className="text-sm sm:text-lg font-semibold text-[#101828] leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#3D6EF5] mt-0.5">
                    {member.position}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-[#3D6EF5] rounded-full" />

                {/* Experience */}
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
