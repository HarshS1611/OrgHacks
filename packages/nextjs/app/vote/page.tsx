"use client";

import React, { useState } from "react";
import Question from "./components/questions/page";
import GoBackbtn from "~~/components/GoBack";

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const questions = [
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

  const handleOptionSelect = (option: any) => {
    setSelectedOption([...selectedOption, option]);
    setCurrentQuestion(currentQuestion + 1);
  };
  console.log(selectedOption);

  if (currentQuestion >= questions.length) {
    return <div className="text-center mt-10 text-2xl font-bold">You have completed the questions.</div>;
  }

  return (
    <>
      <GoBackbtn />
      <div className="bg-[#1a1e27] rounded-xl p-5 mt-7 mx-6">
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Name:</h3>

          <p className="text-sm md:ml-2 mt-1">Big Hall</p>
        </div>
        <div className="flex flex-col md:flex-row my-2">
          <h3 className="text-lg font-semibold md:ml-2">Description:</h3>

          <p className="text-sm md:ml-2 mt-1">
            Big Hall will be situated in the center of the city with all state of the art facilities
          </p>
        </div>
        <div className="flex flex-col md:flex-row mx-2 my-2">
          <h3 className="text-lg font-semibold">Expected accommodation:</h3>

          <p className="text-sm md:ml-2 mt-1">2k</p>
        </div>
      </div>
      <Question options={questions[currentQuestion].options} onOptionSelect={handleOptionSelect} />
    </>
  );
};

export default Home;
