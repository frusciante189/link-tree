import React, { useState } from "react";
import Image from "next/image";
import pp from "../public/pp.jpg";
import Head from "next/head";

export default function Home() {
  const [name, setName] = useState("Elon Musk");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("Tesla, SpaceX, Dogecoin");

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
      </Head>
      <section className="lg:py-20 sm:py-16 py-12">
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
                className="py-4 border rounded-lg w-full bg-zinc-200 hover:bg-zinc-100 transition-all ease-in-out transform duration-200 
            focus:outline-2 focus:outline-transparent focus:border-transparent focus:ring focus:ring-indigo-500 hover:-translate-y-px"
              >
                Twitter
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
