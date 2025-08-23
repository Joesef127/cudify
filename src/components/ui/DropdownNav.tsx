import type { DropdownNavProps } from "../../Types";
import { Link } from "react-router-dom";


const DropdownNav = ({ icon, heading, desc, route }: DropdownNavProps) => {
  return (
    <Link to={route} className="flex items-center justify-start gap-2 xl:gap-4 w-full cursor-pointer hover:bg-[#F2F4F7] transition-colors rounded-2xl py-3 px-2 lg:px-5 col-span-1">
      <div className="p-2.5 lg:p-3.5 rounded-full bg-[#E7ECFC]">
        <img src={icon} alt={icon} className="w-4 h-4" />
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