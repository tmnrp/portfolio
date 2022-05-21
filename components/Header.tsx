import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//
export const Header = () => {
  return (
    <header
      className={`
        px-4 py-2
        flex items-center justify-between
        sticky top-0 z-10 shadow-sm shadow-gray-900 bg-black text-gray-400
      `}
    >
      <div className="relative h-9 w-9 flex-shrink-0">
        <Image
          src="https://avatars.githubusercontent.com/u/21990847?v=4"
          alt="Profile pic"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex">
        <nav className="flex items-center pr-2 border-r border-r-gray-600">
          <Link href="#home">
            <a className="flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500">
              <GoogleMaterialIcons type="outlined" iconName="home" />
              <span className="hidden sm:inline-block">Home</span>
            </a>
          </Link>

          <Link href="#about">
            <a className="flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500">
              <GoogleMaterialIcons type="outlined" iconName="person" />
              <span className="hidden sm:inline-block">About</span>
            </a>
          </Link>

          <Link href="#resume">
            <a className="flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500">
              <GoogleMaterialIcons type="outlined" iconName="text_snippet" />
              <span className="hidden sm:inline-block">Resume</span>
            </a>
          </Link>

          <Link href="#projects">
            <a className="flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500">
              <GoogleMaterialIcons type="outlined" iconName="badge" />
              <span className="hidden sm:inline-block">Projects</span>
            </a>
          </Link>

          <Link href="#contactme">
            <a className="flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500">
              <GoogleMaterialIcons type="outlined" iconName="mail" />
              <span className="hidden sm:inline-block">Contact me</span>
            </a>
          </Link>
        </nav>

        <button className="flex items-center pl-2 active:text-emerald-500">
          <GoogleMaterialIcons type="outlined" iconName="dark_mode" />
        </button>
      </div>
    </header>
  );
};
