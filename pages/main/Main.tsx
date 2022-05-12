import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Resume } from "./Resume";

export const Main = () => {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
      <Resume />
      <Contact />

      <Footer />
    </main>
  );
};
