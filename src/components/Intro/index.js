import React from "react";

export const Intro = ({ avatarSrc }) => (
  <section className="intro" style={STYLES.SECTION}>
    <Avatar avatarSrc={avatarSrc} />
    <BasicInfo />
  </section>
);

/**
 * Helpers
 */

const Avatar = ({ avatarSrc }) => (
  <div className="df jcc" style={{ marginTop: 10 }}>
    <img alt="Avatar" src={avatarSrc} style={STYLES.AVATAR} />
  </div>
);

const BasicInfo = () => (
  <div className="dg" style={{ marginTop: 10 }}>
    <div className="df jcc ls1" style={{ fontSize: 15 }}>
      Hi, I'm
    </div>
    <div className="df jcc ls1" style={{ fontSize: 19, marginTop: 0 }}>
      {`<Tony Martin />`}
    </div>
    <div className="df jcc fsi ls1" style={{ fontSize: 18, marginTop: 5 }}>
      Front-end Developer
    </div>
  </div>
);

const STYLES = {
  SECTION: { rowGap: 20, height: "100%" },
  AVATAR: {
    height: 100,
    width: 100,
    borderRadius: "35%",
    boxShadow: "4px 4px 16px 0px rgba(64, 65, 68, 0.5)",
  },
};
