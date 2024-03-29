"use strict";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const VenueTimeline = () => {
  const [activeAccordion, setActiveAccordion] = useState("accordion-collapse-body-1");

  const toggleAccordion = (id: any) => {
    setActiveAccordion(id);
  };
  return (
    <ol className="relative border-s-2 border-gray-200 dark:border-blue-500  border-dashed">
      <li className="mb-10 ms-6">
        <span className="absolute bg-green-300 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
          <p className="bg-green-300 text-white rounded-full px-3 py-1">1</p>
        </span>
        <details className="ml-4 px-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <div className="mb-4">venue</div>
          <summary className="flex justify-between">
            <p>venue description</p>
            <div className="mx-2 flex w-10 items-center justify-center">
              <IoIosArrowDown />
            </div>
          </summary>
        </details>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute bg-green-300 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
          <p className="bg-green-300 text-white rounded-full px-3 py-1">2</p>
        </span>
        <details className="px-4 ml-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <div className="mb-4">venue</div>
          <summary className="flex justify-between">
            <p>venue description</p>
            <div className="mx-2 flex w-10 items-center justify-center">
              <IoIosArrowDown />
            </div>
          </summary>
        </details>
      </li>
      <li className="ms-6">
        <span className="absolute bg-green-300 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
          <p className="bg-green-300 text-white rounded-full px-3 py-1">3</p>
        </span>
        <details className="px-4 ml-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <div className="mb-4">venue</div>
          <summary className="flex justify-between">
            <p>venue description</p>
            <div className="mx-2 flex w-10 items-center justify-center">
              <IoIosArrowDown />
            </div>
          </summary>
        </details>
      </li>
    </ol>
  );
};

export default VenueTimeline;
