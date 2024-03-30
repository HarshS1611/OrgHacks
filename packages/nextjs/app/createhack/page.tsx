"use client";

import React from "react";
import { useState } from "react";

const CreateHack = () => {
  const intialHackData = {
    hackName: "",
    description: "",
    city: "",
    category: "",
    date: "",
    experience: "",
    organizedBy: "",
  };

  const [hackData, setHackData] = useState(intialHackData);

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     // console.log(modelData)
  //     const res = await fetch("/api/addModelData", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(modelData),
  //     });
  //     const data = await res.json();
  //     if (data.message == "Data saved successfully!") {
  //       toast.success(data.message, { position: "top-right" });
  //       setTimeout(() => {
  //         router.push("/models");
  //       }, 4000);
  //       setModelData(initialModelData);
  //     } else {
  //       toast.error(data.message, { position: "top-center" });
  //     }
  //   };

  return (
    <>
      <div
        className="flex flex-col items-center 
                justify-center"
      >
        <form
          className="bg-[#1c212f] w-8/12 h-fit rounded-xl p-5 mt-3"
          // onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-white text-2xl text-center">List Hackathon</h2>
          <div className="flex relative m-0">
            <input
              type="text"
              placeholder="Name"
              value={hackData.hackName}
              onChange={e => setHackData({ ...hackData, hackName: e.target.value })}
              id="username"
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              required
            />
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              placeholder="City"
              value={hackData.city}
              onChange={e => setHackData({ ...hackData, city: e.target.value })}
              id="username"
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              required
            />
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              placeholder="City"
              value={hackData.date}
              onChange={e => setHackData({ ...hackData, date: e.target.value })}
              id="username"
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              required
            />
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              className="block h-20 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-3 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder="Description"
              value={hackData.description}
              onChange={e => setHackData({ ...hackData, description: e.target.value })}
            />
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              className="block h-15 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder="Category"
              value={hackData.category}
              onChange={e => setHackData({ ...hackData, category: e.target.value })}
            />
            {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
          </div>
          <div className="flex relative m-0">
            <input
              type="text"
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder="Organized By"
              value={hackData.organizedBy}
              onChange={e => setHackData({ ...hackData, organizedBy: e.target.value })}
            />
          </div>

          {/* Button to submit the form */}
          <div className="flex align-center justify-center">
            <button
              type="submit"
              className="block bg-[#0284c7] hover:bg-blue-700 text-white text-lg font-bold rounded-xl px-2 py-3 mt-5 mb-2 mr-10 w-full focus:outline-none transition transform duration-100 ease-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateHack;
