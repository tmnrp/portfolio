import { DetailedHTMLProps, HTMLAttributes } from "react";

//
interface ITitle
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string;
}
export const Title = ({ text, ...props }: ITitle) => (
  <h1 className="mb-4" {...props}>
    <p
      className={`
        uppercase tracking-widest text-xl  font-semibold
      `}
    >
      {text}
    </p>
    <div className="flex items-center mt-1">
      <div className="h-2 w-[60px] bg-stone-900" />
      <div className="h-[1px] w-full bg-stone-300" />
    </div>
  </h1>
);
