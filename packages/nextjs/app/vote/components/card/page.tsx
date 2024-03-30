"use client";

// components/Card.js
import React, { useState } from "react";
import Link from "next/link";
import HackathonManager from "../../../../../hardhat/artifacts/contracts/HackathonManager.sol/HackathonManager.json";
import { contract_add } from "../../../../../hardhat/config";
import { ethers } from "ethers";
import Web3 from "web3";
import Web3Modal from "web3modal";

interface CardProps {
  title: string;
  map: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, map, onClick }) => {
  const [voteCount, setVoteCount] = useState(0);
  const handleVoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Parse the input value as a number and update the voteCount state
    const newVoteCount = parseInt(event.target.value, 10);
    setVoteCount(newVoteCount);
  };
  const vote = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const web3 = new Web3(connection);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0]; // Assuming you want the first account

    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const jobPortal = new ethers.Contract(contract_add, HackathonManager.abi, signer);

    const balance = await jobPortal.balanceOf(account);

    const approval = await jobPortal.approve("0x5ED7019fCA0E2eD33167c2792c07d1751a326873", balance);
    const tx = await jobPortal.transferTokensToContract(ethers.utils.parseEther(voteCount.toString()));
    await tx.wait();
    console.log(tx);

    onClick();
  };

  return (
    <div className="relative cursor-pointer mx-6 px-2 py-4 bg-[#242731] h-max w-64 sm:w-auto rounded-[20px] shadow-xl">
      <div className="flex flex-col">
        <div className="flex items-center justify-start mx-5 mt-1.5 gap-x-5">
          <div className="flex flex-col">
            <h4 className={`text-lg font-medium mt-2 text-[#B2B4C6]`}>{title}</h4>
            <div className="flex items-center gap-x-2 my-1.5">
              <span className={`text-md font-medium text-white bg-gray-700 px-3 py-1 rounded-lg`}>Blockchain</span>
              <span className={`text-md font-medium text-white bg-gray-700 px-3 py-1 rounded-lg`}>
                <div className="flex gap-x-2 items-center">
                  {/* <Image src="/assets/demo-icon.svg" width={15} height={15} alt="demo" /> */}
                  <span>Registration open</span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-[#2B2F3D] mx-5" />
        <p className="text-[#B2B4C6] text-md px-5">
          This is the short description of the hackathon. It should be a maximum of 3 lines. This is the short
          description
        </p>
        <div className="flex items-center gap-x-3.5 mx-5">
          <p className="flex gap-x-1 text-[#B2B4C6] text-md">Voters: 3.2k</p>
        </div>
        <p className="flex gap-x-1 text-[#B2B4C6] text-md mx-5 my-1.5">
          Organized by:
          <span className="text-blueLight font-medium">Devfolio</span>
        </p>
        <div className="flex items-center mx-6">
          <input
            type="text"
            className="flex-grow p-2 rounded-sm bg-white"
            placeholder="Vote your xHack tokens"
            onChange={handleVoteChange}
          ></input>
          <button className="ml-2 px-4 py-2 rounded-sm bg-blue-500 text-white" onClick={vote}>
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
