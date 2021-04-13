import "./index.scss";
import React, { useState } from "react";

export const SideNav = ({ isSNavAcive, setIsSNavAcive }) => (
  <div
    className={`snav pa t0 r0 h100p df ofxh df jcc tac ${
      isSNavAcive ? "active" : ""
    }`}
    onClick={() => setIsSNavAcive(false)}
    style={{ zIndex: 1, width: 0 }}
  >
    <MenuItems isSNavAcive={isSNavAcive} />
  </div>
);

/**
 * Helpers
 */

const MenuItems = ({ isSNavAcive }) => {
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  return (
    <ul className={`df fdc jcse ${isSNavAcive ? "animate" : ""}`}>
      {menuItems.map((item, i) => (
        <MenuItem
          key={`key-${i}`}
          text={item.name}
          isSelected={item.isSelected}
          animationDelay={item.animationDelay}
          onClick={() =>
            setMenuItems((menuItems) => {
              return menuItems.map((item, j) => {
                return { ...item, isSelected: i === j };
              });
            })
          }
        />
      ))}
    </ul>
  );
};

const MenuItem = ({ text, isSelected, onClick, animationDelay }) => (
  <li
    onClick={onClick}
    className={`menu-item fwb cp ${isSelected ? "active" : ""} fadein`}
    style={{
      animationDuration: "0.2s",
      animationFillMode: "forwards",
      animationDelay: animationDelay,
      letterSpacing: 5,
    }}
  >
    {text}
  </li>
);
const MENU_ITEMS = [
  {
    name: "Home",
    animationDelay: "0.3s",
    isSelected: true,
  },
  {
    name: "About me",
    animationDelay: "0.4s",
    isSelected: false,
  },
  {
    name: "Experience",
    animationDelay: "0.5s",
    isSelected: false,
  },
  {
    name: "Education",
    animationDelay: "0.6s",
    isSelected: false,
  },
  {
    name: "Contact",
    animationDelay: "0.7s",
    isSelected: false,
  },
];
