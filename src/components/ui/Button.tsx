import React, { type ReactNode, type ButtonHTMLAttributes } from "react";

type ButtonProps = {
  icon?: string;
  className?: string;
  isImage?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  icon,
  className,
  children,
  isImage,
}) => {
  return (
    <button className={className}>
      <span>
        {isImage ? <img src={icon} alt={icon} /> : <span>{icon}</span>}
      </span>
      <span>{children}</span>
    </button>
  );
};

export default Button;
