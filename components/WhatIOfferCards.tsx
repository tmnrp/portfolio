import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IWhatIOfferCards
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const WhatIOfferCards = ({ children }: IWhatIOfferCards) => (
  <div
    className={`
      p-2 space-y-2 max-w-xs md:max-w-sm
      bg-stone-100 shadow-md rounded-lg
    `}
  >
    {children}
  </div>
);
