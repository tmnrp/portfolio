import { useCallback, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  IconBulbFilled,
  IconGithubFilled,
  IconLinkedInFilled,
  IconLocationOutlined,
  IconMailClosedOutlined,
  IconPhoneOutlined,
  IconProfileOutlined,
  IconProjectOutlined,
  IconResumeOutlined,
} from "../components/Icons";
import { ENUM_THEME } from "../utils/enums";
import { About } from "./About";

//
export const App = () => {
  const [, setTheme] = useState<ENUM_THEME>(ENUM_THEME.light);
  const toggleTheme = useCallback(() => {
    setTheme((theme) => {
      const el = document.getElementById("root");
      theme === ENUM_THEME.light && el?.classList.add("dark");
      theme === ENUM_THEME.dark && el?.classList.remove("dark");

      //
      return theme === ENUM_THEME.light ? ENUM_THEME.dark : ENUM_THEME.light;
    });
  }, []);

  //
  return (
    <div
      className="flex flex-col h-full text-gray-600 dark:text-gray-300 dark:bg-black"
      style={{ minWidth: 300 }}
    >
      <Header toggleTheme={toggleTheme} />
      <div className="flex flex-col h-full overflow-auto">
        <Main />
        <Footer />
      </div>
    </div>
  );
};

//
const Header = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => setPathname(location.pathname), [location.pathname]);

  //
  return (
    <header className="flex items-center justify-between pl-5 border-b border-gray-200 dark:border-gray-700">
      <div className="text-lg font-extrabold tracking-widest text-gray-700 dark:text-gray-200 md:text-xl">
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

        <div
          className="flex items-center px-1 cursor-pointer"
          onClick={toggleTheme}
        >
          <IconBulbFilled className={`h-5 w-5`} />
        </div>
      </nav>
    </header>
  );
};

//
const Main = () => {
  return (
    <main className="flex justify-center flex-1 bg-gray-100 dark:bg-black">
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
    <footer className="flex justify-between px-5 py-2 space-y-1 text-sm tracking-widest border-t border-gray-200 dark:border-gray-700 md:text-base">
      <div className="space-y-1">
        <div className="flex space-x-2 cursor-pointer hover:font-semibold hover:text-gray-700 dark:hover:text-white">
          <IconMailClosedOutlined className="w-5 h-5 md:w-6 md:h-6" />
          <div onClick={() => window.open("mailto:harsh.harish1@gmail.com")}>
            harsh.harish1@gmail.com
          </div>
        </div>

        <div className="flex space-x-2 cursor-pointer hover:font-semibold hover:text-gray-700 dark:hover:text-white">
          <IconPhoneOutlined className="w-5 h-5 md:w-6 md:h-6" />
          <div onClick={() => window.open("tel:+917208463103")}>
            +91-7208463103
          </div>
        </div>

        <div className="flex space-x-2 cursor-pointer hover:font-semibold hover:text-gray-700 dark:hover:text-white">
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
          className="w-5 h-5 cursor-pointer fill-current md:w-6 md:h-6 hover:text-gray-800 dark:hover:text-white"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/harsh-parammal-0a831a50/",
              "_blank"
            )
          }
        />
        <IconGithubFilled
          className="w-5 h-5 cursor-pointer fill-current md:w-6 md:h-6 hover:text-gray-800 dark:hover:text-white"
          onClick={() => window.open("https://github.com/tmnrp", "_blank")}
        />
      </div>
    </footer>
  );
};
