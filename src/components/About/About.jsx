// About.js
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-blue-200">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg flex items-center space-x-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="mt-4 text-lg text-gray-600">
            I am a graduate of Generation’s Junior Software Developer Bootcamp
            seeking a software developer position. I have over 2 years of
            experience in the service and security sectors, which have helped me
            develop communication and leadership skills. My strengths lie in my
            ability to work collaboratively with a team, maintain a positive
            mindset, and adapt quickly to changing environments. I am eager to
            apply my previous work experiences and newly developed technical
            skills to launch my career in the tech sector. I am dedicated to
            contributing to the development and delivery of high-quality
            software products.
          </p>
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
            src="../../../public/5737189.png"
            alt="Your Name"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
