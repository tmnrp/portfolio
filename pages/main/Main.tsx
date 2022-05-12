import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Resume } from "./Resume";

export const Main = () => {
  const sttRef = useRef<any>();

  //
  const getScrollTopValue = useCallback(() => {
    if (typeof document !== "undefined") {
      const main = document?.getElementsByTagName("main");
      return main?.[0]?.scrollTop;
    } else {
      return 0;
    }
  }, []);

  //
  const onScrollHandler = useCallback(() => {
    const scrollTop = getScrollTopValue() || 0;

    //
    if (scrollTop > 700 && sttRef.current) {
      sttRef.current.show();
    } else {
      sttRef.current.hide();
    }
  }, [getScrollTopValue]);

  //
  useEffect(() => {
    const main = document.getElementsByTagName("main");
    main[0]?.addEventListener("scroll", onScrollHandler);

    //
    return () => window.removeEventListener("scroll", onScrollHandler);
  }, [onScrollHandler]);

  //
  return (
    <main className="relative">
      <Intro />
      <About />
      <Projects />
      <Resume />
      <Contact />

      <Footer />
      <ScrollToTop sttRef={sttRef} getScrollTopValue={getScrollTopValue} />
    </main>
  );
};

//
const ScrollToTop = ({
  sttRef,
  getScrollTopValue,
}: {
  sttRef: any;
  getScrollTopValue: () => number;
}) => {
  const [isVisible, setIsVisible] = useState(getScrollTopValue() > 700);

  //
  useImperativeHandle(
    sttRef,
    () => ({
      hide: () => setIsVisible(false),
      show: () => setIsVisible(true),
    }),
    []
  );

  //
  return (
    <div
      className={`
        ${isVisible ? "" : "hidden"}
        fixed bottom-3 left-3 cursor-pointer
        border-2 border-slate-500 rounded-full
      `}
    >
      <Link href="#intro">
        <GoogleMaterialIcons
          iconName="straight"
          className="text-slate-500 text-3xl"
        />
      </Link>
    </div>
  );
};
