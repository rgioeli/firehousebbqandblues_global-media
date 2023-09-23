import Image from "next/image";
import Header from "./_global_components/Header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ActionButtons from "./components/ActionButtons";

export default function Home() {
  return (
    <main className={`bg-[#111] overflow-x-hidden text-white`}>
      {/** Navbar */}
      <Navbar />

      {/** Banner */}
      <Banner />

      {/** Bottom Content */}
      <div className="mx-auto max-w-6xl py-5 px-2.5">
        {/** Action Buttons */}
        <ActionButtons />

        {/** Header */}
        <Header
          header="Menu"
          subHeader="Smokin' Selections: BBQ Delights Await!"
          styles="py-5"
        />
        {/** Grid Menu */}
        <Menu />
      </div>
    </main>
  );
}
