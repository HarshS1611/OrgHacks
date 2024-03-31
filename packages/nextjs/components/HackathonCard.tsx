import React from "react";
import { FC } from "react";
import { useState } from "react";
import Link from "next/link";

// import Image from "next/image";

// import { useRouter } from "next/router";

// const ModelCard: FC<{ model: any }> = ({ model }) => {
const HackathonCard = ({ index, props }: any) => {
  const [status, setStatus] = useState("registration");

  console.log(props);

  return (
    <div className="relative bg-[#242731] w-64 sm:w-auto rounded-[20px] shadow-xl">
      <div className="flex flex-col">
        <div className="flex items-center justify-start mx-5 mt-1.5 gap-x-5">
          <div className="flex flex-col">
            <h4 className={`text-base font-medium mt-2 text-[#B2B4C6]`}>{props.name}</h4>
            <div className="flex items-center gap-x-2 my-1.5">
              <span className={`text-xs font-medium text-white bg-gray-700 px-3 py-1 rounded-lg`}>
                {props.category}
              </span>
              {/* <Image src="/assets/demo-icon.svg" width={15} height={15} alt="demo" /> */}
              {status === "registration" ? (
                <span className="bg-[#25a338] text-xs font-medium text-white px-3 py-1 rounded-lg">Registration</span>
              ) : status === "voting" ? (
                <span className=" bg-[#25306e] text-xs font-medium text-white px-3 py-1 rounded-lg">Ongoing</span>
              ) : (
                <span className="bg-[#5f1e29] text-xs font-medium text-white px-3 py-1 rounded-lg">Ended</span>
              )}
            </div>
          </div>
        </div>
        <hr className="border-[#2B2F3D] mx-5" />
        <p className="text-[#B2B4C6] text-sm px-5">{props.description}</p>
        <div className="flex items-center gap-x-3.5 mx-5">
          <p className="flex gap-x-1 text-[#B2B4C6] text-xs">Voters: {props[7].length}</p>
        </div>
        <p className="flex gap-x-1 text-[#B2B4C6] text-xs mx-5 my-1.5">
          Organized by:
          <span className="text-blueLight font-medium">{props.organisedby}</span>
        </p>
      </div>
      <Link
        href={
          status === "registration" ? `/details/${index}` : status === "voting" ? `/vote/${index}` : `/details/${index}`
        }
        //   onClick={() => {
        //     router.push(`/models/${model._id}`);
        //   }}
        className="flex text-sm text-white bg-[#0284c7] hover:bg-blue-600 font-medium px-4 py-1.5 rounded-lg w-max m-5"
      >
        View more
      </Link>
    </div>
  );
};

export default HackathonCard;
