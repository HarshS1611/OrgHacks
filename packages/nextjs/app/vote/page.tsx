"use client";

import React, { useState } from "react";
import Question from "./components/questions/page";

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

  return <Question options={questions[currentQuestion].options} onOptionSelect={handleOptionSelect} />;
};

export default Home;
