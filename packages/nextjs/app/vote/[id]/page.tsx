"use client";

import React, { useState } from "react";
import FoodQuestion from "../components/foodQuestions/page";
import MiscQuestion from "../components/miscQuestion/page";
import Question from "../components/questions/page";
import GoBackbtn from "~~/components/GoBack2";

const Home = () => {
  const [currentVenueQuestion, setCurrentVenueQuestion] = useState(0);
  const [currentFoodQuestion, setCurrentFoodQuestion] = useState(0);
  const [currentMiscQuestion, setCurrentMiscQuestion] = useState(0);

  const [selectedVenueOption, setSelectedVenueOption] = useState<string[]>([]);
  const [selectedFoodOption, setSelectedFoodOption] = useState<string[]>([]);
  const [selectedMiscOption, setSelectedMiscOption] = useState<string[]>([]);

  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  const VenueQuestions = [
    {
      question: "Choose an option:",
      options: [
        "Smriti Upvan",
        "Hotel Taj",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.8302719674755!2d80.919590638875!3d26.78708849418054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfbf54d989c0d%3A0xa1252f4a2636da19!2sSmriti%20Upvan%2C%20Jalvayu%20Vihar%2C%20Ashiyana%2C%20Lucknow%2C%20Uttar%20Pradesh%20226012!5e0!3m2!1sen!2sin!4v1711821915781!5m2!1sen!2sin",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6339548925434!2d80.9709969761558!3d26.85159247668364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd3a99fba681%3A0xe82b751c187af53b!2sTaj%20Mahal%20Lucknow!5e0!3m2!1sen!2sin!4v1711822134632!5m2!1sen!2sin",
        "costs $300/day",
        "costs $700/day",
        "within 1km to the nearest metro",
        "great facilities",
        "A great place with medium level facilities, the pros being its closer to the city and well connected. Its cheaper and costs could be distributed better.",
        "High end experience but coming at a good amount of cost",
        "31",
        "11",
      ],
    },
  ];

  const FoodQuestions = [
    {
      question: "Choose an option: Starters",
      options: [
        "Paneer Tikka",
        "Aloo Tikki",
        "https://www.foodfusion.com/wp-content/uploads/2018/03/2-1.jpg",
        "https://i.ndtvimg.com/i/2015-07/appetizers-625_625x350_41436947402.jpg",
        "55",
        "70"
      ],
    },
    {
      question: "Choose an option: Main Course",
      options: [
        "Chicken Roast",
        "Paneer Masala",
        "https://images.immediate.co.uk/production/volatile/sites/2/2019/10/134_Roma_9780451497017_art_r1-facac84.jpg?quality=90&resize=700,466",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFG_wyivSLOB7tiozZjoBEjBAAwpQYegCFA&usqp=CAU",
        "500",
        "601"
      ],
    },
    {
      question: "Choose an option: Desserts",
      options: [
        "Cheese Cake",
        "Choco Cake",
        "https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/no-bake-buckeye-cheesecake-bars-lead-64b5646b6b074.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
        "20",
        "31"
      ],
    },
  ];

  const MiscQuestions = [
    {
      question: "Choose an option: ",
      options: [
        "Bean Bag",
        "Mattress",
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/bean-bag/h/y/t/xxxl-beanbag-beige-3xl-swiner-original-imagngtndfgjyfzp.jpeg?q=90&crop=false",
        "https://www.godrejinterio.com/imagestore/B2C/56101508SD05928/56101508SD05928_01_803x602.jpg",
        "23",
        "45"
      ],
    },
    {
      question: "Choose an option: ",
      options: [
        "Red Bull",
        "Sting",
        "https://api.freelogodesign.org/assets/blog/thumb/6457476a3cdd41118a31f81a20418b56_1176x840.jpg?t=638351341370000000",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTuszJ-RoSYsV-nJh0qOtvJK_2GSm7Cctog&usqp=CAU",
        "21",
        "55"
      ],
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
  const handleMiscOptionSelect = (option: any) => {
    setSelectedMiscOption([...selectedMiscOption, option]);
    setCurrentMiscQuestion(currentMiscQuestion + 1);
  };

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
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg  ${
                activeTab === "misc" ? " bg-slate-800 text-blue-500" : "hover:bg-slate-700"
              }`}
              id="misc-tab"
              onClick={() => handleTabClick("misc")}
              role="tab"
              aria-controls="misc"
              aria-selected={activeTab === "misc"}
            >
              Misclleneous
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
              <div className="text-center mt-10 text-2xl font-bold">You have voted for all the available options..</div>
            </>
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <Question
                question={VenueQuestions[currentVenueQuestion].question}
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
              <div className="text-center mt-10 text-2xl font-bold">You have voted for all the available options.</div>
            </>
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <FoodQuestion
                question={FoodQuestions[currentFoodQuestion].question}
                options={FoodQuestions[currentFoodQuestion].options}
                onOptionSelect={handleFoodOptionSelect}
              />
            </div>
          )}
        </div>
        <div
          className={`p-4 rounded-lg  ${activeTab === "misc" ? "" : "hidden"}`}
          id="misc"
          role="tabpanel"
          aria-labelledby="misc-tab"
        >
          {currentMiscQuestion >= MiscQuestions.length ? (
            <>
              <div className="text-center mt-10 text-2xl font-bold">You have voted for all the available options.</div>
            </>
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <MiscQuestion
                question={MiscQuestions[currentMiscQuestion].question}
                options={MiscQuestions[currentMiscQuestion].options}
                onOptionSelect={handleMiscOptionSelect}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
