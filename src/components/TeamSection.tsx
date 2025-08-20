import { teamMembers } from "../DataArrays";
import linkedin from "../assets/icons/linkedin.png"

const TeamSection = () => {
  return (
    <section className="pt-44 pb-24 w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center gap-12 text-[#101828]">
        <h1 className="font-semibold text-5xl leading-15 text-[#101828] text-center">
          Meet some of our team members
        </h1>
        <div className="md:grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl w-96 h-[512px] group cursor-pointer p-4 place-content-end"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full p-4 flex justify-between item-center bg-white rounded-2xl bottom-4">
                <div className=" place-items-start">
                  <h3 className="text-2xl leading-8 font-semibold text-[#101828] mb-3">
                    {member.name}
                  </h3>
                  <p className="text-base opacity-90 leading-6 font-normal text-[#383E49]">
                    {member.position}
                  </p>
                </div>
                <img src={linkedin} alt={linkedin} className="w-fit h-fit self-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
