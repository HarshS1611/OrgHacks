"use client";

import React, { useState } from "react";
import FoodTimeline from "../components/foodtimeline/page";
import ModalForm from "../components/form/page";
import VenueTimeline from "../components/venuetimeline/page";
import GoBackbtn from "~~/components/GoBack";

const Details = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <GoBackbtn />
      <div className="bg-[#1a1e27] rounded-xl p-5 mt-7 mx-6">
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Name:</h3>

          <p className="text-sm md:ml-2 mt-1">EthMumbai</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Description:</h3>

          <p className="text-sm md:ml-2 mt-1">
            EthMumbai is a 36-hour hackathon that will test your endurance and creativity . Come showcase your skills
            and win exciting prizes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mx-2 my-2">
          <h3 className="text-lg font-semibold">Hackers:</h3>

          <p className="text-sm md:ml-2 mt-1">2.2k</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold">📌Venue:</h3>

          <p className="text-sm md:ml-2 mt-1">Mumbai, India</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Category:</h3>

          <p className="text-sm md:ml-2 mt-1">Blockchain</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Min level:</h3>

          <p className="text-sm md:ml-2 mt-1">Ninja</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="block max-w-sm px-5 py-2 bg-blue-500 rounded-lg shadow hover:bg-blue-600"
        >
          <h5 className="mb-2 text-base font-bold tracking-tight text-white">Stake</h5>
        </button>
      </div>
      <div className="m-4 border-b border-gray-100 dark:border-gray-600">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "profile" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
              }`}
              id="profile-tab"
              onClick={() => handleTabClick("profile")}
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === "profile"}
            >
              Venue
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg  ${
                activeTab === "dashboard" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
              }`}
              id="dashboard-tab"
              onClick={() => handleTabClick("dashboard")}
              role="tab"
              aria-controls="dashboard"
              aria-selected={activeTab === "dashboard"}
            >
              Food
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4  rounded-t-lg  ${
                activeTab === "settings" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
              }`}
              id="settings-tab"
              onClick={() => handleTabClick("settings")}
              role="tab"
              aria-controls="settings"
              aria-selected={activeTab === "settings"}
            >
              Become a sponsor
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4  rounded-t-lg  ${
                activeTab === "contacts" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
              }`}
              id="contacts-tab"
              onClick={() => handleTabClick("contacts")}
              role="tab"
              aria-controls="contacts"
              aria-selected={activeTab === "contacts"}
            >
              Sponsor Details
            </button>
          </li>
        </ul>
      </div>
      <div className="m-5" id="default-tab-content">
        <div
          className={`p-4 rounded-lg  ${activeTab === "profile" ? "" : "hidden"}`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <VenueTimeline />
          </div>
        </div>
        <div
          className={`p-4 rounded-lg  ${activeTab === "dashboard" ? "" : "hidden"}`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <div className="flex gap-x-7 text-sm text-gray-500 dark:text-gray-400">
            <FoodTimeline />
            <FoodTimeline />
          </div>
        </div>
        <div
          className={`p-4 rounded-lg ${activeTab === "settings" ? "" : "hidden"}`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
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
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "contacts" ? "" : "hidden"}`}
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
            classNamees to control the content visibility and styling.
          </p>
        </div>
      </div>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Details;
