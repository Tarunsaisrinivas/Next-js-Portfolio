"use client"
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${darkMode && "dark"} pb-14`}>
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-800 border-b border-white dark:bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="text-lg font-bold text-white dark:text-gray-800">
            Portfolio
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 dark:text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className="hidden space-x-4 md:flex">
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`dark:text-gray-800 dark:font-bold cursor-pointer text-white hover:text-gray-300 ${
                activeLink === "home"
                  ? "transition-all ease-out duration-150 border-yellow-600 border-b-2"
                  : ""
              }`}
              to="home"
              activeClass="active"
              onSetActive={() => handleSetActive("home")}
            >
              Home
            </Link>

            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`dark:text-gray-800 dark:font-bold cursor-pointer text-white hover:text-gray-300 ${
                activeLink === "project" ? "border-yellow-600 border-b-2" : ""
              }`}
              to="skills"
              activeClass="active"
              onSetActive={() => handleSetActive("project")}
            >
              Skills
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`dark:text-gray-800 dark:font-bold cursor-pointer text-white hover:text-gray-300 ${
                activeLink === "services" ? "border-yellow-600 border-b-2" : ""
              }`}
              to="projects"
              activeClass="active"
              onSetActive={() => handleSetActive("services")}
            >
              Project
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`dark:text-gray-800 dark:font-bold cursor-pointer text-white hover:text-gray-300 ${
                activeLink === "contact" ? "border-yellow-600 border-b-2" : ""
              }`}
              to="contact"
              activeClass="active"
              onSetActive={() => handleSetActive("contact")}
            >
              Contact
            </Link>
            <button
          className="flex w-auto h-auto m-auto text-white bg-gray-800 dark:font-bold dark:text-black bottom-16 right-16 dark:bg-white"
          onClick={toggle}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 md:hidden">
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`dark:text-gray-800 dark:font-bold block px-4 py-2 text-white ${
                activeLink === "home" ? "border-yellow-600 w-16 border-b-2" : ""
              }`}
              to="home"
              activeClass="active"
              onSetActive={() => handleSetActive("home")}
            >
              Home
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`dark:text-gray-800 dark:font-bold block px-4 py-2 text-white ${
                activeLink === "project"
                  ? "border-yellow-600 border-b-2 w-16"
                  : ""
              }`}
              to="skills"
              activeClass="active"
              onSetActive={() => handleSetActive("project")}
            >
              Skills
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`dark:text-gray-800 dark:font-bold block px-4 py-2 text-white ${
                activeLink === "services"
                  ? "border-yellow-600 border-b-2 w-16 "
                  : ""
              }`}
              to="projects"
              activeClass="active"
              onSetActive={() => handleSetActive("services")}
            >
              Projects
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`dark:text-gray-800 dark:font-bold block px-4 py-2 text-white ${
                activeLink === "contact"
                  ? "border-yellow-600 border-b-2 w-16"
                  : ""
              }`}
              to="contact"
              activeClass="active"
              onSetActive={() => handleSetActive("contact")}
            >
              Contact
            </Link>
        <button
          className="flex w-auto h-auto text-white bg-gray-800 dark:font-bold dark:text-black bottom-16 right-16 dark:bg-white"
          onClick={toggle}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
          </div>
        )}
        
        {/* Toggle Dark Mode Button */}
        
      </nav>
    </div>
  );
};

export default Navbar;
