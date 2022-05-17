import Image from "next/image";
import { WidthWrapperContainer } from "../components/WidthWrapperContainer";

//
export const Intro = () => {
  return (
    <section id="intro">
      <WidthWrapperContainer className="clip-container">
        <IntroSummary />

        <div className="flex flex-row-reverse mt-6">
          <ProfilePic />
        </div>
      </WidthWrapperContainer>
    </section>
  );
};

//
const IntroSummary = () => (
  <>
    <div className="pt-16 tracking-widest">{`I'm`}</div>
    <div className="text-2xl uppercase tracking-widest font-semibold">
      <span className="pb-1.5 border-b-2 border-stone-800">Parammal Harsh</span>
    </div>
    <div className="mt-2 text-lg tracking-widest">
      <div>Technical Analyst</div>
      <div className="italic text-xs">full-stack</div>
    </div>
  </>
);

//
const ProfilePic = () => (
  <Image
    className="absolute object-cover rounded-3xl"
    src="https://images.unsplash.com/photo-1648807763220-703398bc459f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    alt="Profile pic"
    width={250}
    height={250}
  />
);
