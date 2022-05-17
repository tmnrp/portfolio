import { PageTitle } from "../../components/PageTitle";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

export const Resume = () => {
  return (
    <section id="resume">
      <article className="clip-container">
        <WidthWrapperContainer className="pt-2">
          <PageTitle title="Resume" />
        </WidthWrapperContainer>
      </article>
    </section>
  );
};
