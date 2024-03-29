"use client";

import React, { useState } from "react";
import { FC } from "react";
import Link from "next/link";

// import { useRouter } from "next/router";

const Navbar: FC = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const router = useRouter();

  return (
    <header className="bg-[#181c22] relative w-full z-50 px-10 md:px-24 sticky top-0 h-[72px] shadow-lg">
      <div className="mx-auto flex items-center justify-between py-4">
        <h1 className={`text-white text-xl font-bold cursor-pointer`}>
          <Link href="/">Hack DAO</Link>
        </h1>
        {/* {isMenuOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-navbarBg z-50">
            <nav className="flex flex-col items-center gap-y-5 py-5">
              <li className={`flex text-white text-sm font-medium cursor-pointer list-none`}>
                <Link href="/models" className={router.asPath == "/" ? "text-blueLight" : "text-white"}>
                  Home
                </Link>
              </li>
              <li className={`text-white text-sm font-medium cursor-pointer list-none`}>Explore AI Tools</li>
              <button
                onClick={() => {
                  router.push("/addmodel");
                }}
                className={`flex text-white bg-blueLight font-medium px-5 py-2.5 rounded-lg w-auto ${className}`}
              >
                Add model
              </button>
            </nav>
          </div>
        )} */}
        <nav className="hidden md:flex items-center gap-x-11"></nav>
        <p className="text-white text-sm font-medium">0x5a55fe7C4E1Eb4a14a2208FFeFDe42f7df2aA599</p>
      </div>
    </header>
  );
};

export default Navbar;
