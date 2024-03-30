"use client";

// components/Card.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import HackathonManager from "../../hardhat/artifacts/contracts/HackathonManager.sol/HackathonManager.json";
import { contract_add } from "../../hardhat/config";
import { ethers } from "ethers";
import { FaArrowLeft } from "react-icons/fa";
import Web3 from "web3";
import Web3Modal from "web3modal";

const GoBackbtn = () => {
  const [bal, setBal] = useState("");
  useEffect(() => {
    const fetchAccountBalance = async () => {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const web3 = new Web3(connection);
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0]; // Assuming you want the first account

      const provider = new ethers.providers.Web3Provider(connection);
      const resp = new ethers.Contract(contract_add, HackathonManager.abi, provider);

      const balance = await resp.balanceOf(account);
      console.log(balance)
      console.log(parseInt(balance._hex, 16) / 1000000000000000000);
      setBal((balance / 10 ** 18).toString());
    };
    fetchAccountBalance();
  }, []);
  return (
    <Link href="/">
      <div className="flex items-center justify-between text-white w-full text-lg mx-3 px-5 py-2 rounded-xl mt-5">
        <div className="flex gap-2">
          <div className="inline-block mr-2 text-white">
            <FaArrowLeft />
          </div>
          <div>Go Back</div>
        </div>
        <div className="text-2xl">Hackathon starts in 10 days</div>
        <div className="mx-4">Token Balance : {parseInt(bal, 16) / 1000000000000000000} XHACKS</div>
      </div>
    </Link>
  );
};

export default GoBackbtn;