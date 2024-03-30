import React, { useEffect, useState } from "react";
import { FC } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import Web3 from "web3";
import Web3Modal from "web3modal";
import HackathonManager from "../../../../../hardhat/artifacts/contracts/HackathonManager.sol/HackathonManager.json";
import { contract_add } from "../../../../../hardhat/config";
import { useParams } from "next/navigation";

const SponsorCard = ({ index, props }: any) => {
   console.log(props)
    return (
        <div className="relative bg-[#242731] w-[1000px] sm:w-auto rounded-[20px] shadow-xl">
            <div className="flex flex-col">
                <div className="flex items-center justify-start mx-5 mt-1.5 gap-x-5">
                    <div className="flex items-center justify-between w-full gap-10 flex-row">
                        <h4 className={`text-base font-medium text-[#B2B4C6]`}>Sponsor : {props.name}</h4>
                        <div className="flex items-center gap-x-2 my-1.5">
                          
                            <div className={`text-xs font-medium text-white bg-gray-700 px-3 rounded-lg`}>
                                <div className="flex gap-x-2 items-center">
                                    {/* <Image src="/assets/demo-icon.svg" width={15} height={15} alt="demo" /> */}
                                    <p>{(props[0]).substring(0,10)}....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-[#2B2F3D] mx-5" />
                <p className="text-[#B2B4C6] text-sm px-5">{props.description}</p>
                <div className="flex items-center gap-x-3.5 mx-5">
                    <p className="flex gap-x-1 text-[#B2B4C6] text-md">I will be giving {parseInt(props.lockedAmount._hex,16)/1000000000000000000} ETH if we achieve {parseInt(props.threshold._hex,16)} active participants.</p>
                </div>
               
            </div>
            <div
               
                //   onClick={() => {
                //     router.push(`/models/${model._id}`);
                //   }}
                className="flex text-sm text-white bg-[#0284c7] hover:bg-blue-600 font-medium px-4 py-1.5 rounded-lg w-max m-5"
            >
                About Sponsor
            </div>
        </div>
    );
};

export default SponsorCard;
