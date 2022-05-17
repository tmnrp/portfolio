import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IPageTitle
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
}
export const PageTitle = ({ title, className }: IPageTitle) => {
  return (
    <div
      className={`
        page-title
        tracking-widest uppercase font-extrabold text-xl
        ${className}
      `}
    >
      {title}
    </div>
  );
};
