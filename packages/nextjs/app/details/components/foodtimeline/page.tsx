"use strict";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FoodTimeline = () => {
  const [activeAccordion, setActiveAccordion] = useState("accordion-collapse-body-1");

  const toggleAccordion = (id: any) => {
    setActiveAccordion(id);
  };
  return (
    <div className="border-2 border-white w-full rounded-xl bg-gray-800 p-10">
      <ol className="relative border-s-2 border-gray-200 dark:border-blue-500  border-dashed">
        <li className="mb-10 ms-6 w-64">
          <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5">
            <div className="bg-blue-300 w-10 rounded-full p-2 relative">
              <div className="bg-blue-600 rounded-full p-2 shadow-lg shadow-blue-500/50"></div>
            </div>
          </span>
          <details className="ml-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <summary className="flex justify-between">
              <div className="mb-4">Best Caterer</div>
              <div className="mx-2 flex w-10 items-center justify-center">
                <IoIosArrowDown />
              </div>
            </summary>
            <p>
              Big Caterer will be one with best quality food with state of the art facilities, modern cuisines, etc..
            </p>
            <p>5 star</p>
          </details>
        </li>
        <li className="mb-10 ms-6 w-64">
          <span className="absolute bg-green-300 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
            <p className="bg-green-300 text-white rounded-full px-3 py-1">2</p>
          </span>
          <details className="ml-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <summary className="flex justify-between">
              <div className="mb-4">Average Caterer</div>
              <div className="mx-2 flex w-10 items-center justify-center">
                <IoIosArrowDown />
              </div>
            </summary>
            <p>
              Average Caterer will be one with decent quality food with above average standards, multi cuisines, etc..
            </p>
            <p>3.5 star</p>
          </details>
        </li>
        <li className="ms-6 w-64">
          <span className="absolute bg-green-300 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
            <p className="bg-green-300 text-white rounded-full px-3 py-1">1</p>
          </span>
          <details className="ml-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <summary className="flex justify-between">
              <div className="mb-4">Mediocre Caterer</div>
              <div className="mx-2 flex w-10 items-center justify-center">
                <IoIosArrowDown />
              </div>
            </summary>
            <p>Small Caterer will be one with mediocre quality food with average standards, limited cuisines, etc..</p>
            <p>2 star</p>
          </details>
        </li>
      </ol>
    </div>
  );
};

export default FoodTimeline;
