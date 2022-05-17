import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Link from "next/link";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { WidthWrapperContainer } from "../components/WidthWrapperContainer";
import { isElementInViewPort } from "../utils";

export const Header = () => {
  //
  return (
    <header
      className={`
        h-16
        bg-stone-900 text-gray-50
        flex justify-center items-center
      `}
    >
      <WidthWrapperContainer className="flex justify-between items-center">
        <Logo />
        <Navbar />
      </WidthWrapperContainer>
    </header>
  );
};

//
const Logo = () => (
  <div className="tracking-widest text-3xl font-semibold uppercase">TM</div>
);

//
const Navbar = () => {
  //
  const [selectedMenu, setSelectedMenu] = useState(CONST_MENU_ITEMS[0].name);
  useOnScrollHandler({ setSelectedMenu });

  //
  return (
    <nav>
      <ul
        className={`
          flex space-x-6 tracking-widest font-semibold
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
                <a>
                  <div className="flex space-x-2">
                    <div className="flex items-center">
                      <GoogleMaterialIcons iconName={menuItem.iconName} />
                    </div>
                    <div className="hidden md:flex sm:text-xs items-center uppercase">
                      {menuItem.name}
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
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
      isElementInViewPort(document.getElementById(CONST_MENU_ITEMS[0].key))
        ? CONST_MENU_ITEMS[0].name
        : isElementInViewPort(document.getElementById(CONST_MENU_ITEMS[1].key))
        ? CONST_MENU_ITEMS[1].name
        : isElementInViewPort(document.getElementById(CONST_MENU_ITEMS[2].key))
        ? CONST_MENU_ITEMS[2].name
        : isElementInViewPort(document.getElementById(CONST_MENU_ITEMS[3].key))
        ? CONST_MENU_ITEMS[3].name
        : isElementInViewPort(document.getElementById(CONST_MENU_ITEMS[4].key))
        ? CONST_MENU_ITEMS[4].name
        : CONST_MENU_ITEMS[0].name
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
    key: "resume",
    name: "Resume",
    iconName: "badge",
  },
  {
    key: "projects",
    name: "Projects",
    iconName: "view_quilt",
  },
  {
    key: "contact",
    name: "Contact me",
    iconName: "email",
  },
];
