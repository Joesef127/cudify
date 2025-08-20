import type { DropdownNavProps } from "../../Types";
import { Link } from "react-router-dom";


const DropdownNav = ({ icon, heading, desc, route }: DropdownNavProps) => {
  return (
    <Link to={route} className="flex items-center justify-start gap-4 w-max cursor-pointer hover:bg-[#F2F4F7] transition-colors rounded-2xl py-3 px-5 col-span-1">
      <div className="p-3.5 rounded-full bg-[#E7ECFC]">
        <img src={icon} alt={icon} />
      </div>
      <div>
        <h3 className="text-sm leading-5 text-[#101828] font-semibold">
          {heading}
        </h3>
        <p className="text-sm leading-5 text-[#667085] font-normal">{desc}</p>
      </div>
    </Link>
  );
};

export default DropdownNav;