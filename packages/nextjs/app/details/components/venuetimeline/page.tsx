"use strict";

import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const VenueTimeline = ({ hackers }) => {
  const [glowClasses1, setGlowClasses1] = useState(false);
  const [glowClasses2, setGlowClasses2] = useState(false);

  const [glowClasses3, setGlowClasses3] = useState(false);

  const progressPercentage = (hackers / 10) * 100;

  useEffect(() => {
    // Apply the glow class based on the number of hackers
    if (hackers >= 7) {
      setGlowClasses3(true);
      setGlowClasses2(false);
      setGlowClasses1(false);
    } else if (hackers >= 4) {
      setGlowClasses3(false);
      setGlowClasses2(true);
      setGlowClasses1(false);
    } else if (hackers >= 1) {
      setGlowClasses3(false);
      setGlowClasses2(false);
      setGlowClasses1(true);
    }
  }, [hackers]);

  return (
    <div className="border-[1px] border-gray-500 w-full rounded-xl bg-gray-800 p-10">
      <ol className="relative border-s-2 border-gray-200 dark:border-green-500 border-dashed">
        <li className="mb-10 ms-6 w-full">
          <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5">
            <div className={glowClasses3 ? `bg-green-200 w-20 rounded-full p-1` : `bg-slate-600 w-20 rounded-full p-1`}>
              <div className={glowClasses3 ? `bg-green-400 rounded-full p-1` : `bg-slate-600 rounded-full p-1`}>
                <div
                  className={
                    glowClasses3
                      ? `bg-green-600 text-center text-sm text-white font-medium rounded-full p-[0.8px]`
                      : `bg-slate-600 text-center text-sm text-white font-medium rounded-full p-[0.8px]`
                  }
                >
                  3
                </div>
              </div>
            </div>
          </span>
          <details className={glowClasses3 ? "ml-4 p-3 border w-full rounded-lg shadow-sm bg-gray-700 border-green-600 text-white" : "ml-4 p-3 border text-white rounded-lg shadow-sm bg-gray-700 border-gray-600"}>
            <summary className="flex items-center w-full justify-between">
              <div className="w-full">Big Hall - Upto 1000 Hackers</div>
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
        <li className="mb-10 ms-6 w-full">
          <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5">
            <div className={glowClasses2 ? `bg-green-200 w-20 rounded-full p-1` : `bg-slate-600 w-20 rounded-full p-1`}>
              <div className={glowClasses2 ? `bg-green-400 rounded-full p-1` : `bg-slate-600 rounded-full p-1`}>
                <div
                  className={
                    glowClasses2
                      ? `bg-green-600 text-center text-sm text-white font-medium rounded-full p-[0.8px]`
                      : `bg-slate-600 text-center text-sm text-white font-medium rounded-full p-[0.8px]`
                  }
                >
                  2
                </div>
              </div>
            </div>
          </span>
          <details className={glowClasses2 ? "ml-4 p-3 border rounded-lg shadow-sm bg-gray-700 border-green-600 text-white" : "text-white ml-4 p-3 border rounded-lg shadow-sm bg-gray-700 border-gray-600"}>
            <summary className="flex items-center justify-between">
              <div className="">Medium Hall - upto 500 hackers</div>
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
        <li className="ms-6 w-full">
          <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5">
            <div className={glowClasses1 ? `bg-green-200 w-20 rounded-full p-1` : `bg-slate-600 w-20 rounded-full p-1`}>
              <div className={glowClasses1 ? `bg-green-400 rounded-full p-1` : `bg-slate-600 rounded-full p-1`}>
                <div
                  className={
                    glowClasses1
                      ? `bg-green-600 text-center text-sm text-white font-medium rounded-full p-[0.8px]`
                      : `bg-slate-600 text-center text-sm text-white font-medium rounded-full p-[0.8px]`
                  }
                >
                  1
                </div>
              </div>
            </div>
          </span>
          <details className={glowClasses1 ? "ml-4 p-3 border rounded-lg shadow-sm bg-gray-700 border-green-600" : "ml-4 p-3 border rounded-lg shadow-sm bg-gray-700 border-gray-600"}>
            <summary className="flex items-center justify-between">
              <div className="text-white">Small Hall - upto 200 hackers</div>
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

export default VenueTimeline;
