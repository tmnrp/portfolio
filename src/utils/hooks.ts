import { useState, useCallback, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<
    "sm" | "md" | "lg" | "xl" | "2xl"
  >("sm");
  const breakPointHandler = useCallback(
    (width) =>
      setBreakpoint(
        width < 768
          ? "sm"
          : width < 1024
          ? "md"
          : width < 1280
          ? "lg"
          : width < 1536
          ? "xl"
          : "2xl"
      ),
    []
  );
  useEffect(() => {
    breakPointHandler(window.innerWidth);
    window.addEventListener("resize", () =>
      breakPointHandler(window.innerWidth)
    );

    //
    return () => {
      window.removeEventListener("resize", () =>
        breakPointHandler(window.innerWidth)
      );
    };
  }, [breakPointHandler]);

  return { breakpoint };
};
