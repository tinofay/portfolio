import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Faith",
      role: "Founder",
      company: "ZimGirlsCode",
      quote: "Tinotenda is not just technically brilliant, she's genuinely passionate about building meaningful solutions. Her ability to balance product vision with hands-on development makes her an invaluable collaborator and mentor to others.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Melisa",
      role: "Product Officer",
      company: "Colleague",
      quote: "Working with Tinotenda has been a pleasure. She brings both strategic thinking and technical depth to every discussion, making our product decisions more informed and our team more effective.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "Shingai",
      role: "Project Manager",
      company: "Collaborator",
      quote: "Tinotenda has this rare ability to understand both the big picture and the technical details. She bridges the gap between stakeholders and developers effortlessly, always delivering on her commitments.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div
      name="testimonials"
      className="w-full bg-gradient-to-b from-black via-black to-violet-950 text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline">
            Testimonials
          </p>
          <p className="py-6 text-gray-400">
            What colleagues and stakeholders say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {testimonials.map(({ id, name, role, company, quote, gradient }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700 hover:border-gray-600"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} mb-4`}>
                  <FaQuoteLeft size={24} />
                </div>

                {/* Quote */}
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{quote}"
                </p>

                {/* Divider */}
                <div className={`h-1 w-16 bg-gradient-to-r ${gradient} mb-4 rounded-full`} />

                {/* Author Info */}
                <div>
                  <p className="text-white font-bold text-lg">{name}</p>
                  <p className="text-gray-400 text-sm">{role}</p>
                  <p className={`text-sm bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-semibold`}>
                    {company}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div
                className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;