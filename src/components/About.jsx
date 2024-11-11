import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-violet-950 via-black to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I specialize in creating elegant and user-friendly digital experiences. Whether I'm working with JavaScript, React, and Tailwind CSS on the front-end, or utilizing Java, Python, and frameworks like Spring Boot and Django on the back-end, my goal is to transform ideas into impressive, impactful web applications.
          Beyond just making things functional, I'm passionate about crafting digital products with a touch of refinement. I believe great design and intuitive interactions are just as crucial as robust technical implementation. By blending my diverse skillset with an eye for elegance, I strive to create solutions that not only solve problems, but also captivate and delight users.
        </p>
        <br />

        <p className="text-xl">
          If you have a project in mind that could benefit from this balanced approach to web development, I would be excited to collaborate with you. Together, we can turn your vision into a reality - crafting something truly remarkable that leaves a lasting impression on your audience.
        </p>
      </div>
    </div>
  );
};

export default About;