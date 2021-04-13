import React, { useEffect, useState } from "react";

export const ThemeSwitcher = ({ themes, baseClsnm, onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState({});

  //
  const [themeNames] = useState(getThemeNames(themes));

  const [mode, setMode] = useState();
  useEffect(() => setMode(selectedTheme.mode), [selectedTheme]);

  //
  return (
    <div
      className="dg aic gafc"
      style={{ columnGap: 10, alignItems: "baseline", marginBottom: 3 }}
    >
      <div className="dg gafc" style={{ columnGap: 5 }}>
        {themes.map((theme) => {
          return (
            <div
              key={`key-${theme.name}`}
              className="cp"
              style={{
                height: 14,
                width: 14,
                backgroundColor: theme.colorCode,
                borderRadius: "50%",
                boxShadow: "0px 0px 3px",
              }}
              onClick={() => {
                // update theme cls on base element
                removeAllThemeClsnm(baseClsnm, themeNames);
                selectTheme(baseClsnm, theme.name);

                // update themeswitcher icons
                setSelectedTheme(theme);
                onThemeChange(theme);
              }}
            />
          );
        })}
      </div>
      <div>
        {mode === THEME_MODES.DARK ? (
          <DarkIcon selectedTheme={selectedTheme} />
        ) : (
          <LightIcon selectedTheme={selectedTheme} />
        )}
      </div>
    </div>
  );
};

/**
 * Helpers
 */

//
export const getElementByClsnm = (parentClsnm) => {
  const el = document.getElementsByClassName(parentClsnm)?.[0];
  const classList = el?.classList;
  return {
    el: el,
    classList: classList,
  };
};

//
export const removeAllThemeClsnm = (parentClsnm, themes = []) => {
  const { classList } = getElementByClsnm(parentClsnm);
  const temp = [...classList];
  temp.forEach((cls) => themes.includes(cls) && classList.remove(cls));
};

//
export const selectTheme = (parentClsnm, attachClsnm) => {
  const { classList } = getElementByClsnm(parentClsnm);
  classList.add(attachClsnm);
};

//
const DarkIcon = ({ selectedTheme }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="bi bi-cloud-moon-fill"
    viewBox="0 0 16 16"
    style={{ height: 24, width: 24, color: selectedTheme.colorCode }}
  >
    <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
    <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
  </svg>
);

const LightIcon = ({ selectedTheme }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="bi bi-cloud-sun"
    viewBox="0 0 16 16"
    style={{ height: 24, width: 24, color: selectedTheme.colorCode }}
  >
    <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
    <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
  </svg>
);

//
export const THEME_MODES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

export const getThemeNames = (themes) => themes.map((theme) => theme.name);
//
export class Theme {
  constructor(mode, name, colorCode) {
    this.mode = mode;
    this.name = name;
    this.colorCode = colorCode;
  }
}
