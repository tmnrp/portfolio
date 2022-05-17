import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IWidthWrapperContainer
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const WidthWrapperContainer = ({
  children,
  className = "",
  ...props
}: IWidthWrapperContainer) => (
  <div className={`px-5 ${className}`} {...props}>
    {children}
  </div>
);
