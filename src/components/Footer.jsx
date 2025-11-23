import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-violet-950 to-black text-white py-12 border-t border-gray-800">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-signature mb-4">Tinotenda</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Technical Product Owner combining hands-on engineering expertise with strategic product leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/tinozungunde/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/tinofay"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="mailto:tinozungunde@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300"
                aria-label="Email"
              >
                <HiOutlineMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Tinotenda Zungunde. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with{" "}
              <FaHeart className="mx-1 text-red-500" size={14} />{" "}
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;