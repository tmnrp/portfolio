import { About } from "../components/About";
import { Home } from "../components/Home";
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
      <div className="bg-red-200">
        <div className="h-24 bg-stone-50 clipped-container" />
      </div>
    </>
  );
};

//
export default Main;
