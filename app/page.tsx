"use client";

import Image from "next/image";
import firehouseData from "../items.json";
import { Montserrat } from "next/font/google";
import Header from "./_global_components/Header";

type FoodItem = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

const montserrat = Montserrat({ weight: "500", subsets: ["latin"] });
const backgroundColor = "#111";
const themeColorBackground = "bg-[#fff]";
const themeColorText = "text-[#111]";

export default function Home() {
  return (
    <main className={`bg-[#111] overflow-x-hidden text-white`}>
      <nav className="fixed top-0 z-50 w-full bg-[#0B0D12]/90 transition-opacity duration-200 text-white hidden md:flex md:flex-col">
        <div className="max-w-6xl mx-auto flex-col justify-between w-full py-5">
          {/* <div className="w-full flex justify-center pb-5 pt-2.5">
            <span className="text-sm">
              400 N 8th St, Richmond, IN 47374 | {"("}765{")"} 598-5440
            </span>
            <span></span>
          </div> */}

          <div className="flex justify-between items-center px-2.5">
            <h1 className="text-2xl font-bold">Firehouse BBQ & Blues</h1>
            <ul className="flex items-center gap-x-5 text-lg cursor-pointer">
              <li>Menu</li>
              <li>Gallery</li>
              <li>About</li>
              <li className={`bg-red-800 text-white p-2.5`}>Order Online</li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="h-[calc(100vh-50vh)] w-screen relative">
        <Image
          height={1080}
          width={1920}
          src="/images/bar-view.jpg"
          alt="firehouse bbq and blues"
          className="w-full h-full object-cover object-custom-between-top-and-middle"
          priority
        />
        <div className="absolute top-0 bg-black/10 w-full h-full z-20"></div>
      </div>
      <div className="mx-auto max-w-6xl py-5 px-2.5">
        <div className="flex items-center gap-x-2.5 pb-2.5">
          <button className="border px-2.5 py-1 rounded-lg border-white bg-red-800 text-white">
            Menu
          </button>
          <button className="border px-2.5 py-1 rounded-lg border-white hover:bg-gray-800 hover:text-white">
            Entertainment
          </button>
          <button className="border px-2.5 py-1 rounded-lg border-white hover:bg-gray-800 hover:text-white">
            Good Times
          </button>
        </div>
        <Header
          header="Menu"
          subHeader="Smokin' Selections: BBQ Delights Await!"
          styles="py-5"
        />
        {/** Grid Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-two-column-menu md:grid-cols-three-column-menu lg:grid-cols-four-column-menu gap-5 py-2.5">
          {firehouseData.menu.map((item: FoodItem) => {
            return (
              <div
                key={item.id}
                className={`flex flex-col  justify-between menu-item p-2.5 hover:bg-gray-100 transition-colors duration-300 shadow-custom-shadow rounded-md ${themeColorBackground} text-[#111]`}
              >
                <div>
                  <h1 className={`${montserrat.className} pb-2.5 font-bold`}>
                    {item.name}
                  </h1>
                  <div className="relative w-auto h-72">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="py-2.5 font-bold">${item.price}</h3>
                  <p className="pt-2.5">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-5">
          <Header
            header="Good Times"
            subHeader="Capturing the Rhythm of BBQ and Blues"
          />
          <div className="grid grid-cols-three-column-menu gap-5 py-5">
            {Array.from(Array(22)).map((_, index) => (
              <div
                className="shadow-custom-shadow p-2.5 rounded-md"
                key={index}
              >
                <div key={index} className="relative w-auto h-72">
                  <Image
                    src={`/images/memories/memory${index}.jpg`}
                    alt={"memory"}
                    fill
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
