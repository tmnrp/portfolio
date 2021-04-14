import React from "react";
import { HamburgerIcon } from "../HamburgerIcon";

export const NavBar = ({ hamburgerIconRef, setIsSNavAcive }) => (
  <nav className="navbar df jcsb h100p" style={STYLES.NAV}>
    <div
      className="logo-wrap df aic cp"
      style={STYLES.LOGO_WRAP}
      onClick={() => setIsSNavAcive(false)}
    >
      <span className="fwb" style={{ letterSpacing: -2, fontSize: 15 }}>
        T
      </span>
      <span className="fwb" style={{ fontSize: 9, marginTop: 1 }}>
        M
      </span>
    </div>
    <div style={{ zIndex: 2 }}>
      <HamburgerIcon
        ref={hamburgerIconRef}
        onClick={() => setIsSNavAcive((isSNavAcive) => !isSNavAcive)}
      />
    </div>
  </nav>
);

/**
 * Helpers
 */

const STYLES = {
  NAV: { padding: "15px 20px 5px 20px" },
  LOGO_WRAP: {
    borderRadius: "35%",
    padding: "0px 4px",
    height: 25,
    zIndex: 2,
  },
};
