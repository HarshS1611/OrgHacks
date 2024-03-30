// components/Question.js
import React from "react";
import Card from "../card/page";

interface QuestionProps {
  question: string;
  options: string[];
  onOptionSelect: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onOptionSelect }) => {
  return (
    <div className="question flex flex-col h-screen items-center">
      <h1 className="text-2xl mt-5 font-bold mb-2">{question}</h1>
      <div className="flex gap-6 items-center h-full">
        <Card
          title={options[0]}
          map={options[2]}
          tag1={options[4]}
          tag2={options[6]}
          description={options[8]}
          voters={options[10]}
          onClick={() => onOptionSelect(options[0])}
        />
        <span className="text-2xl font-bold">OR</span>
        <Card
          title={options[1]}
          map={options[3]}
          tag1={options[5]}
          tag2={options[7]}
          description={options[9]}
          voters={options[11]}
          onClick={() => onOptionSelect(options[1])}
        />
      </div>
    </div>
  );
};

export default Question;
