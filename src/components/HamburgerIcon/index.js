import "./index.css";
import React, { useImperativeHandle, useState } from "react";

export const HamburgerIcon = React.forwardRef(({ onClick }, ref) => {
  const [isActive, setIsActive] = useState(false);

  //
  useImperativeHandle(
    ref,
    () => ({
      setIsActive: setIsActive,
    }),
    []
  );

  //
  return (
    <div className={`tm-burger ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="tm-burger-lines" />
      <div className="tm-burger-lines" />
      <div className="tm-burger-lines" />
    </div>
  );
});
