import { PageTitle } from "../../components/PageTitle";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

export const Contact = () => {
  return (
    <section id="contact">
      <article className="clip-container">
        <WidthWrapperContainer className="pt-2">
          <PageTitle title="Contact" />
        </WidthWrapperContainer>
      </article>
    </section>
  );
};
