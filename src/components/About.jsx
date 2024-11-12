import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen w-full bg-gradient-to-b from-violet-950 via-black to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a web developer who loves creating smooth, intuitive digital experiences.
          On the frontend, I work with JavaScript, React, and Tailwind CSS to build interfaces that feel natural and engaging.
          On the backend, I use Java, Python, and frameworks like Spring Boot and Django to ensure everything runs seamlessly.
          What gets me excited is turning interesting ideas into polished web applications that people genuinely enjoy using.
          While I'm passionate about writing clean code, I believe the best solutions come from understanding how people actually interact with technology.
          That's why I focus on blending thoughtful design with solid technical implementation.
        </p>
        <br />

        <p className="text-xl">
          If you have a project in mind that could benefit from this balanced approach to web development, I would be excited to collaborate with you.
          Together, we can build something that not only meets your needs but also resonates with your users.
        </p>
      </div>
    </div>
  );
};

export default About;