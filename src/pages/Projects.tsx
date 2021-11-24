import { motion } from "framer-motion";
import React, { useState } from "react";
import { IconExternalLinkFilled, IconNextjsOutline } from "../components/Icons";
import {
  VStaggerContainer,
  VStaggerItemsFromRight,
} from "../utils/framerMotions";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(
    PROJECTS["tmnrp-portfolio"]
  );

  //
  return (
    <motion.section
      className="my-1 bg-white border rounded-lg dark:bg-black md:my-3 dark:border-gray-700"
      {...VStaggerItemsFromRight}
    >
      <motion.div
        key={selectedProject.projectName}
        className="p-4 border-b border-gray-200 dark:border-gray-700"
        {...VStaggerItemsFromRight}
      >
        <ProjectDetails
          projectName={selectedProject.projectName}
          domainName={selectedProject.domainName}
          domainURL={selectedProject.domainURL}
          repositoryName={selectedProject.repositoryName}
          repositoryURL={selectedProject.repositoryURL}
          image={selectedProject.image}
        />
      </motion.div>

      <ProjectCards setSelectedProject={setSelectedProject} />
    </motion.section>
  );
};

const ProjectDetails = ({
  image,
  projectName,
  domainName,
  domainURL,
  repositoryName,
  repositoryURL,
}: {
  image: React.ReactNode;
  projectName: string;
  domainName: string;
  domainURL: string;
  repositoryName: string;
  repositoryURL: string;
}) => (
  <div className="p-5 tm-container">
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
      <div className="pb-2 mb-2 border-b border-gray-200 dark:border-gray-700 lg:col-span-2">
        {image}
      </div>
      <div>
        <div className="grid grid-cols-1 gap-2 tracking-wider">
          <div>
            <div className="font-semibold">Project name: </div>
            <div className="italic">{projectName}</div>
          </div>

          <div>
            <div className="font-semibold">Domain URL: </div>
            <div>
              <div className="flex items-end space-x-2">
                <div className="italic">{domainName}</div>
                <IconExternalLinkFilled
                  className="w-5 h-5 cursor-pointer hover:text-white"
                  onClick={() => window.open(domainURL, "_blank")}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold">Repository URL: </div>
            <div>
              <div className="flex items-end space-x-2">
                <div className="italic">{repositoryName}</div>
                <IconExternalLinkFilled
                  className="w-5 h-5 cursor-pointer hover:text-white"
                  onClick={() => window.open(repositoryURL, "_blank")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

//
const ProjectCard = ({
  image,
  projectName,
  domainName,
  setSelectedProject,
}: {
  image: React.ReactNode;
  projectName: string;
  domainName: string;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<{
      projectName: string;
      domainName: string;
      domainURL: string;
      repositoryName: string;
      repositoryURL: string;
      image: JSX.Element;
    }>
  >;
}) => (
  <motion.div className="p-2 tm-container" variants={VStaggerItemsFromRight}>
    <div className="flex pb-2 mb-2 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">{image}</div>

      <div className="flex justify-between w-full px-2">
        <div>
          <div>{projectName}</div>
          <div>{domainName}</div>
        </div>

        <div className="flex items-center">
          <div
            className="px-2 py-1 border border-gray-200 rounded cursor-pointer dark:border-gray-700 dark:hover:bg-gray-900"
            onClick={() => {
              setSelectedProject(PROJECTS[projectName]);
              document
                .getElementsByClassName("main-scroll")[0]
                .scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Details
          </div>
        </div>
      </div>
    </div>

    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo
      placeat itaque, a fugiat facilis eligendi aliquam veniam quod
      necessitatibus.
    </div>
  </motion.div>
);

const ProjectCards = ({
  setSelectedProject,
}: {
  setSelectedProject: React.Dispatch<
    React.SetStateAction<{
      projectName: string;
      domainName: string;
      domainURL: string;
      repositoryName: string;
      repositoryURL: string;
      image: JSX.Element;
    }>
  >;
}) => (
  <motion.div
    className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2"
    variants={VStaggerContainer}
    initial="initial"
    animate="animate"
  >
    {/*  */}
    <ProjectCard
      setSelectedProject={setSelectedProject}
      projectName="tmnrp-portfolio"
      domainName="tmnrp-portfolio.vercel.app"
      image={
        <img
          className="pr-2 border-r border-gray-200 dark:border-gray-700"
          alt="Create React App Logo"
          title="Create React App Logo"
          src="/react-favicon.ico"
          height={56}
          width={56}
        />
      }
    />

    {/*  */}
    <ProjectCard
      setSelectedProject={setSelectedProject}
      projectName="tmnrp-portfolio-1"
      domainName="tmnrp-portfolio-1.vercel.app"
      image={
        <div className="flex items-center">
          <IconNextjsOutline className="w-12 h-12 pr-2 mr-2 border-r border-gray-200 dark:border-gray-700" />
        </div>
      }
    />

    {/*  */}
    <ProjectCard
      setSelectedProject={setSelectedProject}
      projectName="tmnrp-hasivu"
      domainName="tmnrp-hasivu.vercel.app"
      image={
        <img
          className="pr-2 mr-2 border-r border-gray-200 dark:border-gray-700"
          alt="Create React App Logo"
          title="Create React App Logo"
          src="/hasivu-favicon.png"
          height={56}
          width={56}
        />
      }
    />

    {/*  */}
    <ProjectCard
      setSelectedProject={setSelectedProject}
      projectName="tmnrp-hasivu-1"
      domainName="tmnrp-hasivu-1.vercel.app"
      image={
        <img
          className="pr-2 mr-2 border-r border-gray-200 dark:border-gray-700"
          alt="Create React App Logo"
          title="Create React App Logo"
          src="/react-favicon.ico"
          height={56}
          width={56}
        />
      }
    />

    {/*  */}
    <ProjectCard
      setSelectedProject={setSelectedProject}
      projectName="tmnrp-tic-tac-toe"
      domainName="tmnrp-tic-tac-toe.vercel.app"
      image={
        <div className="flex items-center">
          <IconNextjsOutline className="w-12 h-12 pr-2 mr-2 border-r border-gray-200 dark:border-gray-700" />
        </div>
      }
    />
  </motion.div>
);

//
interface IProject {
  [projectName: string]: any;
}
const PROJECTS: IProject = {
  "tmnrp-portfolio": {
    projectName: "tmnrp-portfolio",
    domainName: "tmnrp-portfolio.vercel.app",
    domainURL: "https://tmnrp-portfolio.vercel.app/",
    repositoryName: "portfolio",
    repositoryURL: "https://github.com/tmnrp/portfolio",
    image: (
      <img
        className="pr-2 mr-2"
        alt="Create React App Logo"
        title="Create React App Logo"
        src="/thumbnail-portfolio.png"
      />
    ),
  },
  "tmnrp-portfolio-1": {
    projectName: "tmnrp-portfolio-1",
    domainName: "tmnrp-portfolio-1.vercel.app",
    domainURL: "https://tmnrp-portfolio-1.vercel.app/",
    repositoryName: "portfolio-1",
    repositoryURL: "https://github.com/tmnrp/portfolio-1",
    image: (
      <img
        className="pr-2 mr-2"
        alt="Create React App Logo"
        title="Create React App Logo"
        src="/thumbnail-portfolio-1.png"
      />
    ),
  },
  "tmnrp-hasivu": {
    projectName: "tmnrp-hasivu",
    domainName: "tmnrp-hasivu.vercel.app",
    domainURL: "https://tmnrp-hasivu.vercel.app/",
    repositoryName: "hasivu",
    repositoryURL: "https://github.com/tmnrp/hasivu",
    image: (
      <img
        className="pr-2 mr-2"
        alt="Create React App Logo"
        title="Create React App Logo"
        src="/thumbnail-hasivu.png"
      />
    ),
  },
  "tmnrp-hasivu-1": {
    projectName: "tmnrp-hasivu-1",
    domainName: "tmnrp-hasivu-1.vercel.app",
    domainURL: "https://tmnrp-hasivu-1.vercel.app/",
    repositoryName: "hasivu-1",
    repositoryURL: "https://github.com/tmnrp/hasivu-1",
    image: (
      <img
        className="pr-2 mr-2"
        alt="Create React App Logo"
        title="Create React App Logo"
        src="/thumbnail-hasivu-1.png"
      />
    ),
  },
  "tmnrp-tic-tac-toe": {
    projectName: "tmnrp-tic-tac-toe",
    domainName: "tmnrp-tic-tac-toe.vercel.app",
    domainURL: "https://tmnrp-tic-tac-toe.vercel.app/",
    repositoryName: "tic-tac-toe",
    repositoryURL: "https://github.com/tmnrp/tic-tac-toe",
    image: (
      <img
        className="pr-2 mr-2"
        alt="Create React App Logo"
        title="Create React App Logo"
        src="/thumbnail-tic-tac-toe.png"
      />
    ),
  },
};
