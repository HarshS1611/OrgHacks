"use client";

/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import HackathonManager from "../../hardhat/artifacts/contracts/HackathonManager.sol/HackathonManager.json";
import { contract_add } from "../../hardhat/config";
import { ethers } from "ethers";
import Web3 from "web3";
import Web3Modal from "web3modal";
import HackathonCard from "~~/components/HackathonCard";
import Navbar from "~~/components/Navbar";
import { useApi, useAccount } from '@gear-js/react-hooks';
// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";

const Home = () => {
  // const { address: connectedAddress } = useAccount();
  const [hackathons, setHackathons] = useState([]);
  useEffect(() => {
    const fetchHackathons = async () => {

      // If MetaMask is not connected, use Web3Modal to connect
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();

      // Using ethers.js for smart contract interaction
      const provider = new ethers.providers.Web3Provider(connection);
      const resp = new ethers.Contract(contract_add, HackathonManager.abi, provider);
      const tx = await resp.getAllHackathons();
      console.log(tx);
      setHackathons(tx);
    };
    fetchHackathons();
  }, []);

  return (
    <main>
      <Navbar />
      <div className="flex flex-col">
        <h1 className="text-white mx-20 text-4xl font-bold mt-5 mb-0.5">All Hackathons</h1>
        <div className="flex flex-wrap justify-start mx-20 gap-x-5 items-center">
          <button className={`px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 bg-white text-black`}>All</button>
          <button className={`px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 bg-neutral-700 text-white`}>
            Featured
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-2">
            {hackathons.map((hackathon, index) => (
              <HackathonCard index={index} props={hackathon} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
