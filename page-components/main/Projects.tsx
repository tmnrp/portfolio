import { PageTitle } from "../../components/PageTitle";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

export const Projects = () => {
  return (
    <section id="projects">
      <article className="clip-container flex justify-center items-center">
        <WidthWrapperContainer>
          <PageTitle title="Projects" className="pt-4" />
        </WidthWrapperContainer>
      </article>
    </section>
  );
};
