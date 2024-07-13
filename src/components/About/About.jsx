import React from "react";
import profilePhoto from "../../../public/1688311841974_p1MX0__please_credit[palette.fm] (1)-Photoroom 1.png";

const About = () => {
                    return (
                    <div className="min-h-screen bg-gray-100 py-12">
                        <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center space-x-6">
                            <div className="flex-shrink-0">
                            <img
                                src={profilePhoto}
                                alt="Profile"
                                className="w-48 h-48 md:w-64 md:h-64  rounded-lg border-4 border-purple-200 object-scale-down"
                            />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl font-display font-bold text-gray-800">
                                I am Professional User Experience Designer
                            </h1>
                            <p className="mt-4 text-lg font-body text-gray-600">
                                I design and develop services for customers
                                specializing in creating stylish, modern websites,
                                web services, and online stores. My passion is to
                                design digital user experiences.
                            </p>
                            <button className="mt-6 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300">
                                My Project
                            </button>
                            <button className="mt-6 ml-4 px-4 py-2 border-2 border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                                Download CV
                            </button>
                            <div className="mt-6 flex justify-center md:justify-start space-x-6">
                                <a
                                href="#"
                                className="text-gray-600 hover:text-purple-500 transition duration-300"
                                >
                                <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                href="#"
                                className="text-gray-600 hover:text-purple-500 transition duration-300"
                                >
                                <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                href="#"
                                className="text-gray-600 hover:text-purple-500 transition duration-300"
                                >
                                <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a
                                href="#"
                                className="text-gray-600 hover:text-purple-500 transition duration-300"
                                >
                                <i className="fab fa-github"></i>
                                </a>
                            </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-3xl font-bold text-gray-800">
                            {" "}
                            HARD SKILL
                            </h2>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                1. Programming language
                                </h3>
                                <ul className="mt-4 text-gray-600">
                                <li>- Javascript</li>
                                <li>- HTML/CSS</li>
                                <li>- Java</li>
                                <li>- Python</li>
                                <li>- C</li>
                                </ul>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                2. Databases
                                </h3>
                                <ul className="mt-4 text-gray-600">
                                <li>- MySQL</li>
                                <li>- PostgreSQL</li>
                                <li>- MongoDB</li>
                                </ul>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                3. Design
                                </h3>
                                <ul className="mt-4 text-gray-600">
                                <li>- Figma</li>
                                <li>- Canva</li>
                                <li>- MongoDB</li>
                                </ul>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                4. Frameworks/Libraries
                                </h3>
                                <ul className="mt-4 text-gray-600">
                                <li>- React.js</li>
                                <li>- Bootstrap</li>
                                <li>- Node.js</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-3xl font-bold text-gray-800">
                            {" "}
                            SOFT SKILL
                            </h2>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                1. Communication
                                </h3>
                                <p className="mt-4 text-gray-600">
                                Good communication helps effectively convey
                                information and ideas to team members and
                                clients,reducing misunderstandings and increasing
                                efficiency in collaboration.
                                </p>
                            </div>
                            
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                2. Teamwork
                                </h3>
                                <p className="mt-4 text-gray-600">
                                Teamwork is essential in developing complex
                                projects,allowing tasks to be divided and
                                collaboration to achieve goals successfully.
                                </p>
                            </div>
                            
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                3. Problem-solving
                                </h3>
                                <p className="mt-4 text-gray-600">
                                The ability to solve problems helps quickly and
                                efficiently find solutions to errors and improve
                                code, enhancing the quality of the project.
                                </p>
                            </div>
                            
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                4. Adaptability
                                </h3>
                                <p className="mt-4 text-gray-600">
                                Flexibility in adapting to new technologies and
                                changes in the project is crucial for programmers,
                                enabling them to respond to evolving requirements.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                5. Time Management
                                </h3>
                                <p className="mt-4 text-gray-600">
                                Time management is important to complete tasks
                                onschedule, helping prioritize work and perform
                                efficiently.
                                </p>
                            </div>
                            
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                6.Self Learning
                                </h3>
                                <p className="mt-4 text-gray-600">
                                The ability to learn independently allows for
                                continuous updating of knowledge and skills,
                                keepingpace with rapidly changing technology.
                                </p>
                            </div>
                            
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                7.Customers Services
                                </h3>
                                <p className="mt-4 text-gray-600">
                                Providing excellent customer service builds
                                satisfaction and trust, ensuring the project
                                meetsclient expectations and fostering good
                                relationships.
                                </p>
                            </div>
                            
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-purple-500">
                                8.People and interpersonal
                                </h3>
                                <p className="mt-4 text-gray-600">
                                Skills The ability to work with others and build
                                good relationships helps effectively work in
                                diverseenvironments and resolve team issues.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
