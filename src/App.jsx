import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";

const App = () => {
  const portfolioItems = [
    {
      title: "Project 1",
      description: "Description for project 1",
      image: "image1.jpg",
    },
   
    // เพิ่มโปรเจกต์อื่นๆ ได้ที่นี่
  ];

  const skills = [
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    // เพิ่มทักษะอื่นๆ ได้ที่นี่
  ];

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Certificates />
      <Experience />
      <section id="project" className="p-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-4"></h2>
        <div className="flex flex-wrap justify-center">
          {portfolioItems.map((item, index) => (
            <Project
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>
      <section id="skills" className="p-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <Skill key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default App;
