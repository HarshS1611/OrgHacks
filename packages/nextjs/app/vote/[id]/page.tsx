"use client";

import React, { useState } from "react";
import Question from "../components/questions/page";
import GoBackbtn from "~~/components/GoBack";

const Home = () => {
  const [currentVenueQuestion, setCurrentVenueQuestion] = useState(0);
  const [currentFoodQuestion, setCurrentFoodQuestion] = useState(0);

  const [selectedVenueOption, setSelectedVenueOption] = useState<string[]>([]);
  const [selectedFoodOption, setSelectedFoodOption] = useState<string[]>([]);

  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  const VenueQuestions = [
    {
      question: "Choose an option:",
      options: ["Option 1", "Option 2"],
    },
    {
      question: "Question 2:",
      options: ["Option A", "Option B"],
    },
    {
      question: "Question 3:",
      options: ["Option X", "Option Y"],
    },
    {
      question: "Question 4:",
      options: ["Option P", "Option Q"],
    },
  ];
  const FoodQuestions = [
    {
      question: "Choose an option:",
      options: ["Option 1", "Option 2"],
    },
    {
      question: "Question 2:",
      options: ["Option A", "Option B"],
    },
    {
      question: "Question 3:",
      options: ["Option X", "Option Y"],
    },
    {
      question: "Question 4:",
      options: ["Option P", "Option Q"],
    },
  ];

  const handleVenueOptionSelect = (option: any) => {
    setSelectedVenueOption([...selectedVenueOption, option]);
    setCurrentVenueQuestion(currentVenueQuestion + 1);
  };
  const handleFoodOptionSelect = (option: any) => {
    setSelectedFoodOption([...selectedFoodOption, option]);
    setCurrentFoodQuestion(currentFoodQuestion + 1);
  };
  console.log(selectedFoodOption, selectedVenueOption);

  return (
    <>
      <GoBackbtn />
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
        </ul>
      </div>
      <div className="m-5" id="default-tab-content">
        <div
          className={`p-4 rounded-lg  ${activeTab === "profile" ? "" : "hidden"}`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {currentVenueQuestion >= VenueQuestions.length ? (
            <>
              <div className="text-center mt-10 text-2xl font-bold">You have completed the questions.</div>
            </>
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <Question
                options={VenueQuestions[currentVenueQuestion].options}
                onOptionSelect={handleVenueOptionSelect}
              />
            </div>
          )}
        </div>
        <div
          className={`p-4 rounded-lg  ${activeTab === "dashboard" ? "" : "hidden"}`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          {currentFoodQuestion >= FoodQuestions.length ? (
            <>
              <div className="text-center mt-10 text-2xl font-bold">You have completed the questions.</div>
            </>
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <Question options={FoodQuestions[currentFoodQuestion].options} onOptionSelect={handleFoodOptionSelect} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
