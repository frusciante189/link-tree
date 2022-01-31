import React, { useState } from "react";
import Image from "next/image";
import pp from "../public/pp.jpg";
import Head from "next/head";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "../context/theme";

export default function Home() {
  const [name, setName] = useState("Elon Musk");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("Tesla, SpaceX, Dogecoin");

  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Head>
        <title>Linkify</title>
        <meta name="description" content="Open Source Link Tree alternative" />
        <link rel="icon" href="./logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="absolute top-5 right-5">
        <button
          className="border p-px inline-flex items-center justify-center border-neutral-500 rounded-lg focus:outline-2 focus:outline-transparent 
  focus:ring transition-all ease-in-out duration-200 transform focus:border-transparent dark:focus:ring-indigo-400 focus:ring-indigo-700"
          onClick={themeHandler}
        >
          {theme === "light" ? (
            <>
              <MoonIcon className="w-8 h-8 dark:text-neutral-300 text-neutral-700" />
              <span className="sr-only">Dark</span>
            </>
          ) : (
            <>
              <SunIcon className="w-8 h-8 dark:text-neutral-300 text-neutral-700" />
              <span className="sr-only">Light</span>
            </>
          )}
        </button>
      </div>
      <section
        className="lg:py-20 sm:py-16 py-12 dark:bg-neutral-900 bg-neutral-200 dark:text-neutral-100 text-neutral-800 min-h-screen
      dark:selection:bg-indigo-400 selection:bg-indigo-700 dark:selection:text-neutral-800 selection:text-neutral-200 dark:selection:text-neutral-800 selection:text-neutral-200"
      >
        <div className="max-w-5xl mx-auto lg:px-8 sm:px-6 px-4">
          <div className="text-center">
            <div>
              <div className="w-40 h-40 mx-auto relative cursor-pointer">
                <Image
                  src={pp}
                  className="rounded-full"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="mt-5 text-2xl font-bold">{name}</h2>
              <p className="mt-3">{title}</p>
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
              <button
                className="py-4 border rounded-lg w-full dark:bg-neutral-200 bg-neutral-800 text-neutral-200 dark:text-neutral-800 font-semibold text-lg hover:bg-zinc-100 transition-all ease-in-out transform duration-200 
            focus:outline-2 focus:outline-transparent focus:border-transparent focus:ring focus:ring-indigo-500 hover:-translate-y-1"
              >
                Twitter
              </button>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="pointer-events-none fixed top-0 left-0 z-50 inline-block h-full w-full translate-y-0 overflow-hidden align-middle opacity-25 brightness-[70%] contrast-[30%] 
      filter"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".85"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </>
  );
}
