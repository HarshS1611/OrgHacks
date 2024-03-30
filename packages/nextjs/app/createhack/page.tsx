"use client";

import React from "react";
import { useState } from "react";
import HackathonManager from "../../../hardhat/artifacts/contracts/HackathonManager.sol/HackathonManager.json";
import { contract_add } from "../../../hardhat/config";
import { ethers } from "ethers";
import Web3 from "web3";
import Web3Modal from "web3modal";

const CreateHack = () => {
  // console.log(HackathonManager)
  const intialHackData = {
    _name: "",
    _organisedby: "",
    _description: "",
    _date: "",
    _city: "",
    _exp: "yes",
    _category: "",
  };

  const [hackData, setHackData] = useState(intialHackData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(modelData)
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const web3 = new Web3(connection);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0]; // Assuming you want the first account

    // Using ethers.js for smart contract interaction
    console.log(ethers);
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const jobPortal = new ethers.Contract(contract_add, HackathonManager.abi, signer);
    const tx = await jobPortal.createHackathon(
      hackData._name,
      hackData._organisedby,
      hackData._description,
      hackData._date,
      hackData._city,
      hackData._exp,
      hackData._category,
      { value: ethers.utils.parseUnits("4", "wei") },
    );
    await tx.wait();

    // Example of using web3.js to get the user's account address
    console.log("Account address:", account, jobPortal);

    // Example of using ethers.js to interact with the smart contract
    // console.log("Project created!", jobPortal);
  };

  return (
    <>
      <div
        className="flex flex-col items-center 
                justify-center"
      >
        <form className="bg-[#1c212f] w-8/12 h-fit rounded-xl p-5 mt-3" onSubmit={handleSubmit}>
          <h2 className="font-bold text-white text-2xl text-center">List Hackathon</h2>
          <div className="flex relative m-0">
            <input
              type="text"
              placeholder="Name"
              value={hackData._name}
              onChange={e => setHackData({ ...hackData, _name: e.target.value })}
              id="username"
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              required
            />
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              placeholder="City"
              value={hackData._city}
              onChange={e => setHackData({ ...hackData, _city: e.target.value })}
              id="username"
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              required
            />
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              placeholder="Date"
              value={hackData._date}
              onChange={e => setHackData({ ...hackData, _date: e.target.value })}
              id="username"
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              required
            />
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              className="block h-20 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-3 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder="Description"
              value={hackData._description}
              onChange={e => setHackData({ ...hackData, _description: e.target.value })}
            />
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              className="block h-15 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder="Category"
              value={hackData._category}
              onChange={e => setHackData({ ...hackData, _category: e.target.value })}
            />
            {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder="Organized By"
              value={hackData._organisedby}
              onChange={e => setHackData({ ...hackData, _organisedby: e.target.value })}
            />
          </div>

          {/* Button to submit the form */}
          <div className="flex align-center justify-center">
            <button
              type="submit"
              className="block bg-[#0284c7] hover:bg-blue-700 text-white text-lg font-bold rounded-xl px-2 py-3 mt-5 mb-2 mr-10 w-full focus:outline-none transition transform duration-100 ease-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateHack;
