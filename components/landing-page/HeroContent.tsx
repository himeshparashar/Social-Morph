import React from "react";

const HeroContent = () => {
  return (
    <div className="w-[62%] mx-auto">
      <div className="text-6xl md:text-8xl flex flex-col justify-center items-center text-center tracking-wide leading-tight mt-24 font-semibold">
        <h1 className="gradient-text">
          30 days of content in{" "}
          <span className="purple-gradient">5 minutes</span>
        </h1>
        <p className="text-center text-xl text-gray-600 tracking-wide mt-7 -ml-3">
        AI-powered social media marketing with GPT-4o
      </p>
      <div className="mt-20 text-center flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Business Website"
          className="py-4 px-5 rounded-full text-lg shadow-lg shadow-purple-200 border-2 border-purple-100 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-300 hover:transition-all ease-in-out hover:duration-500 focus:outline-none text-center"
        />
        <button className="text-lg hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 text-white px-3 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 hover:transition-all hover:duration-500 hover:shadow-md shadow-purple-400 shadow-md hover:shadow-gray-500 mt-3 max-w-[150px]">
          Get Posts
        </button>
      </div>
      </div>
    </div>
  );
};

export default HeroContent;
