import Image from "next/image";
import Link from "next/link";
import Github from "../assets/github.png";
import Npmjs from "../assets/npmjs.png";
import Linkedin from "../assets/linkedin.png";
import { Title } from "./Title";

export const About = () => {
  return (
    <div
      id="about"
      className={`
      bg-white
      `}
    >
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <Title text="About me" />

        <div className="grid grid-rows-[auto_1fr] gap-8 md:gap-10 md:grid-rows-none md:grid-cols-2">
          <div className="space-y-4 md:flex md:flex-col">
            <div className="text-sm">
              <p>
                Technical analyst with 5+ years of experience in full stack
                development.
              </p>

              <p>
                I am persistent, quick learner and intereted in troubleshoot
                problems and identify solution that is simple and scalable.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative h-6 w-6 flex items-center">
                <Link
                  href="https://in.linkedin.com/in/harsh-parammal-0a831a50?original_referer=https%3A%2F%2Fwww.google.com%2F"
                  passHref
                >
                  <a target="_blank">
                    <Image
                      src={Linkedin}
                      alt="github"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>

              <div className="relative h-6 w-6 flex items-center mt-1">
                <Link href="https://www.npmjs.com/~tmnrp" passHref>
                  <a target="_blank">
                    <Image
                      src={Npmjs}
                      alt="github"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>

              <div className="relative h-6 w-6 flex items-center">
                <Link href="https://github.com/tmnrp" passHref>
                  <a target="_blank">
                    <Image
                      src={Github}
                      alt="github"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            {/* Frontend development */}
            <div
              className={`
                p-4 space-y-2
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
                p-4 space-y-2
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
