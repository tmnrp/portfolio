import { Routes, Route } from "react-router-dom";
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
    <div className="h-full flex flex-col text-gray-600">
      <Header />
      <div className="h-full flex flex-col overflow-auto">
        <Main />
        <Footer />
      </div>
    </div>
  );
};

//
const Header = () => {
  return (
    <header className="h-12 border-b border-gray-200 px-5 py-2 flex items-center justify-between">
      <div className="tracking-widest font-extrabold text-gray-700">
        PORTFOLIO
      </div>
      <nav className="flex space-x-4 ">
        <IconProfileOutlined />
        <IconResumeOutlined />
        <IconProjectOutlined />
      </nav>
    </header>
  );
};

//
const Main = () => {
  return (
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<div>Resume</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
      </Routes>
    </main>
  );
};

//
const Footer = () => {
  return (
    <footer className="flex justify-between space-y-1 text-sm tracking-widest px-5 py-2 border-t border-gray-20">
      <div>
        <div className="flex space-x-2">
          <IconMailClosedOutlined className="h-5 w-5" />
          <div onClick={() => window.open("mailto:harsh.harish1@gmail.com")}>
            harsh.harish1@gmail.com
          </div>
        </div>

        <div className="flex space-x-2">
          <IconPhoneOutlined className="h-5 w-5" />
          <div onClick={() => window.open("tel:+917208463103")}>
            +91-7208463103
          </div>
        </div>

        <div className="flex space-x-2">
          <IconLocationOutlined className="h-5 w-5" />
          <div
            onClick={() =>
              window.open("https://goo.gl/maps/yxYCV2Pt45uzAVUs5", "_blank")
            }
          >
            Dombivli
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-evenly">
        <IconLinkedInFilled
          className="text-gray-500 cursor-pointer fill-current hover:text-gray-400"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/harsh-parammal-0a831a50/",
              "_blank"
            )
          }
        />
        <IconGithubFilled
          className="text-gray-500 cursor-pointer fill-current hover:text-gray-400"
          onClick={() => window.open("https://github.com/tmnrp", "_blank")}
        />
      </div>
    </footer>
  );
};
