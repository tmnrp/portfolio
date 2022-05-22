import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 px-4 pt-6 pb-12">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
        <ul className="space-y-1">
          <li>
            <h4 className="uppercase">
              <Link href="#home">home</Link>
            </h4>
          </li>
        </ul>

        <ul className="space-y-1">
          <li>
            <h4 className="uppercase">
              <Link href="#about">About</Link>
            </h4>
          </li>
          <li className="text-sm">
            <Link href="#social-links">Social links</Link>
          </li>
          <li className="text-sm">
            <Link href="#my-offers">My offers</Link>
          </li>
        </ul>

        <ul className="space-y-1">
          <li>
            <h4 className="uppercase">
              <Link href="#resume">resume</Link>
            </h4>
          </li>
          <li className="text-sm">
            <Link href="#education">Education</Link>
          </li>
          <li className="text-sm">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="text-sm">
            <Link href="#tech-stack">Tech stack</Link>
          </li>
        </ul>

        <ul className="space-y-1">
          <li>
            <h4 className="uppercase">
              <Link href="#projects">projects</Link>
            </h4>
          </li>
          <li className="text-sm">
            <Link href="#preview">Preview</Link>
          </li>
          <li className="text-sm">
            <Link href="#project-cards">Project cards</Link>
          </li>
        </ul>

        <ul className="space-y-1">
          <li>
            <h4 className="uppercase">
              <Link href="#contactme">contact me</Link>
            </h4>
          </li>
        </ul>
      </div>

      <ScrollToTop />
    </footer>
  );
};

//
const ScrollToTop = () => (
  <div className="absolute right-5 -top-12">
    <Link href="#home">
      <GoogleMaterialIcons
        className={`
        p-1 m-2 rounded-full cursor-pointer
        border border-gray-500
        hover:text-gray-300 hover:border-gray-300
      `}
        iconName="arrow_upward"
      />
    </Link>
  </div>
);
