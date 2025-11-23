import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-violet-950 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline">
            Contact
          </p>
          <p className="py-6 text-gray-400">Let's discuss your product vision or development needs</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/bgddlyda"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              pattern="[A-Za-z\s]{1,50}"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-white bg-gradient-to-r  from-purple-500 to-indigo-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;