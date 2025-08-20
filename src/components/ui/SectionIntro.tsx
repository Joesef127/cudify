import type { SectionIntroProps } from "../../Types";

const SectionIntro = ({ header, subHeader }: SectionIntroProps) => {
  return (
    <div className="flex flex-col gap-5 max-w-xl text-center">
      <h1 className="font-semibold text-4xl leading-11 text-[#101828]">
        {header}
      </h1>
      <p className="text-[#48505E] text-xl leading-7 font-normal">
        {subHeader}
      </p>
    </div>
  );
};

export default SectionIntro;
