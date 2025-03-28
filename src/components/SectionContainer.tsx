import React, { ReactNode } from "react";
import clsx from "clsx";
import { sectionContainerClasses } from "styles/constants";

type ContainerProps = {
  id?: string;
  className?: string;
  containerClasses?: string;
  children?: ReactNode;
  bgGray?: boolean;
};

export const SectionContainer = ({
  id,
  className = "",
  containerClasses = sectionContainerClasses,
  bgGray = false,
  children,
  ...props
}: ContainerProps) => {
  return (
    <section
      id={id}
      aria-label={id ? `${id}-heading` : undefined}
      className={clsx("py-24 sm:py-32", containerClasses)}
      {...props}
    >
      <div
        className={clsx(
          "px-12 py-20",
          className,
          bgGray && "rounded-lg bg-gray-100"
        )}
      >
        {children}
      </div>
    </section>
  );
};
