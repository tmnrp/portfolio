import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Link from "next/link";
import router from "next/router";
import { Dispatch, SetStateAction } from "react";

//
export const CardProject = ({
  projectName,
  desc,
  url,
  label,
  setSelectedProject,
}: {
  projectName: string;
  desc: string;
  url: string;
  label: string;
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
        <h3>{label}</h3>
        <div className="flex space-x-2">
          <GoogleMaterialIcons
            className="cursor-pointer hover:scale-105 transition-all duration-100 ease-out"
            iconName="preview"
            onClick={() => {
              setSelectedProject(projectName);
              router.push("/#projects");
            }}
          />

          <Link href={url}>
            <a target="_blank">
              <GoogleMaterialIcons
                className="cursor-pointer hover:scale-105 transition-all duration-100 ease-out"
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
