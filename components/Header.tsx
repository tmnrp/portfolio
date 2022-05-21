import { GoogleMaterialIcons } from "@tmnrp/react-google-material-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "./Container";

//
export const Header = () => {
  return (
    <header
      className={`
        h-16 flex items-center
        sticky top-0 z-10 shadow-sm shadow-gray-900 bg-black text-gray-400
      `}
    >
      <Container className="flex items-center justify-between">
        <div
          className={`
            relative flex-shrink-0
            h-9 md:h-12
            w-9 md:w-12
          `}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/21990847?v=4"
            alt="Profile pic"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex">
          <nav className="flex items-center space-x-3 md:space-x-4 border-r border-r-gray-600">
            <Link href="#home">
              <a
                className={`
                  flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500
                  lowercase tracking-widest font-semibold
                `}
              >
                <GoogleMaterialIcons
                  className="text-2xl md:text-3xl"
                  type="outlined"
                  iconName="home"
                />
                <span className="hidden md:inline-block text-sm">Home</span>
              </a>
            </Link>

            <Link href="#about">
              <a
                className={`
                  flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500
                  lowercase tracking-widest font-semibold
                `}
              >
                <GoogleMaterialIcons
                  className="text-2xl md:text-3xl"
                  type="outlined"
                  iconName="person"
                />
                <span className="hidden md:inline-block text-sm">About</span>
              </a>
            </Link>

            <Link href="#resume">
              <a
                className={`
                  flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500
                  lowercase tracking-widest font-semibold
                `}
              >
                <GoogleMaterialIcons
                  className="text-2xl md:text-3xl"
                  type="outlined"
                  iconName="text_snippet"
                />
                <span className="hidden md:inline-block text-sm">Resume</span>
              </a>
            </Link>

            <Link href="#projects">
              <a
                className={`
                  flex py-2 px-1 space-x-2 flex-shrink-0 active:text-emerald-500
                  lowercase tracking-widest font-semibold
                `}
              >
                <GoogleMaterialIcons
                  className="text-2xl md:text-3xl"
                  type="outlined"
                  iconName="badge"
                />
                <span className="hidden md:inline-block text-sm">Projects</span>
              </a>
            </Link>

            <Link href="#contactme">
              <a
                className={`
                  flex py-2 px-1 pr-3 space-x-2 flex-shrink-0 active:text-emerald-500
                  lowercase tracking-widest font-semibold
                  
                `}
              >
                <GoogleMaterialIcons
                  className="text-2xl md:text-3xl"
                  type="outlined"
                  iconName="mail"
                />
                <span className="hidden md:inline-block text-sm">
                  Contact me
                </span>
              </a>
            </Link>
          </nav>

          <button className="flex items-center pl-2 active:text-emerald-500">
            <GoogleMaterialIcons type="outlined" iconName="dark_mode" />
          </button>
        </div>
      </Container>
    </header>
  );
};
