"use client"; 

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
const HeroContent = () => {
  const router = useRouter();

  const handleGetPostsClick = () => {
    router.push("/dashboard"); 
  };

  return (
    <div className="w-full px-4 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[62%] mx-auto">
      <div className="flex flex-col justify-center items-center text-center mt-12 md:mt-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-wide leading-tight">
          <span className="gradient-text">30 days of content in </span>
          <span className="purple-gradient">5 minutes</span>
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-600 tracking-wide mt-4 sm:mt-7 max-w-2xl">
          AI-powered social media marketing and content creation platform.
        </p>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20 text-center">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Business Website"
            className="w-full py-3 sm:py-4 px-4 sm:px-5 pr-24 sm:pr-32 rounded-full text-base sm:text-lg shadow-lg shadow-purple-200 border-2 border-purple-100 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-300 transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button 
          onClick={handleGetPostsClick}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm sm:text-base hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 text-white px-3 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 transition-all duration-300 hover:shadow-md shadow-purple-400 shadow-sm hover:shadow-gray-500">
            Get Posts
          </button>
        </div>
        <div className="mt-4">
          <Link
            href="/"
            className="text-sm text-purple-600 hover:text-purple-800 transition-colors duration-300"
          >
            Don't have a website?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;