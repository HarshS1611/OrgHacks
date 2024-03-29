"use client";

import React, { useState } from "react";
import VenueTimeline from "../components/venuetimeline/page";

const Details = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="m-4 border-b border-gray-200 dark:border-gray-700">
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
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "dashboard" ? "" : "hidden"}`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
            classNamees to control the content visibility and styling.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "settings" ? "" : "hidden"}`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
            classNamees to control the content visibility and styling.
          </p>
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
    </>
  );
};

export default Details;
