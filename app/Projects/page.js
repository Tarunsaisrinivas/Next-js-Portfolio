"use client";
import React, { useEffect } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaDownload, FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="projects"
      className={`min-h-screen py-12 ${
        darkMode ? "bg-white" : ""
      } bg-gray-800 `}
    >
      <h1
        className={`mb-12 text-4xl font-semibold text-center  ${
          darkMode ? "text-gray-800 " : "text-white"
        }  lg:text-5xl xl:text-6xl`}
      >
        Projects
      </h1>
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-2">
        {/* Card 1 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-right"
        >
          <img
            src="/assets/department.png"
            alt="Project 1"
            className="object-cover w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Department Website
            </h2>
            <p className="mb-4 text-sm text-white text-justify">
              I've initiated a web-based leave application system tailored for
              college students to request holidays from the department head.
              Users can input details, and the system generates a leave letter.
              Additionally, students can conveniently track the status of their
              request, whether it's approved or rejected.
            </p>
            <a
              href="https://srkrcse.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                <CiShare1 />
                Visit
              </button>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="/assets/chat.png"
            alt="Project 2"
            className="object-contain w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">Chat App</h2>
            <p className="mb-4 text-sm text-white text-justify">
              The Firebase Chat Application is a real-time messaging platform
              that allows users to engage in group conversations and manage
              their messages efficiently. Built on Firebase, a powerful platform
              for developing web and mobile applications, this chat application
              provides seamless real-time communication with features such as
              group messaging and message deletion.
            </p>
            <a
              href="https://googlechat.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                <CiShare1 />
                Visit
              </button>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <img
            src="/assets/cheif.png"
            alt="Project 3"
            className="object-contain w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Recipe App
            </h2>
            <p className="mb-4 text-sm text-white text-justify">
              Discover a world of culinary delights with our <b>React Native</b>{" "}
              recipe app! Explore a vast collection of recipes, each with
              ingredients, instructions, and mouth-watering images. Easily find
              related recipes and expand your culinary skills on the go!
            </p>
            <div className="flex gap-4">
              <div className="flex justify-between">
                <a
                  href="https://expo.dev//accounts/tarun_sai_srinivas/projects/recipes/builds/364c7b9c-e792-44fe-baff-5534a4d341f8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                    <FaDownload />
                    Install
                  </button>
                </a>
              </div>
              <div className="flex justify-between">
                <a
                  href="https://www.figma.com/proto/8WdOF81AQqdf1wdG94Boup/recipe-app?node-id=1-2&t=nyWkITYcBpha7hEu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    id="tooltip-button"
                    data-tooltip-content="Hello to you too!"
                    className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400"
                  >
                    <CiShare1 />
                    View
                  </button>
                  <Tooltip
                    anchorId="tooltip-button"
                    content="Figma prototype design!"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div
  className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
  data-aos="fade-up"
  data-aos-delay="400"
>
  <iframe
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8WdOF81AQqdf1wdG94Boup%2Frecipe-app%3Fnode-id%3D1-2%26t%3DnyWkITYcBpha7hEu-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
    className="w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
    allowFullScreen
  ></iframe>
  <div className="flex flex-col justify-center w-2/3 p-4">
    <h2 className="mb-4 text-xl font-semibold text-white">
      Recipe App
    </h2>
    <p className="mb-4 text-sm text-white text-justify">
      Discover a world of culinary delights with our <b>React Native</b>{" "}
      recipe app! Explore a vast collection of recipes, each with
      ingredients, instructions, and mouth-watering images. Easily find
      related recipes and expand your culinary skills on the go!
    </p>
    <div className="flex justify-between">
      <a
        href="https://expo.dev//accounts/tarun_sai_srinivas/projects/recipes/builds/364c7b9c-e792-44fe-baff-5534a4d341f8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
          <FaDownload />
          Install
        </button>
      </a>
    </div>
  </div>
</div> */}

        {/* Card 4 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src="/assets/eazyLetter.png"
            alt="Project 3"
            className="object-cover w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Eazy Letter
            </h2>
            <p className="mb-4 text-sm text-white text-justify">
              Our team has created a dynamic letter generator using full-stack
              technology, tailored to aid students in effortlessly composing
              letters for various purposes. With customizable templates and
              intuitive interfaces, our platform simplifies the letter-writing
              process, ensuring efficiency and professionalism in communication.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/Tarunsaisrinivas/EazyLetter.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                  <FaGithub />
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src="/assets/envirowatch.png"
            alt="Project 3"
            className="object-cover w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              EnviroWatch
            </h2>
            <p className="mb-4 text-sm text-white text-justify">
              I developed EnviroWatch, a community app from March to June 2024,
              using React Native, Express.js, MongoDB, and Firebase. The app
              enables users to report local environmental issues with photos,
              descriptions, and locations, fostering citizen engagement and
              promoting sustainable development
            </p>
            <div className="flex justify-between">
              <a
                href="https://drive.google.com/file/d/10DrLnvdD2dCxIVzWyXLagbyoZkc8TxeJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                  <FaDownload />
                  Install 
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default Projects;
