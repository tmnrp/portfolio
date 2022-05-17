import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IWidthWrapperContainer
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const WidthWrapperContainer = ({
  children,
  className = "",
  ...props
}: IWidthWrapperContainer) => (
  <div
    className={`px-5 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl w-full h-full ${className}`}
    {...props}
  >
    {children}
  </div>
);
