"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HackathonManager from "../../../../hardhat/artifacts/contracts/HackathonManager.sol/HackathonManager.json";
import { contract_add } from "../../../../hardhat/config";
import ReferralCard from "../components/card/page";
import FoodTimeline from "../components/foodtimeline/page";
import ModalForm from "../components/form/page";
import { ethers } from "ethers";
import Web3 from "web3";
import Web3Modal from "web3modal";
import GoBackbtn from "~~/components/GoBack";
import SponsorHackModal from "~~/components/SponsorHackModal";
import SponsorCard from "../components/sponsorCard/page";

const Details = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hackDetails, setHackDetails] = useState({
    name: "EthMumbai",
    description:
      "EthMumbai is a 36-hour hackathon that will test your endurance and creativity . Come showcase your skills and win exciting prizes.",
    city: "Mumbai, India",
    category: "Blockchain",
    experience: "Ninja",
    organizedBy: "ETHGlobal",
    date: "12th August 2021",
    hackers: 2200,
  } as any);

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    //call the getHackathonDetails function here which comes from the smart contract
    const getHackDetails = async () => {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const resp = new ethers.Contract(contract_add, HackathonManager.abi, signer);
      const tx = await resp.getHackathonDetails(id);
      setHackDetails({
        name: tx[0],
        organizedBy: tx[1],
        description: tx[2],
        date: tx[3],
        city: tx[4],
        experience: tx[5],
        category: tx[6],
        hackers: tx[7].toNumber(),
      });
    };
    getHackDetails();
  }, []);

  const handleAddStake = async () => {
    // e.preventDefault();
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
    const resp = new ethers.Contract(contract_add, HackathonManager.abi, signer);
    const tx = await resp.joinHackathon(0, { value: ethers.utils.parseEther("0.002") });
    await tx.wait();

    // Example of using web3.js to get the user's account address
    console.log("Account address:", account, resp);
  };

  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    const fetchSponsors = async () => {
      // If MetaMask is not connected, use Web3Modal to connect
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();

      // Using ethers.js for smart contract interaction
      const provider = new ethers.providers.Web3Provider(connection);
      const resp = new ethers.Contract(contract_add, HackathonManager.abi, provider);
      const tx = await resp.getHackathonSponsors(id);
      console.log(tx);
      setSponsors(tx);
    };
    fetchSponsors();
  }, []);

  return (
    <>
      <GoBackbtn />
      <div className="bg-[#1a1e27] rounded-xl p-5 mt-7 mx-6">
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Name:</h3>

          <p className="text-sm md:ml-2 mt-1">{hackDetails.name}</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Description:</h3>

          <p className="text-sm md:ml-2 mt-1">{hackDetails.description}</p>
        </div>
        <div className="flex flex-col md:flex-row mx-2 my-2">
          <h3 className="text-lg font-semibold">Hackers:</h3>

          <p className="text-sm md:ml-2 mt-1">{hackDetails.hackers}</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold">📌City:</h3>

          <p className="text-sm md:ml-2 mt-1">{hackDetails.city}</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Category:</h3>

          <p className="text-sm md:ml-2 mt-1">{hackDetails.category}</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Min level:</h3>

          <p className="text-sm md:ml-2 mt-1">{hackDetails.category}</p>
        </div>
        <button
          onClick={handleAddStake}
          className="block max-w-sm px-5 py-2 bg-blue-500 rounded-lg shadow hover:bg-blue-600"
        >
          <h5 className="mb-2 text-base font-bold tracking-tight text-white">Stake</h5>
        </button>
      </div>
      <div className="m-4 border-b border-gray-100 dark:border-gray-600">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg ${activeTab === "details" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
                }`}
              id="profile-tab"
              onClick={() => handleTabClick("details")}
              role="tab"
              aria-controls="details"
              aria-selected={activeTab === "details"}
            >
              Details
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4  rounded-t-lg  ${activeTab === "sponsors" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
                }`}
              id="settings-tab"
              onClick={() => handleTabClick("sponsors")}
              role="tab"
              aria-controls="settings"
              aria-selected={activeTab === "sponsors"}
            >
              Sponsors
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg  ${activeTab === "sponsor" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
                }`}
              id="dashboard-tab"
              onClick={() => handleTabClick("sponsor")}
              role="tab"
              aria-controls="sponsor"
              aria-selected={activeTab === "sponsor"}
            >
              Sponsor Hackathon
            </button>
          </li>
        </ul>
      </div>
      <div className="m-5" id="default-tab-content">
        <div
          className={`p-4 rounded-lg  ${activeTab === "details" ? "text-blue-500" : "hidden"}`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <div className="flex gap-x-7 text-sm text-gray-500 dark:text-gray-400">
            <FoodTimeline hackers={hackDetails.hackers} />
            <FoodTimeline hackers={hackDetails.hackers} />
            <ReferralCard />
          </div>
        </div>
        <div
          className={`p-4 rounded-lg ${activeTab === "sponsors" ? "" : "hidden"}`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >

          <div className="flex gap-10 w-full">
            {sponsors.map((sponsor, index) => (
              <SponsorCard index={index} props={sponsor} />
            ))}
          </div>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "sponsor" ? "" : "hidden"}`}
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <div className="flex justify-center gap-10 mt-10 text-white">
            {/* <Form/> */}

            <button
              onClick={() => setIsModalOpen(true)}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Overall Sponsor</h5>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bounty Sponsor</h5>
            </button>
          </div>
        </div>
      </div>
      <SponsorHackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Details;
