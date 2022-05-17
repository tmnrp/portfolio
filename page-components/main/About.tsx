import { PageTitle } from "../../components/PageTitle";
import { WhatIOfferCards } from "../../components/WhatIOfferCards";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

export const About = () => {
  return (
    <section id="about">
      <article className="clip-container">
        <WidthWrapperContainer>
          <PageTitle title="About me" className="pt-4" />

          <Summary />

          <WhatIOffer />
        </WidthWrapperContainer>
      </article>
    </section>
  );
};

//
const Summary = () => (
  <div className="pt-6 pb-4 space-y-2 max-w-xs md:max-w-sm border-b">
    <p>
      Technical analyst with 5+ years of experience in full stack development.
    </p>
    <p>
      I am persistent, quick learner and intereted in troubleshoot problems and
      identify solution that is simple and scalable.
    </p>
  </div>
);

//
const WhatIOffer = () => (
  <div className="pt-4 space-y-4">
    <WhatIOfferCards>
      <div className="text-sm font-semibold border-b border-stone-300 tracking-widest">
        Frontend development
      </div>
      <div className="text-sm">
        <p>Minimalistic and user-friendly user interface.</p>
        <p>
          Attractive and scalable SPA using HTML, CSS, Javascript React, NextJs,
          Typescript, Tailwind.
        </p>
      </div>
    </WhatIOfferCards>

    <WhatIOfferCards>
      <div className="text-sm font-semibold border-b border-stone-300 tracking-widest">
        Backend development
      </div>
      <div className="text-sm">
        <p>REST API using Express and Springboot.</p>
        <p>Database management using SQL and NoSQL.</p>
      </div>
    </WhatIOfferCards>
  </div>
);
