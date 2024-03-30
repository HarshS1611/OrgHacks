// components/Card.js
import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  map: string;
  onClick: () => void;
}

const MiscCard: React.FC<CardProps> = ({ title, map, onClick }) => {
  return (
    <div
      className="relative cursor-pointer mx-6 px-2 py-4 bg-[#242731] h-max w-64 sm:w-auto rounded-[20px] shadow-xl"
      onClick={onClick}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-start mx-5 mt-1.5 gap-x-5">
          <div className="flex flex-col">
            <h4 className={`text-lg font-medium mt-2 text-[#B2B4C6]`}>{title}</h4>
           
          </div>
        </div>
        <hr className="border-[#2B2F3D] mx-5" />
        <p className="text-[#B2B4C6] text-md px-5">
          This is the short description of the hackathon. It should be a maximum of 3 lines. This is the short
          description
        </p>
        <div className="flex items-center gap-x-3.5 mx-5">
          <p className="flex gap-x-1 text-[#B2B4C6] text-md">Voters: 3.2k</p>
        </div>
        <p className="flex gap-x-1 text-[#B2B4C6] text-md mx-5 my-1.5">
          Organized by:
          <span className="text-blueLight font-medium">Devfolio</span>
        </p>
      </div>
      <div className="flex items-center w-full">
        <img className=" px-4 w-[700px] h-[300px]" src={map} alt="image" />
      </div>
    </div>
  );
};

export default MiscCard;
