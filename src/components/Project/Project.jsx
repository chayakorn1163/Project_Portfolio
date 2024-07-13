// Projects.js
import React from "react";
import logoproject from "../../../public/Group 473 (1).png";
import logonoteapp from "../../../public/image.png";
import logocomponets from "../../../public/image copy.png";
import logoiphone from "../../../public/image copy 2.png";

const project = [
  {
    title: "Puey Puey E-Commerce Web Application",
    description:
      "Developed an e-commerce platform focused on the pet humanization trend in Thailand, leveraging insights from Mahidol University's Marketing Faculty.",
    category: "React JS ",
    imageUrl: logoproject,
  },
  {
    title: "Notes-App",
    description:
      " Developed a user-friendly and efficient notes application, enabling users to manage personal notes conveniently.",
    category: "React JS",
    imageUrl: logonoteapp,
  },
  {
    title:
      "Data manipulation and representation On React JS Function Based Components",
    description:
      "Developed a dynamic web application focused on data manipulation and representation using React JS function-based components, enhancing user interaction and data visualization.",
    category: "React Js",
    imageUrl: logocomponets,
  },
  {
    title: "iPhone 15 Website using React.js and Tailwind CSS",
    description:
      "this project aims to recreate the Apple  iPhone 15 Pro website using  React.js and  TailwindCSS, with a focus on implementing smooth animations using GSAP (Greensock Animations) and rendering 3D models of the  iPhone 15 Pro in different colors and sizes using Three.js and its related libraries ( React Three Fiber and React Three Drei).",
    category: "React Js",
    imageUrl: logoiphone,
  },
  {
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
    category: "UI-UX DESIGN",
    imageUrl: "path_to_image_5",
  },
  {
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
    category: "UI-UX DESIGN",
    imageUrl: "path_to_image_6",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          PROJECT
        </h2>
        <p className="text-center text-gray-600 mb-12">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm font-bold text-purple-500">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300">
                  Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300">
            More Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
