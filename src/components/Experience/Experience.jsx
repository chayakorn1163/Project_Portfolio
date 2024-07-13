import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="p-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">WORK EXPERIENCE</h2>

      {/* Junior Software Developer Bootcamp */}
      <div className="mt-6 shadow-lg rounded-lg bg-gray-100 p-6 mb-8">
        <h3 className="text-2xl font-bold text-purple-500 mb-4">
          Junior Software Developer Bootcamp
        </h3>
        <p className="text-lg text-gray-800 mb-2 font-bold">
          Generation Thailand and KX Knowledge Xchange King Mongkut’s University
          of Technology Thonburi (KMUTT)​
        </p>
        <p className="text-lg text-gray-800 mb-4 font-bold">
          April 2024 - July 2024
        </p>

        {/* Responsibilities and Achievements */}
        <ul className="list-disc pl-8">
          <li className="text-gray-700 mb-2">
            Learned how to build web applications using React for the front-end,
            Node.js for the back-end, and MongoDB for database management.
          </li>
          <li className="text-gray-700 mb-2">
            Acquired essential skills for career transition, including growth
            mindset, communication, agile methodologies, and leadership.
          </li>
          <li className="text-gray-700 mb-2">
            Developed the React CRUD Project, utilizing React with React Router
            and Axios for middleware on the front-end.
          </li>
          <li className="text-gray-700 mb-2">
            Implemented Express.js and Node.js to create and manage RESTful
            APIs, with authentication handled using Passport.js.
          </li>
          <li className="text-gray-700 mb-2">
            Utilized Mongoose to establish connections with MongoDB for data
            storage and retrieval.
          </li>
        </ul>
        <div className="mt-4">
          <h4 className="text-lg font-bold text-purple-500 mb-2">
            Key Achievements
          </h4>
          <ul className="list-disc pl-8">
            <li className="text-gray-700 mb-2">
              Designed and implemented both frontend (React) and backend
              (Node.js, Express) components, ensuring seamless integration with
              MongoDB for robust data management.
            </li>
            <li className="text-gray-700 mb-2">
              Orchestrated agile methodologies as Scrum Master, overseeing Daily
              Stand-ups, Sprint Planning, Sprint Reviews, and Sprint
              Retrospectives to optimize team performance and deliverables.
            </li>
            <li className="text-gray-700 mb-2">
              Established a collaborative environment using tools like Trello
              and Slack, fostering effective communication, task clarity, and
              progress tracking.
            </li>

            <li className="text-gray-700 mb-2">
              Utilized AI for static code analysis to scan and identify
              potential issues, enhancing code quality and consistency through
              automated error detection and best practice recommendations.
            </li>
          </ul>
        </div>
      </div>

      {/* Loss Prevention Safety Officer */}
      <div className="shadow-lg rounded-lg bg-gray-100 p-6">
        <h3 className="text-2xl font-bold text-purple-500 mb-4">
          Loss Prevention Safety Officer
        </h3>
        <p className="text-lg text-gray-800 mb-2 font-bold">
          CRC Thatwatsadu Company Limited
        </p>
        <p className="text-lg text-gray-800 mb-4 font-bold">
          December 2022 - January 2021
        </p>

        {/* Responsibilities and Achievements */}
        <ul className="list-disc pl-8">
          <li className="text-gray-700 mb-2">
            Conducted safety training and education for employees to increase
            awareness of safety hazards and promote safe work practices.
          </li>
          <li className="text-gray-700 mb-2">
            Coordinated with various departments (Warehouse, Shipping, Sales,
            HR, Management) to ensure compliance with safety regulations.
          </li>
          <li className="text-gray-700 mb-2">
            Provided advice and assistance to customers regarding safety-related
            issues.
          </li>
        </ul>

        {/* Key Achievements */}
        <div className="mt-4">
          <h4 className="text-lg font-bold text-purple-500 mb-2">
            Key Achievements
          </h4>
          <ul className="list-disc pl-8">
            <li className="text-gray-700 mb-2">
              Successfully reduced workplace accidents by implementing
              data-driven safety measures.
            </li>
            <li className="text-gray-700 mb-2">
              Improved safety training programs, enhancing employee compliance
              and awareness.
            </li>
            <li className="text-gray-700 mb-2">
              Developed a comprehensive safety database system, improving
              reporting and incident tracking efficiency.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
