import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <ul className="flex space-x-4 justify-center">
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#certificates" className="hover:text-gray-400">
            Certificates
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
