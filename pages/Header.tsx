import Link from "next/link";

export const Header = () => {
  return (
    <header className={`flex justify-center bg-stone-900 text-gray-50`}>
      <div className="flex justify-between items-center w-10/12">
        <div className="tracking-widest text-3xl font-semibold uppercase">
          TM
        </div>
        <nav>
          <ul
            className={`
            flex space-x-10 tracking-widest font-semibold
          `}
          >
            <li className="cursor-pointer uppercase">
              <Link href="#intro">Home</Link>
            </li>
            <li className="cursor-pointer uppercase">
              <Link href="#about">About me</Link>
            </li>
            <li className="cursor-pointer uppercase">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="cursor-pointer uppercase">
              <Link href="#resume">Resume</Link>
            </li>
            <li className="cursor-pointer uppercase">
              <Link href="#contact">Contact me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
