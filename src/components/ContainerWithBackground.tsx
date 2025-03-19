import React, { ReactNode } from "react";

type ContainerProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  bgColor?: boolean;
};

export const ContainerWithBackground = ({
  id,
  className = "",
  bgColor = false,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      id={id}
      className={`rounded-lg px-12 py-20 ${className} ${
        bgColor ? "bg-gray-100 " : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};
