import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ICardExperience
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  subtitle: string;
  bullets: Array<string>;
}
export const CardResume = ({ title, subtitle, bullets }: ICardExperience) => {
  return (
    <div
      className={`
        px-4 py-2 space-y-2
      bg-white shadow-md rounded-lg
      `}
    >
      <div>
        <h3 className="font-semibold tracking-widest text-gray-800">{title}</h3>
        <div className="text-sm tracking-widest text-gray-800 border-b border-stone-300">
          <p>{subtitle}</p>
          <p className="text-xs">{`July 2016 - March 2018 · 1y 1m`}</p>
        </div>
      </div>
      <div className="text-sm space-y-1">
        <ul className="list-disc list-inside">
          {bullets.map((bullet, i) => (
            <li key={i}>
              <p>{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
