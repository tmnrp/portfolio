export const Progressbar = ({ widthCLS, icon, label }: IProgressbar) => {
  return (
    <div className="flex items-center text-gray-900 bg-gray-300 rounded-full dark:bg-gray-900">
      <div
        className={`
            inline-flex items-center p-2 pl-8 font-bold rounded-full bg-gradient-to-r 
            from-green-50 to-green-400 space-x-4 tracking-widest text-sm ${widthCLS}
        `}
        style={{ height: 25 }}
      >
        <div>{icon}</div>
        <div>{label}</div>
      </div>
    </div>
  );
};

interface IProgressbar extends React.HTMLAttributes<HTMLElement> {
  widthCLS: string;
  icon: React.ReactNode;
  label: React.ReactNode;
}
