import React from "react";
import { FaChartLine, FaUsers, FaRocket, FaTasks } from "react-icons/fa";

const ProductImpact = () => {
  const metrics = [
    {
      id: 1,
      icon: <FaRocket size={40} />,
      number: "15+",
      label: "Features Delivered",
      description: "End-to-end ownership from ideation to launch",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      icon: <FaUsers size={40} />,
      number: "10K+",
      label: "Active Users",
      description: "Driving engagement through data-driven decisions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      icon: <FaChartLine size={40} />,
      number: "50%",
      label: "Latency Reduction",
      description: "Improved system performance through optimization",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      icon: <FaTasks size={40} />,
      number: "95%",
      label: "On-Time Delivery",
      description: "Consistent sprint planning and execution",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div
      name="impact"
      className="w-full bg-gradient-to-b from-black via-violet-950 to-black text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline">
            Product Impact
          </p>
          <p className="py-6 text-gray-400">
            Measurable results from combining product strategy with technical execution
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {metrics.map(({ id, icon, number, label, description, color }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${color} mb-4`}
                >
                  {icon}
                </div>

                {/* Number */}
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {number}
                </h3>

                {/* Label */}
                <p className="text-lg font-semibold text-gray-200 mb-2">
                  {label}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Decorative element */}
              <div
                className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-4">
            Ready to bring this impact to your team?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductImpact;