import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "impact",
    },
    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "testimonials",
    },
    {
      id: 7,
      link: "contact",
    },
  ];

  return (
    <div className={`flex justify-between items-center w-full h-20 px-6 lg:px-8 text-white fixed z-50 transition-all duration-500 ${
      scrolled
        ? 'backdrop-blur-lg bg-gradient-to-r from-black/40 via-violet-950/30 to-black/40 border-b border-purple-500/10'
        : 'backdrop-blur-sm bg-transparent'
    }`}>
      {/* Logo/Name with gradient on hover */}
      <div className="group">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <h1 className="text-4xl lg:text-5xl font-signature ml-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-indigo-400 transition-all duration-300">
            Tinotenda
          </h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={500}
              spy={true}
              activeClass="active"
              onSetActive={() => setActiveLink(link)}
              className={`cursor-pointer capitalize font-medium text-sm tracking-wide transition-all duration-300 relative group/link ${
                activeLink === link ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {link}
              {/* Animated underline */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 ${
                activeLink === link ? 'w-full' : 'w-0 group-hover/link:w-full'
              }`} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden hover:text-purple-400 transition-colors"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-black via-violet-950 to-black backdrop-blur-md">
          {/* Close button in mobile menu */}
          <div
            onClick={() => setNav(false)}
            className="absolute top-6 right-6 cursor-pointer text-gray-300 hover:text-purple-400 transition-colors"
          >
            <FaTimes size={30} />
          </div>

          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-6"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                className="text-3xl capitalize cursor-pointer font-medium text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400 hover:bg-clip-text transition-all duration-300 px-8 py-3 rounded-lg hover:bg-gray-900/50"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;