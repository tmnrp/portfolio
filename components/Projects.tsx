import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { Title } from "./Title";
import TicTacToe from "../assets/tic-tac-toe.jpg";
import Fullstack from "../assets/react-fs1.jpg";
import Hasivu from "../assets/hasivu.jpg";
import ReactUI from "../assets/react-ui.jpg";
import Image from "next/image";
import router, { useRouter } from "next/router";
import Link from "next/link";

export const Projects = () => {
  //
  const router = useRouter();

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
          <fieldset className="border border-solid border-gray-300 p-3">
            <legend className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center text-gray-700"
                iconName="desktop_windows"
              />
              <p className="uppercase tracking-widest">Preview</p>
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
            className={`
              mt-6 grid grid-rows-[auto_1fr] gap-6 md:grid-rows-none md:grid-cols-2
            `}
          >
            {Object.keys(PROJECTS).map((projectName) => (
              <div key={projectName}>
                <Cards
                  projectName={projectName}
                  desc={PROJECTS[projectName].DESC}
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
const Cards = ({
  projectName,
  desc,
  setSelectedProject,
}: {
  projectName: string;
  desc: string;
  setSelectedProject: Dispatch<SetStateAction<string>>;
}) => (
  <div
    className={`
      px-4 py-2 space-y-2
    bg-stone-50 shadow-md rounded-lg
    `}
  >
    <div>
      <div
        className={`
          font-semibold tracking-widest text-gray-800 border-b border-stone-300
          flex justify-between
        `}
      >
        <p>{projectName}</p>
        <div className="flex space-x-2">
          <GoogleMaterialIcons
            className="cursor-pointer hover:scale-105 transition-all duration-100"
            iconName="preview"
            onClick={() => {
              setSelectedProject(projectName);
              router.push("/#projects");
            }}
          />

          <Link href={PROJECTS[projectName].URL}>
            <a target="_blank">
              <GoogleMaterialIcons
                className="cursor-pointer hover:scale-105 transition-all duration-100"
                iconName="open_in_new"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>

    <div className="text-sm flex flex-wrap gap-4">{desc}</div>
  </div>
);

//
const PROJECTS: any = {
  TIC_TAC_TOE: {
    URL: "https://tmnrp-tic-tac-toe.vercel.app/",
    IMG: TicTacToe,
    DESC: "A game of tic tac toe using animations and reset option",
  },
  FULLSTACK: {
    URL: "https://tmnrp-fullstack.vercel.app/app/home",
    IMG: Fullstack,
    DESC: "A full stack application build using Mongo, Express, React && Node",
  },
  REACT_UI: {
    URL: "https://tmnrp-react-ui.vercel.app/",
    IMG: ReactUI,
    DESC: "Userfull react library built with typescript",
  },
  HASIVU: {
    URL: "https://tmnrp-hasivu.vercel.app/",
    IMG: Hasivu,
    DESC: "Restaurant menu",
  },
};
