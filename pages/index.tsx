import { About } from "../components/About";
import { Home } from "../components/Home";

//
const Main = () => {
  return (
    <>
      <Home />
      <div className="bg-gray-300">
        <div className="h-24 bg-black clipped-container-home" />
      </div>

      <About />
      <div className="bg-gray-300">
        <div className="h-24 bg-black" />
      </div>
    </>
  );
};

//
export default Main;
