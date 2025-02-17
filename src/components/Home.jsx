import React from "react";
import HeroImage from "../assets/my-pics/myPic.png.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../styles/header.css"

const Home = () => {
    return (
        <div
            name="home"
            className="min-h-screen w-full bg-gradient-to-b from-black via-black to-violet-950"
        >
            <div className="flex items-center justify-center min-h-screen pt-20 pb-8">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 space-y-8 md:space-y-0">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-3/5 md:mr-16">
                        <p className="text-2xl xs:text-3xl sm:text-5xl text-white leading-snug">
                            {/* Full cursive for mobile */}
                            <span className="block font-signature italic md:hidden">
                Hello, I'm Tinotenda
              </span>

                            {/* "Tinotenda" cursive only for larger screens */}
                            <span className="hidden md:block">
                Hello, I'm{" "}
                                <span className="font-signature">Tinotenda</span>
              </span>
                        </p>

                        <h4 className="text-4xl sm:text-6xl font-bold text-white leading-tight font-sans">
                            Software Developer
                        </h4>
                        <p className="text-gray-400 font-medium text-base sm:text-lg py-4 leading-relaxed max-w-md md:max-w-none">
                            I bring a touch of elegance to the digital world, building and
                            designing scalable web applications. My go-to tools include React
                            and Tailwind for frontend, while Python and Django or Java and Spring Boot power up
                            the backend. Let's create something beautiful together!
                        </p>

                        {/* Portfolio Button */}
                        <div className="hidden md:block">
                            <Link
                                to="portfolio"
                                smooth
                                duration={500}
                                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer hover:shadow-md transition-all"
                            >
                                Portfolio
                                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center w-full md:w-1/2 lg:w-2/5">
                        <div className="relative flex justify-center items-center z-0">
                            {/* Profile Image with Gradient Border */}
                            <div
                                className="rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 p-[4px]"
                                style={{
                                    background: "linear-gradient(135deg, #a855f7, #3b82f6)", // Blue to purple gradient
                                }}
                            >
                                <img
                                    src={HeroImage}
                                    alt="my profile"
                                    onContextMenu={(event) => event.preventDefault()}
                                    onDragStart={(event) => event.preventDefault()}
                                    draggable="false"
                                    className="rounded-full w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
