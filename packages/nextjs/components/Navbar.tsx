"use client";

import React, { useEffect, useState } from "react";
import { FC } from "react";
import Link from "next/link";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { getUserRole } from "~~/app/login/vara_functions";

// import { useRouter } from "next/router";

const Navbar: FC = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  //   const router = useRouter();
  useEffect(() => {
    getAddress();
    getRole();
  }, []);

  const getAddress = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const web3 = new Web3(connection);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setAddress(account);
  };

  const getRole = async () => {
    setRole(await getUserRole());
  }

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
        <p className="text-white text-sm font-medium">{address} - {role}</p>
      </div>
    </header>
  );
};

export default Navbar;
