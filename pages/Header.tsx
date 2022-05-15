import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Link from "next/link";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { isElementInViewPort } from "../utils";

export const Header = () => {
  //
  const [selectedMenu, setSelectedMenu] = useState(CONST_MENU_ITEMS[0].name);
  useOnScrollHandler({ setSelectedMenu });

  //
  return (
    <header
      className={`flex w-full lg:justify-center bg-stone-900 text-gray-50`}
    >
      <div className="flex justify-between items-center w-full lg:w-10/12">
        <div className="tracking-widest text-3xl font-semibold uppercase pl-5">
          TM
        </div>

        <nav className="pr-5">
          <ul
            className={`
            flex space-x-10 md:space-x-5 lg:space-x-10 tracking-widest font-semibold
          `}
          >
            {CONST_MENU_ITEMS.map((menuItem) => {
              return (
                <li
                  key={`${menuItem.name}`}
                  className={`cursor-pointer uppercase ${
                    selectedMenu === menuItem.name ? "active" : ""
                  }`}
                >
                  <Link href={`#${menuItem.key}`}>
                    <div className="flex space-x-2">
                      <div className="flex items-center">
                        <GoogleMaterialIcons iconName={menuItem.iconName} />
                      </div>
                      <div className="hidden md:flex sm:text-xs items-center uppercase">
                        {menuItem.name}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

//
const useOnScrollHandler = ({
  setSelectedMenu,
}: {
  setSelectedMenu: Dispatch<SetStateAction<string>>;
}) => {
  //
  const onScrollHandler = useCallback(() => {
    setSelectedMenu(
      isElementInViewPort(document.getElementById("intro"))
        ? "Home"
        : isElementInViewPort(document.getElementById("about"))
        ? "About me"
        : isElementInViewPort(document.getElementById("projects"))
        ? "Projects"
        : isElementInViewPort(document.getElementById("resume"))
        ? "Resume"
        : isElementInViewPort(document.getElementById("contact"))
        ? "Contact me"
        : "Home"
    );
  }, [setSelectedMenu]);

  //
  useEffect(() => {
    //const documentIsValid = typeof document !== "undefined";
    const main = document.getElementsByTagName("main");
    main[0]?.addEventListener("scroll", onScrollHandler);

    return () => main?.[0]?.removeEventListener("scroll", onScrollHandler);
  }, [onScrollHandler]);
};

//
const CONST_MENU_ITEMS = [
  {
    key: "intro",
    name: "Home",
    iconName: "home",
  },
  {
    key: "about",
    name: "About me",
    iconName: "face_6",
  },
  {
    key: "projects",
    name: "Projects",
    iconName: "view_quilt",
  },
  {
    key: "resume",
    name: "Resume",
    iconName: "badge",
  },
  {
    key: "contact",
    name: "Contact me",
    iconName: "email",
  },
];
