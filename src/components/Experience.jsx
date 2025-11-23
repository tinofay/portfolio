import React from "react";

import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import reactImage from "../assets/icons/react.png";
import java from "../assets/icons/Java2.png";
import spring from "../assets/icons/Spring3.png";
import github from "../assets/icons/github.png";
import tailwind from "../assets/icons/tailwind.png";
import python from "../assets/icons/python.png"

const Experience = () => {
  const technicalSkills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: spring,
      title: "Spring",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
  ];

  const productSkills = [
    {
      id: 1,
      title: "Product Strategy",
      description: "Vision, roadmapping, OKRs",
      style: "shadow-purple-500",
    },
    {
      id: 2,
      title: "Agile/Scrum",
      description: "Sprint planning, backlog management",
      style: "shadow-indigo-500",
    },
    {
      id: 3,
      title: "User Stories",
      description: "Requirements, acceptance criteria",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      title: "Stakeholder Mgmt",
      description: "Communication, alignment",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      title: "Data Analysis",
      description: "Metrics, user research, SQL",
      style: "shadow-teal-500",
    },
    {
      id: 6,
      title: "Prioritization",
      description: "RICE, MoSCoW, value vs effort",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="experience"
      id="experience"
      className="bg-gradient-to-b from-violet-950 via-black to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-16">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold p-2 inline">
            Core Competencies
          </p>
          <p className="py-6 text-gray-400">How I add value across product and engineering</p>
        </div>

        {/* Product Leadership Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-300 mb-6">Product Leadership</h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 sm:px-0">
            {productSkills.map(({ id, title, description, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-6 px-4 rounded-lg ${style} bg-gray-900 bg-opacity-50`}
              >
                <p className="text-lg font-bold">{title}</p>
                <p className="mt-2 text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Fluency */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-300 mb-6">Technical Fluency</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0">
            {technicalSkills.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;