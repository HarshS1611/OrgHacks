"use client";

import dynamic from "next/dynamic";
import { getUserRole, vsetUserRole } from "./vara_functions";

const TestComponent = () => {

    const handleButtonClick = (role: string) => {
        vsetUserRole(role);
    };

    return (
        <div className="mt-52">
            <h1 className="text-center text-5xl">Sign up as</h1>
            <div className="flex justify-center gap-x-36 mt-24">
                <button
                    className="bg-blue-500 text-white text-2xl p-14 rounded-3xl"
                    onClick={() => handleButtonClick("developer")}
                >
                    Developer
                </button>
                <button
                    className="bg-blue-500 text-white text-2xl p-14 rounded-3xl"
                    onClick={() => handleButtonClick("sponsor")}
                >
                    Sponsor
                </button>
                <button
                    className="bg-blue-500 text-white text-2xl p-14 rounded-3xl"
                    onClick={() => handleButtonClick("organiser")}
                >
                    Organizer
                </button>
            </div>
        </div>
    );
};

export default TestComponent;
