import { PageTitle } from "../../components/PageTitle";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

export const Resume = () => {
  return (
    <section id="resume">
      <article className="clip-container flex justify-center items-center">
        <WidthWrapperContainer>
          <PageTitle title="Resume" className="pt-4" />
        </WidthWrapperContainer>
      </article>
    </section>
  );
};
