// components/Question.js
import React from "react";
import Card from "../card/page";
import FoodCard from "../foodCard/page";

interface QuestionProps {
  question: string;
  options: string[];
  onOptionSelect: (option: string) => void;
}

const FoodQuestion: React.FC<QuestionProps> = ({question, options, onOptionSelect }) => {
  return (
    <div className="question flex flex-col h-screen items-center">
      <h1 className="text-2xl mt-5 font-bold mb-2">{question}</h1>
      <div className="flex gap-6 items-center h-full">
        <FoodCard title={options[0]} map={options[2]} onClick={() => onOptionSelect(options[0])} />
        <span className="text-2xl font-bold">OR</span>
        <FoodCard title={options[1]} map={options[3]} onClick={() => onOptionSelect(options[1])} />
      </div>
    </div>
  );
};

export default FoodQuestion;
