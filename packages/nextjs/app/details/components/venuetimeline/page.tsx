"use strict";

import React, { useState } from "react";
import { GiIndianPalace } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const VenueTimeline = () => {
  const [activeAccordion, setActiveAccordion] = useState("accordion-collapse-body-1");

  const toggleAccordion = (id: any) => {
    setActiveAccordion(id);
  };
  return (
    <div className="border-[1px] border-gray-500 w-full rounded-xl bg-gray-800 p-10">
      <ol className="relative border-s-2 border-gray-200 dark:border-blue-500  border-dashed">
        <li className="mb-10 ms-6 w-64">
          <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5">
            <div className="bg-green-200 w-20 rounded-full p-1">
              <div className="bg-green-400 rounded-full p-1">
                <div className="bg-green-600 text-center text-sm text-white font-medium rounded-full p-[0.8px]">2</div>
              </div>
            </div>
          </span>
          <details className="ml-4 p-3 bg-white border w-80 border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <summary className="flex justify-between">
              <div className="flex gap-x-2 text-[17px]">
                <div className="mb-4">Big Hall</div>
                <div className="mt-1">
                  <GiIndianPalace />
                </div>
              </div>
              <div className="mx-2 flex w-10 items-center justify-center">
                <IoIosArrowDown />
              </div>
            </summary>
            <p>Big Hall will be one with best quality with state of the art facilities, resting area, etc..</p>
            <p>2k+</p>
          </details>
        </li>
        <li className="mb-10 ms-6 w-64">
          <span className="absolute bg-slate-600 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
            <p className="bg-slate-600 text-white rounded-full px-3 py-1">2</p>
          </span>
          <details className="ml-4 p-3 bg-white border  w-80 border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <summary className="flex justify-between">
              <div className="mb-4">Average Venue</div>
              <div className="mx-2 flex w-10 items-center justify-center">
                <IoIosArrowDown />
              </div>
            </summary>
            <p>Average venue will be one with decent quality average standards, decent venue, etc..</p>
            <p>1k+</p>
          </details>
        </li>
        <li className="ms-6 w-64">
          <span className="absolute bg-slate-600 flex items-center justify-center w-10 h-10 rounded-full -start-5   ">
            <p className="bg-slate-600 text-white rounded-full px-3 py-1">1</p>
          </span>
          <details className="ml-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <summary className="flex justify-between">
              <div className="mb-4">Mediocre Venue</div>
              <div className="mx-2 flex w-10 items-center justify-center">
                <IoIosArrowDown />
              </div>
            </summary>
            <p>Mediocre venue will be one with mediocre quality, average standards, just enough resources, etc..</p>
            <p>500</p>
          </details>
        </li>
      </ol>
    </div>
  );
};

export default VenueTimeline;
