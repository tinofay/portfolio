import React from "react";
import HeroImage from "../assets/my-pics/myPic.png.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
      <div
          name="home"
          className="h-screen w-full bg-gradient-to-b from-black via-black to-violet-950"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col space-y-4 md:flex-row items-center justify-center h-full px-6">
          <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-2/3 md:mr-8"> {/* Adjusted width and margin */}
            <p className="text-3xl sm:text-5xl text-white">
              Hello, I'm <span className="text-white font-signature">Tinotenda</span>
            </p>
            <h4 className="text-5xl sm:text-7xl font-bold text-white">
              Full Stack Developer
            </h4>
            <p className="text-gray-500 font-bold py-4 max-w-md">
              I bring a touch of elegance to the digital world, building and designing scalable web applications. My go-to tools include React and Tailwind for frontend, while Java and Spring Boot power up the backend. Let's create something beautiful together!
            </p>

            <div>
              <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3"> {/* Adjusted width */}
            <img
                src={HeroImage}
                alt="my profile"
                className="rounded-lg mx-auto w-full"
            />
          </div>
        </div>
      </div>
  );
};

export default Home;
