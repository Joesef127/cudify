import React, { type ReactNode, type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  icon?: string;
  className?: string;
  isImage?: boolean;
  route?: string;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  icon,
  className,
  children,
  isImage,
  route,
}) => {
  return (
    <Link to={route ? route : "#"} className={className}>
      <span>
        {isImage ? <img src={icon} alt={icon} /> : <span>{icon}</span>}
      </span>
      <span>{children}</span>
    </Link>
  );
};

export default Button;
