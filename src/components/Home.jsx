import React, { useState, useEffect } from "react";
import HeroImage from "../assets/my-pics/myPic.png.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaLightbulb, FaCode, FaRocket } from "react-icons/fa";
import "../styles/header.css"

const roles = ["Product Owner", "Software Developer", "Product Strategist"];

const Home = () => {
    const [typedText, setTypedText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing animation effect
    useEffect(() => {
        const currentRole = roles[roleIndex] || roles[0];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentRole.length) {
                    setTypedText(currentRole.substring(0, typedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(currentRole.substring(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, roleIndex]);

    return (
        <div
            name="home"
            className="min-h-screen w-full bg-gradient-to-br from-black via-violet-950 to-black relative overflow-hidden"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-16 relative z-10">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 w-full">

                    {/* Main Hero Content - Centered */}
                    <div className="text-center mb-12 animate-fade-in-up">
                        {/* Greeting */}
                        <p className="text-lg sm:text-xl text-gray-400 mb-4">
                            Hello, I'm
                        </p>

                        {/* Name */}
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                                Tinotenda
                            </span>
                        </h1>

                        {/* Dynamic Role with Typing Effect */}
                        <div className="h-20 sm:h-24 flex items-center justify-center mb-6">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
                                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {typedText}
                                </span>
                                <span className="animate-pulse text-purple-500">|</span>
                            </h2>
                        </div>

                        {/* Tagline */}
                        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Bridging <span className="text-purple-400 font-semibold">product strategy</span> with{" "}
                            <span className="text-indigo-400 font-semibold">technical execution</span> to build solutions that matter
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="portfolio"
                                smooth
                                duration={500}
                                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer flex items-center"
                            >
                                View My Work
                                <MdOutlineKeyboardArrowRight size={25} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="contact"
                                smooth
                                duration={500}
                                className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                            >
                                Let's Connect
                            </Link>
                        </div>
                    </div>

                    {/* Profile Image - Floating */}
                    <div className="flex justify-center mt-12 mb-16 animate-fade-in-up animation-delay-2000">
                        <div className="relative group">
                            {/* Glowing ring effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-glow" />

                            {/* Profile Image */}
                            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
                                <img
                                    src={HeroImage}
                                    alt="Tinotenda - Technical Product Owner"
                                    onContextMenu={(event) => event.preventDefault()}
                                    onDragStart={(event) => event.preventDefault()}
                                    draggable="false"
                                    className="rounded-full w-full h-full object-cover border-4 border-black"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center mt-8">
                        <Link to="about" smooth duration={500} className="cursor-pointer animate-bounce">
                            <HiChevronDown size={40} className="text-gray-400 hover:text-purple-400 transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
