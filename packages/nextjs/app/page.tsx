"use client";

// import Link from "next/link";
import type { NextPage } from "next";
import HackathonCard from "~~/components/HackathonCard";
import Navbar from "~~/components/Navbar";

// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  return (
    <main>
      <Navbar />
      <div className="flex flex-col">
        <h1 className="text-white mx-20 text-4xl font-bold mt-5 mb-0.5">
          {/* {activeFilter === "all" ? "All" : activeFilter === "featured" ? "Featured" : "Ready to try"} Models */}
          All Hackathons
        </h1>
        <div className="flex flex-wrap justify-start mx-20 gap-x-5 items-center">
          <button
            // onClick={() => handleFilter("all")}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 bg-white text-black`}
          >
            All
          </button>
          <button
            // onClick={() => handleFilter("featured")}
            className={`px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 bg-neutral-700 text-white`}
          >
            Featured
          </button>
          {/* <button
          onClick={() => handleFilter("tryitout")}
          className={`px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${
            activeFilter === "tryitout" ? "bg-white text-black" : "bg-neutral-700 text-white"
          }`}
        >
          Try it out
        </button> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-2">
            {/* {currentModels.map((model: ModelData) => (
            <ModelCard key={model._id} model={model} />
          ))} */}
            <HackathonCard />
            <HackathonCard />
            <HackathonCard />
            <HackathonCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
