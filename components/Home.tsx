import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Image from "next/image";
import React from "react";
import { Container } from "./Container";

export const Home = () => {
  return (
    <div id="home" className="bg-[#F5F5F4]">
      <div className="clipped-container-home bg-black text-gray-300">
        <Container
          className={`
            h-[80vh] px-4 grid grid-rows-[1fr_2fr] sm:grid-rows-none sm:grid-cols-2
          `}
        >
          <div className="flex justify-center items-center sm:order-last sm:justify-end">
            <div
              className={`
                relative rounded-3xl overflow-hidden
                h-32 sm:h-44 md:h-56
                w-32 sm:w-44 md:w-56 
              `}
            >
              <Image
                src="https://tmnrp-portfolio.vercel.app/profilepic.jfif"
                alt="profile"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          <article className="flex flex-col sm:justify-center">
            <div className="pb-2">
              <p>{`I'm`}</p>
              <p
                className={`
                  font-semibold tracking tracking-widest whitespace-nowrap
                  text-xl sm:text-4xl lg:text-5xl
                `}
              >
                Parammal Harsh
              </p>
            </div>

            <div className="pb-2">
              <p
                className={`
                  inline-flex pt-2 border-t border-t-gray-600 font-semibold
                  lg:text-xl
                `}
              >
                Technical analyst
              </p>
              <p className="italic text-xs">Full-stack</p>
            </div>

            <div>
              <div className="space-x-2 inline-flex pt-2 border-t border-t-gray-600">
                <GoogleMaterialIcons
                  className="flex items-center"
                  iconName="business"
                />
                <p className="text-xs md:text-sm flex items-center">
                  Doyen Infosolutions pvt. ltd.
                </p>
              </div>
              <div className="flex space-x-2">
                <GoogleMaterialIcons
                  className="flex items-center"
                  iconName="school"
                />
                <p className="text-xs md:text-sm flex items-center">
                  {`Vivekanand Education Society's Institute of Technology`}
                </p>
              </div>
            </div>
          </article>
        </Container>
      </div>
    </div>
  );
};
