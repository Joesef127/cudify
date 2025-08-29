import type { DropdownNavProps } from "../../Types";
import { Link } from "react-router-dom";

const DropdownNav = ({
  icon,
  heading,
  desc,
  route,
  closeMenus,
}: DropdownNavProps) => {
  return (
    <Link
      to={route}
      className="flex items-center justify-start gap-2 xl:gap-4 w-full cursor-pointer hover:bg-[#F2F4F7] transition-colors rounded-2xl col-span-1"
      onClick={closeMenus}
    >
      <div className="p-2.5 lg:p-3.5 rounded-full bg-[#E7ECFC]">
        <img src={icon} alt={icon} className="w-4 h-4" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm leading-5 text-[#101828] font-semibold">
          {heading}
        </h3>
        <p className="text-sm leading-5 text-[#667085] font-normal">{desc}</p>
      </div>
    </Link>
  );
};

export default DropdownNav;
