import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  IconGithubFilled,
  IconLinkedInFilled,
  IconLocationOutlined,
  IconMailClosedOutlined,
  IconPhoneOutlined,
  IconProfileOutlined,
  IconProjectOutlined,
  IconResumeOutlined,
} from "../components/Icons";
import { About } from "./About";

//
export const App = () => {
  return (
    <div className="flex flex-col h-full text-gray-600">
      <Header />
      <div className="flex flex-col h-full overflow-auto">
        <Main />
        <Footer />
      </div>
    </div>
  );
};

//
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => setPathname(location.pathname), [location.pathname]);

  //
  return (
    <header className="flex items-center justify-between px-5 pb-1 border-b border-gray-200">
      <div className="text-lg font-extrabold tracking-widest text-gray-700 md:text-xl">
        PORTFOLIO
      </div>

      <nav className="flex">
        <div
          className={`tm-nav-item ${pathname === "/" ? "active" : ""}`}
          onClick={() => navigate({ pathname: "/" })}
        >
          <IconProfileOutlined className="tm-nav-item-icon" />
          <div className="tm-nav-item-label">About</div>
        </div>

        <div
          className={`tm-nav-item ${pathname === "/resume" ? "active" : ""}`}
          onClick={() => navigate({ pathname: "/resume" })}
        >
          <IconResumeOutlined className="tm-nav-item-icon" />
          <div className="tm-nav-item-label">Resume</div>
        </div>

        <div
          className={`tm-nav-item ${pathname === "/projects" ? "active" : ""}`}
          onClick={() => navigate({ pathname: "/projects" })}
        >
          <IconProjectOutlined className="tm-nav-item-icon" />
          <div className="tm-nav-item-label">Profile</div>
        </div>
      </nav>
    </header>
  );
};

//
const Main = () => {
  return (
    <main className="flex justify-center flex-1 bg-gray-100">
      <div className="h-full max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<div>Resume</div>} />
          <Route path="/projects" element={<div>Projects</div>} />
        </Routes>
      </div>
    </main>
  );
};

//
const Footer = () => {
  return (
    <footer className="flex justify-between px-5 py-2 space-y-1 text-sm tracking-widest border-t md:text-base border-gray-20">
      <div className="space-y-1">
        <div className="flex space-x-2 cursor-pointer hover:font-semibold hover:text-gray-700">
          <IconMailClosedOutlined className="w-5 h-5 md:w-6 md:h-6" />
          <div onClick={() => window.open("mailto:harsh.harish1@gmail.com")}>
            harsh.harish1@gmail.com
          </div>
        </div>

        <div className="flex space-x-2 cursor-pointer hover:font-semibold hover:text-gray-700">
          <IconPhoneOutlined className="w-5 h-5 md:w-6 md:h-6" />
          <div onClick={() => window.open("tel:+917208463103")}>
            +91-7208463103
          </div>
        </div>

        <div className="flex space-x-2 cursor-pointer hover:font-semibold hover:text-gray-700">
          <IconLocationOutlined className="w-5 h-5 md:w-6 md:h-6" />
          <div
            onClick={() =>
              window.open("https://goo.gl/maps/yxYCV2Pt45uzAVUs5", "_blank")
            }
          >
            Dombivli
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-around">
        <IconLinkedInFilled
          className="w-5 h-5 text-gray-500 cursor-pointer fill-current md:w-6 md:h-6 hover:text-gray-800"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/harsh-parammal-0a831a50/",
              "_blank"
            )
          }
        />
        <IconGithubFilled
          className="w-5 h-5 text-gray-500 cursor-pointer fill-current md:w-6 md:h-6 hover:text-gray-800"
          onClick={() => window.open("https://github.com/tmnrp", "_blank")}
        />
      </div>
    </footer>
  );
};
