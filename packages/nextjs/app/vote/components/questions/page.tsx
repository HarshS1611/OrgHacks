// components/Question.js
import React from "react";
import Card from "../card/page";

interface QuestionProps {
  options: string[];
  onOptionSelect: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ options, onOptionSelect }) => {
  return (
    <div className="question flex flex-col h-screen items-center">
      <h1 className="text-2xl mt-5 font-bold mb-2">Choose an option :</h1>
      <div className="flex gap-6 items-center h-full">
        <Card title={options[0]} onClick={() => onOptionSelect(options[0])} />
        <span className="text-2xl font-bold">OR</span>
        <Card title={options[1]} onClick={() => onOptionSelect(options[1])} />
      </div>
    </div>
  );
};

export default Question;
