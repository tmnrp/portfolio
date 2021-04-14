import React from "react";
import { THEMES } from "../../pages/HomePage";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Footer = () => {
  return (
    <div className="footer h100p df aic jcfe" style={{ padding: "5px 10px" }}>
      <ThemeSwitcher
        themes={THEMES}
        defaultTheme={THEMES[0]}
        baseClsnm="homepage"
        onThemeChange={(theme) => {}}
      />
    </div>
  );
};
