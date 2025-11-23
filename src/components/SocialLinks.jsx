import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/tinozungunde/",
      label: "LinkedIn",
      style: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: 2,
      icon: <FaGithub size={24} />,
      href: "https://github.com/tinofay",
      label: "GitHub",
      style: "bg-gray-700 hover:bg-gray-800",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={24} />,
      href: "mailto:tinozungunde@gmail.com",
      label: "Email",
      style: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={24} />,
      href: "/resume.pdf",
      label: "Resume",
      style: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700",
      download: true,
    },
  ];

  return (
    <div className="fixed bottom-20 right-6 z-40 hidden lg:block">
      <div className="flex flex-col gap-3">
        {links.map(({ id, icon, href, label, style, download }) => (
          <a
            key={id}
            href={href}
            download={download}
            target="_blank"
            rel="noreferrer"
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full ${style} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-125 opacity-70 hover:opacity-100`}
            aria-label={label}
          >
            {/* Icon */}
            <span className="text-white">{icon}</span>

            {/* Tooltip on hover */}
            <span className="absolute right-14 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;