import React from "react";
import { FaCode, FaLightbulb, FaUsers, FaChartBar } from "react-icons/fa";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "API Gateway Optimization",
      type: "Technical Contribution",
      description: "Designed and implemented microservices architecture improving API response times and system reliability.",
      tags: ["Java", "Microservices", "Docker"],
      icon: <FaChartBar size={30} />,
      gradient: "from-orange-500 to-red-500",
      impact: "50% ↓ Latency",
      comingSoon: false,
    },
    {
      id: 2,
      title: "Mobile App Feature Rollout",
      type: "Product Leadership",
      description: "Managed cross-functional team to deliver push notification system, increasing user retention by 28%.",
      tags: ["Agile", "Stakeholder Mgmt", "Metrics"],
      icon: <FaUsers size={30} />,
      gradient: "from-green-500 to-teal-500",
      impact: "28% ↑ Retention",
      comingSoon: false,
    },
    {
      id: 3,
      title: "Remittance Partner Integration",
      type: "Technical Contribution",
      description: "Architected and implemented integration system for onboarding multiple remittance partners, streamlining cross-border payment workflows.",
      tags: ["API Integration", "Java", "Payment Systems"],
      icon: <FaCode size={30} />,
      gradient: "from-indigo-500 to-purple-500",
      impact: "Multiple Partners",
      comingSoon: false,
    },
    {
      id: 4,
      title: "Real-Time Analytics Dashboard",
      type: "Technical Contribution",
      description: "Building full-stack analytics platform leveraging React for dynamic visualizations, Spring Boot microservices, and PostgreSQL for high-performance data processing.",
      tags: ["React", "Spring Boot", "PostgreSQL"],
      icon: <FaCode size={30} />,
      gradient: "from-blue-500 to-cyan-500",
      impact: "In Development",
      comingSoon: true,
    },
    {
      id: 5,
      title: "AI Customer Support Assistant",
      type: "AI & Full-Stack",
      description: "Building intelligent chatbot using OpenAI API and LangChain for automated customer support, with React frontend and Node.js backend for seamless user interactions.",
      tags: ["OpenAI", "LangChain", "React", "Node.js"],
      icon: <FaLightbulb size={30} />,
      gradient: "from-cyan-500 to-blue-500",
      impact: "Coming Soon",
      comingSoon: true,
    },
    {
      id: 6,
      title: "Jira Workflow Automation",
      type: "AI & Automation",
      description: "Developing intelligent workflow automation using n8n to streamline Jira processes and improve team productivity with AI-powered task management.",
      tags: ["n8n", "AI", "Automation"],
      icon: <FaLightbulb size={30} />,
      gradient: "from-purple-500 to-pink-500",
      impact: "Coming Soon",
      comingSoon: true,
    },
  ];

  return (
    <div
      name="portfolio"
      id="portfolio"
      className="bg-gradient-to-b from-black via-violet-950 to-black w-full text-white py-20"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline">
            Product & Technical Portfolio
          </p>
          <p className="py-6 text-gray-400 max-w-3xl mx-auto">
            Examples of products I've shaped and technical solutions I've contributed to—demonstrating
            the full spectrum of my product and engineering capabilities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {portfolios.map(({ id, title, type, description, tags, icon, gradient, impact, comingSoon }) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700 hover:border-gray-600"
            >
              {/* Coming Soon Badge */}
              {comingSoon && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              )}

              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon and Type Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
                    {icon}
                  </div>
                </div>

                {/* Type Badge */}
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-gradient-to-r ${gradient} bg-opacity-20 text-gray-200`}>
                  {type}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {description}
                </p>

                {/* Impact Metric */}
                <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${gradient} bg-opacity-20 mb-4`}>
                  <p className="text-sm font-semibold text-white">
                    {impact}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
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

export default Portfolio;