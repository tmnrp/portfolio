import React from "react";

interface IContainer
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
export const Container = ({
  children,
  className = "",
  ...props
}: IContainer) => {
  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};
