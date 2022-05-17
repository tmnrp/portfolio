import Image from "next/image";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

//
export const Intro = () => {
  return (
    <section id="intro">
      <article className="clip-container flex justify-center items-center">
        <WidthWrapperContainer
          className={`grid gap-4 grid-rows-[1fr_1fr] sm:grid-rows-none sm:grid-cols-[2fr_1fr]`}
        >
          <IntroSummary />
          <ProfilePic />
        </WidthWrapperContainer>
      </article>
    </section>
  );
};

//
const IntroSummary = () => (
  <div className="flex items-center">
    <div className="space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
      <div>
        <div className="tracking-widest">{`I'm`}</div>
        <div className="text-2xl md:text-4xl lg:text-5xl uppercase tracking-widest font-semibold">
          <span className="pb-1.5 border-b-2 border-stone-800">
            Parammal Harsh
          </span>
        </div>
      </div>

      <div className="text-lg md:text-xl lg:text-2xl tracking-widest max-w-sm lg:max-w-xl xl:max-w-4xl">
        <div>
          <span>Technical Analyst</span>
          <span className="italic text-xs md:text-sm lg:text-lg ml-2">
            (full-stack)
          </span>
        </div>

        <div className="text-sm mt-2">
          <div className="tracking-widest">Doyen Infosolutions pvt. ltd.</div>
          <div className="tracking-widest">{`Vivekanand Education Society's Institute of Technology`}</div>
        </div>
      </div>
    </div>
  </div>
);

//
const ProfilePic = () => (
  <div className="flex justify-center items-start sm:items-center">
    <div className="flex justify-center items-center">
      <Image
        className="image object-cover rounded-3xl"
        src="https://images.unsplash.com/photo-1648807763220-703398bc459f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Profile pic"
        height={"200%"}
        width={"200%"}
      />
    </div>
  </div>
);
