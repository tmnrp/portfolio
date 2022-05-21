import { About } from "../components/About";
import { Home } from "../components/Home";

//
const Main = () => {
  return (
    <>
      <Home />
      <div className="bg-white">
        <div className="h-24 bg-black clipped-container" />
      </div>

      <About />
      <div className="bg-black">
        <div className="h-24 bg-white clipped-container" />
      </div>
    </>
  );
};

//
export default Main;
