import React from "react";
import { FC } from "react";
import Link from "next/link";

// import Image from "next/image";

// import { useRouter } from "next/router";

// const ModelCard: FC<{ model: any }> = ({ model }) => {
const HackathonCard: FC = () => {
  return (
    <div className="relative bg-[#242731] w-64 sm:w-auto rounded-[20px] shadow-xl">
      <div className="flex flex-col">
        <div className="flex items-center justify-start mx-5 mt-1.5 gap-x-5">
          <div className="flex flex-col">
            <h4 className={`text-base font-medium mt-2 text-[#B2B4C6]`}>EthIndia</h4>
            <div className="flex items-center gap-x-2 my-1.5">
              <span className={`text-xs font-medium text-white bg-gray-700 px-3 py-1 rounded-lg`}>Blockchain</span>
              <span className={`text-xs font-medium text-white bg-gray-700 px-3 py-1 rounded-lg`}>
                <div className="flex gap-x-2 items-center">
                  {/* <Image src="/assets/demo-icon.svg" width={15} height={15} alt="demo" /> */}
                  <span>Registration open</span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-[#2B2F3D] mx-5" />
        <p className="text-[#B2B4C6] text-sm px-5">
          This is the short description of the hackathon. It should be a maximum of 3 lines. This is the short
          description
        </p>
        <div className="flex items-center gap-x-3.5 mx-5">
          <p className="flex gap-x-1 text-[#B2B4C6] text-xs">Voters: 3.2k</p>
        </div>
        <p className="flex gap-x-1 text-[#B2B4C6] text-xs mx-5 my-1.5">
          Organized by:
          <span className="text-blueLight font-medium">Devfolio</span>
        </p>
      </div>
      <Link
        href={`/details/1`}
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
