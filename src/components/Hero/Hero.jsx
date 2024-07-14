import React from "react";
//import profilePhoto from "../../../public/1688311841974_p1MX0__please_credit[palette.fm] (1)-Photoroom 1.png";

const Hero = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center md:space-x-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              WELCOME TO MY PORTFOLIO
            </h1>
            <h2 className="mt-4 text-lg text-gray-600 font-bold ">
              Hello! My name is Chayakorn Prathumchai.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              I am passionate about developing web applications and have
              completed an intensive bootcamp that provided me with a strong
              foundation in software development. While I may not have direct
              work experience in this field, I am committed to continuous
              learning and self-improvement to become a high-quality software
              engineer. I possess strong problem-solving skills and creativity,
              which are essential in software development. I believe that my
              ability to learn quickly, enthusiasm, and dedication will be
              valuable in this role.
            </p>
            <button className="mt-6 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300">
              Say Hello!
            </button>
            <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-y-6 md:space-y-0 md:space-x-6">
              <div className="text-center shadow-lg bg-blue-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-800">2 Y.</div>
                <div className="text-gray-600">Experience</div>
              </div>
              <div className="text-center shadow-lg  rounded-lg p-4 bg-blue-200">
                <div className="text-2xl font-bold text-gray-800 ">5</div>
                <div className="text-gray-600">Project Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
