"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const GoBackbtn = () => {
  return (
    <Link className="text-white w-36 text-lg mx-3 px-5 py-2 rounded-xl mt-5" href="/">
      <FaArrowLeft className="inline-block mr-2 text-white" />
      Go Back
    </Link>
  );
};

export default GoBackbtn;
