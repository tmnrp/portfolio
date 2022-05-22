import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { useState } from "react";
import { Title } from "./Title";
import TicTacToe from "../assets/tic-tac-toe.jpg";
import Fullstack from "../assets/react-fs1.jpg";
import Hasivu from "../assets/hasivu.jpg";
import ReactUI from "../assets/react-ui.jpg";
import Image from "next/image";
import { CardProject } from "./CardProject";

export const Projects = () => {
  //
  const [selectedProject, setSelectedProject] = useState<string>("TIC_TAC_TOE");

  //
  return (
    <div
      id="projects"
      className={`
      bg-white
      `}
    >
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <Title text="Projects" />

        <div>
          <fieldset
            id="preview"
            className="border border-solid border-gray-300 p-3"
          >
            <legend className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center text-gray-700"
                iconName="desktop_windows"
              />
              <h2 className="uppercase tracking-widest">Preview</h2>
            </legend>

            <div className="relative h-96">
              <Image
                src={PROJECTS[selectedProject].IMG}
                alt="preview image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </fieldset>

          <div
            id="project-cards"
            className={`
              mt-6 grid grid-rows-[auto_1fr] gap-6 md:grid-rows-none md:grid-cols-2
            `}
          >
            {Object.keys(PROJECTS).map((projectName) => (
              <div key={projectName}>
                <CardProject
                  projectName={projectName}
                  label={PROJECTS[projectName].LABEL}
                  desc={PROJECTS[projectName].DESC}
                  url={PROJECTS[projectName].URL}
                  setSelectedProject={setSelectedProject}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//
const PROJECTS: any = {
  TIC_TAC_TOE: {
    LABEL: "Tic Tac Toe",
    URL: "https://tmnrp-tic-tac-toe.vercel.app/",
    IMG: TicTacToe,
    DESC: "A game of tic tac toe using animations and reset option",
  },
  FULLSTACK: {
    LABEL: "M.E.R.N. template",
    URL: "https://tmnrp-fullstack.vercel.app/app/home",
    IMG: Fullstack,
    DESC: "A full stack application build using Mongo, Express, React && Node",
  },
  REACT_UI: {
    LABEL: "React UI components library",
    URL: "https://tmnrp-react-ui.vercel.app/",
    IMG: ReactUI,
    DESC: "Userfull react library built with typescript",
  },
  HASIVU: {
    LABEL: "Hasivu",
    URL: "https://tmnrp-hasivu.vercel.app/",
    IMG: Hasivu,
    DESC: "Restaurant menu",
  },
};
