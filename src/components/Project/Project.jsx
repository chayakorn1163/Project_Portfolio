// Projects.js
import React from "react";

const project = [
  {
    title: "Data manipulation and representation",
    description:
      "Data manipulation and representation on React JS Function Based Components",
    category: "React JS",
    imageUrl: "path_to_image_1",
  },
  {
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
    category: "UI-UX DESIGN",
    imageUrl: "path_to_image_2",
  },
  {
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
    category: "UI-UX DESIGN",
    imageUrl: "path_to_image_3",
  },
  {
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet.",
    category: "UI-UX DESIGN",
    imageUrl: "path_to_image_4",
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
