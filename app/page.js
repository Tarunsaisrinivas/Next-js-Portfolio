"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Home from "./Home/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";
import Navbar from "./Navbar/page";
import { FloatButton } from 'antd';
import Loading from './Loading/page';
import ProgressBar from "react-scroll-progress-bar"; // Add this line to import the component

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          clearInterval(progressInterval);
          return 100;
        }
      });
    }, 200); // Change this value to adjust the speed of progress

    if (progress === 100) {
      setTimeout(() => {
        setIsLoading(false);
        router.push("/"); // Redirect to home page or any other page
      }, 500); // Small delay before redirection
    }

    return () => clearInterval(progressInterval);
  }, [progress, router]);

  if (isLoading) {
    return <Loading progress={progress} />;
  }

  return (
    <>
      <ProgressBar height="2" bgcolor="#3a86ff" duration="0.1" />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <FloatButton.BackTop className={`border-none md:border-4 md:border-gray-800 ${darkMode ? "bg-blue-300" : ""}`} />
    </>
  );
};

export default Page;
