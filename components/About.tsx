import React from "react";
import { Container } from "./Container";

export const About = () => {
  return (
    <div
      id="about"
      className={`
      bg-white
      `}
    >
      <div className="w-full max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-rows-[auto_1fr] gap-5 md:gap-10 md:grid-rows-none md:grid-cols-2">
          <div className="space-y-4 max-w-lg text-sm md:flex md:flex-col">
            <Title />

            <div>
              <p>
                Technical analyst with 5+ years of experience in full stack
                development.
              </p>

              <p>
                I am persistent, quick learner and intereted in troubleshoot
                problems and identify solution that is simple and scalable.
              </p>
            </div>
          </div>

          <div>
            {/* Frontend development */}
            <div
              className={`
                mt-4 p-2 space-y-2 max-w-lg
              bg-stone-100 shadow-md rounded-lg
              `}
            >
              <p className="font-semibold tracking-widest text-gray-800 border-b border-stone-300">
                Frontend development
              </p>
              <div className="text-sm space-y-1">
                <p>Minimalistic and user-friendly user interface.</p>
                <p>
                  Attractive and scalable SPA using HTML, CSS, Javascript React,
                  NextJs, Typescript, Tailwind.
                </p>
              </div>
            </div>

            {/* Backend development */}
            <div
              className={`
                mt-4 p-2 space-y-2 max-w-lg
              bg-stone-100 shadow-md rounded-lg
              `}
            >
              <p className="font-semibold tracking-widest text-gray-800 border-b border-stone-300">
                Backend development
              </p>
              <div className="text-sm space-y-1">
                <p>REST API using Express and Springboot.</p>
                <p>Database management using SQL and NoSQL.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//
const Title = () => (
  <div>
    <p
      className={`
    uppercase tracking-widest text-xl
  `}
    >
      About me
    </p>
    <div className="flex items-center mt-1">
      <div className="h-2 w-[60px] bg-black" />
      <div className="h-[2px] w-[100px] bg-black" />
    </div>
  </div>
);
