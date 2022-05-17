import { PageTitle } from "../../components/PageTitle";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

export const Contact = () => {
  return (
    <section id="contact">
      <article className="clip-container flex justify-center items-center">
        <WidthWrapperContainer>
          <PageTitle title="Contacts" className="pt-4" />
        </WidthWrapperContainer>
      </article>
    </section>
  );
};
