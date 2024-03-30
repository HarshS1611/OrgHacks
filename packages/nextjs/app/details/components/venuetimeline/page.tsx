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
        <span className="absolute bg-green-300 flex items-center justify-center w-10 h-10 rounded-full -start-5">
          <p className="bg-green-300 text-white rounded-full px-3 py-1">1</p>
        </span>
        <details className="ml-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <summary className="flex justify-between">
            <div className="mb-4">Big Hall</div>
            <div className="mx-2 flex w-10 items-center justify-center">
              <IoIosArrowDown />
            </div>
          </summary>
          <p>
            Big Hall will be situated in the center of the city with state of the art facilities, modern tech, etc..
          </p>
          <p>Capacity: 2000</p>
        </details>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute bg-green-300 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
          <p className="bg-green-300 text-white rounded-full px-3 py-1">2</p>
        </span>
        <details className="ml-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <summary className="flex justify-between">
            <div className="mb-4">Medium Hall</div>
            <div className="mx-2 flex w-10 items-center justify-center">
              <IoIosArrowDown />
            </div>
          </summary>
          <p>
            Medium Hall will be situated in the center of the city with state of the art facilities, modern tech, etc..
          </p>
          <p>Capacity: 1000</p>
        </details>
      </li>
      <li className="ms-6">
        <span className="absolute bg-green-300 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
          <p className="bg-green-300 text-white rounded-full px-3 py-1">1</p>
        </span>
        <details className="ml-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <summary className="flex justify-between">
            <div className="mb-4">Small Hall</div>
            <div className="mx-2 flex w-10 items-center justify-center">
              <IoIosArrowDown />
            </div>
          </summary>
          <p>
            Small Hall will be situated in the center of the city with state of the art facilities, modern tech, etc..
          </p>
          <p>Capacity: 500</p>
        </details>
      </li>
    </ol>
  );
};

export default VenueTimeline;
