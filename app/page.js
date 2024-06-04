"use client";
import React, { useState } from "react";
import Home from "./Home/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";
import Navbar from "./Navbar/page";
import { FloatButton } from 'antd';

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <FloatButton.BackTop  className={`border-none md:border-4  md:border-gray-800 ${darkMode ? "bg-blue-300":""}`}  />
    </>
  );
};

export default Page;
