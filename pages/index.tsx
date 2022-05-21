import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Resume } from "../components/Resume";

//
const Main = () => {
  return (
    <>
      <Home />
      <div className="bg-white">
        <div className="h-24 bg-black clipped-container" />
      </div>

      <About />
      <div className="bg-stone-50">
        <div className="h-24 bg-white clipped-container" />
      </div>

      <Resume />
      <div className="bg-white">
        <div className="h-24 bg-stone-50 clipped-container" />
      </div>

      <Projects />
      <div className="bg-black">
        <div className="h-24 bg-white clipped-container" />
      </div>

      <Footer />
    </>
  );
};

//
export default Main;
