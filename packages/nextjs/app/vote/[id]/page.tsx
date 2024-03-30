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
      options: ["Smriti Upvan", "Hotel Taj","https://www.google.com/maps/place/Smriti+Upvan,+Jalvayu+Vihar,+Ashiyana,+Lucknow,+Uttar+Pradesh+226012/@26.7865567,80.921799,15.6z/data=!4m6!3m5!1s0x399bfbf54d989c0d:0xa1252f4a2636da19!8m2!3d26.7873044!4d80.9204281!16s%2Fg%2F11b8tf3lv5?entry=ttu", "https://www.google.com/maps/place/Taj+Mahal+Lucknow/@26.8515925,80.9709916,17z/data=!3m1!4b1!4m9!3m8!1s0x399bfd3a99fba681:0xe82b751c187af53b!5m2!4m1!1i2!8m2!3d26.8515925!4d80.9735719!16s%2Fg%2F1wnd_gt9?entry=ttu"],
    }
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
