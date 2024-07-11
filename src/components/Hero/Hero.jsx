// Home.js
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-blue-200 h-[480px] ">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg flex items-center space-x-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800">
            Hello, I’m [Your Name]
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            I am a Software Engineer who graduated from a bootcamp with
            experience in developing web applications. I have expertise in
            various technologies such as React, Node.js, and Tailwind CSS. I am
            passionate about creating high-quality software that effectively
            meets user needs.
          </p>
          <button className="mt-6 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300">
            Say Hello!
          </button>
          <div className="mt-6 flex space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">2 Y.</div>
              <div className="text-gray-600">Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">5</div>
              <div className="text-gray-600">Project Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">58</div>
              <div className="text-gray-600">Happy Client</div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src="../../../public/1688311841974_p1MX0__please_credit[palette.fm] (1)-Photoroom 1.png"
            alt="Your Name"
            className="w-64 h-64  rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
