import { PageTitle } from "../../components/PageTitle";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

export const Projects = () => {
  return (
    <section id="projects">
      <article className="clip-container">
        <WidthWrapperContainer className="pt-2">
          <PageTitle title="Projects" />
        </WidthWrapperContainer>
      </article>
    </section>
  );
};
