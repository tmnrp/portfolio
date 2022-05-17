import Image from "next/image";
import { WidthWrapperContainer } from "../../components/WidthWrapperContainer";

//
export const Intro = () => {
  return (
    <section id="intro">
      <article className="clip-container flex justify-center items-center">
        <WidthWrapperContainer
          className={`grid gap-4 grid-rows-[1fr_2fr] md:grid-rows-none md:grid-cols-[2fr_1fr]`}
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

      <div className="text-lg md:text-xl lg:text-2xl tracking-widest">
        <div>Technical Analyst</div>
        <div className="italic text-xs md:text-sm lg:text-lg">full-stack</div>
      </div>
    </div>
  </div>
);

//
const ProfilePic = () => (
  <div className="flex justify-center items-start md:items-center">
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
