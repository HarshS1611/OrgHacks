import React from "react";
import { FC } from "react";
import Link from "next/link";

const ReferralCard: FC = () => {
  return (
    <div className="relative bg-[#242731] w-[1900px] h-max rounded-[20px] shadow-xl">
      <div className="flex flex-col">
        <div className="flex items-center justify-start mx-5 mt-1.5 gap-x-5">
          <div className="flex flex-col">
            <h4 className={`text-base font-medium mt-2 text-[#B2B4C6]`}>Refer to your friends to get incentives</h4>
          </div>
        </div>
        <hr className="border-[#2B2F3D] mx-5" />
        <div className="bg-slate-600 rounded-xl mt-3 mx-5">
          <p className="text-[#B2B4C6] text-sm px-5">https://www.abc.com/invite/1234567890</p>
        </div>
      </div>
      {/* <Link
        href={`/details/1`}
        //   onClick={() => {
        //     router.push(`/models/${model._id}`);
        //   }}
        className="flex text-sm text-white bg-[#0284c7] hover:bg-blue-600 font-medium px-4 py-1.5 rounded-lg w-max m-5"
      >
        View more
      </Link> */}
    </div>
  );
};

export default ReferralCard;
