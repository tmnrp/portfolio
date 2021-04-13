import React from "react";
import { THEMES } from "../../pages/HomePage";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Footer = () => {
  return (
    <div className="h100p df aic jcfe" style={{ padding: "5px 10px" }}>
      <ThemeSwitcher
        themes={THEMES}
        baseClsnm="homepage"
        onThemeChange={(theme) => {}}
      />
    </div>
  );
};
