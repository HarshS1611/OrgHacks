"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const GoBackbtn = () => {
  return (
    <Link href="/">
      <div className="flex items-center text-white w-36 text-lg mx-3 px-5 py-2 rounded-xl mt-5">
        <div className="inline-block mr-2 text-white">
          <FaArrowLeft />
        </div>
        Go Back
      </div>
    </Link>
  );
};

export default GoBackbtn;
