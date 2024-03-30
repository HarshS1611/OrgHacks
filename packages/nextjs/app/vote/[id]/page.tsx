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
      options: ["Smriti Upvan", "Hotel Taj",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.8302719674755!2d80.919590638875!3d26.78708849418054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfbf54d989c0d%3A0xa1252f4a2636da19!2sSmriti%20Upvan%2C%20Jalvayu%20Vihar%2C%20Ashiyana%2C%20Lucknow%2C%20Uttar%20Pradesh%20226012!5e0!3m2!1sen!2sin!4v1711821915781!5m2!1sen!2sin",
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6339548925434!2d80.9709969761558!3d26.85159247668364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd3a99fba681%3A0xe82b751c187af53b!2sTaj%20Mahal%20Lucknow!5e0!3m2!1sen!2sin!4v1711822134632!5m2!1sen!2sin'],
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
              className={`inline-block p-4 rounded-t-lg ${activeTab === "profile" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
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
              className={`inline-block p-4 rounded-t-lg  ${activeTab === "dashboard" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
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
