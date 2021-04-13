import "./index.scss";
import React, { useEffect, useRef, useState } from "react";
import { getGravatarAvatar } from "gravatar-utils";
import { NavBar } from "../../components/NavBar";
import { Intro } from "../../components/Intro";
import { SideNav } from "../../components/SideNav";
import { Footer } from "../../components/Footer";
import { Theme, THEME_MODES } from "../../components/ThemeSwitcher";

export const HomePage = () => {
  const [avatarSrc, setAvatarSrc] = useState("");
  useEffect(
    () => setAvatarSrc(getGravatarAvatar("tony.venom007@gmail.com")),
    []
  );

  //
  const [isSNavAcive, setIsSNavAcive] = useState(false);
  const hamburgerIconRef = useRef();
  useEffect(() => {
    hamburgerIconRef?.current?.setIsActive(isSNavAcive);
  }, [isSNavAcive]);

  //
  return (
    <div className="homepage dark h100p">
      <NavBar
        setIsSNavAcive={setIsSNavAcive}
        hamburgerIconRef={hamburgerIconRef}
      />
      <Intro avatarSrc={avatarSrc} />
      <Footer />
      <SideNav isSNavAcive={isSNavAcive} setIsSNavAcive={setIsSNavAcive} />
    </div>
  );
};

/**
 * Helpers
 */

export const THEMES = [
  new Theme(THEME_MODES.DARK, "dark", "#858585"),
  new Theme(THEME_MODES.LIGHT, "light", "#FFFFFF"),
  new Theme(THEME_MODES.DARK, "darkpurple", "#2d0f1b"),
  new Theme(THEME_MODES.LIGHT, "lightpurple", "#fc8fb6"),
];
