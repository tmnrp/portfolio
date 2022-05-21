import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Image from "next/image";
import React from "react";

export const Home = () => {
  return (
    <div id="home" className="bg-[#F5F5F4]">
      <div className="clipped-container px-4 grid pt-14 pb-28 grid-cols-2 bg-black text-gray-300">
        <article className="flex flex-col justify-center">
          <div className="pb-1">
            <p>{`I'm`}</p>
            <p className="text-xl font-semibold tracking tracking-widest whitespace-nowrap">
              Parammal Harsh
            </p>
          </div>

          <div className="border-t border-t-gray-600 py-1">
            <p className="font-semibold">Technical analyst</p>
            <p className="italic text-xs">Full-stack</p>
          </div>

          <div className="border-t border-t-gray-600 pt-2 space-y-1">
            <div className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center"
                iconName="business"
              />
              <p className="text-xs">Doyen Infosolutions pvt. ltd.</p>
            </div>
            <div className="flex space-x-2">
              <GoogleMaterialIcons
                className="flex items-center"
                iconName="school"
              />
              <p className="text-xs">{`Vivekanand Education Society's Institute of Technology`}</p>
            </div>
          </div>
        </article>

        <div className="flex justify-end items-center">
          <div className="relative h-32 w-32 rounded-full overflow-hidden">
            <Image
              src="https://tmnrp-portfolio.vercel.app/profilepic.jfif"
              alt="profile"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
