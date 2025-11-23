import React from "react";
import { FaLightbulb, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-violet-950 via-black to-black text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline">
            About
          </p>
          <p className="py-6 text-gray-400">
            Bridging the gap between product strategy and technical execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Product Owner Focus */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700 hover:border-purple-500">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                <FaLightbulb size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Product Leadership</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I help teams build products that actually matter. My job is figuring out what to build next,
                making sure it's the right thing, and keeping everyone aligned on why it matters. Coming from
                a development background means I can spot when an idea is going to be a technical nightmare
                before we commit to it.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I work with designers, engineers, and stakeholders to turn messy problems into clear user stories.
                Then I use data and user feedback to make sure we're actually moving the needle—not just shipping
                features for the sake of it.
              </p>

              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>

          {/* Technical Foundation */}
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700 hover:border-blue-500">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                <FaCode size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Technical Foundation</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm not just managing developers—I've been one. I still code with React, Java, Spring Boot, and Python
                to stay sharp and keep up with what's actually happening in the tech world. It's hard to make good product
                decisions if you don't understand the tools your team is working with.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This technical background means I can have real conversations with engineers, write acceptance criteria
                that actually make sense, and spot opportunities where a technical improvement could unlock real product
                value. I'm the bridge between "what we want to build" and "how we're going to build it."
              </p>

              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;