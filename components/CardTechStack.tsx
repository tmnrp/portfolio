import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ICardTechStack
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const CardTechStack = ({ children }: ICardTechStack) => (
  <div className={`flex flex-wrap gap-4 bg-white shadow-lg rounded-xl p-3`}>
    {children}
  </div>
);
