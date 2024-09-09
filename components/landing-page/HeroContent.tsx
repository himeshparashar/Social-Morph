"use client";
import { FetchDataFromWebsite, GenerateContent } from "@/actions/generation";
import Link from "next/link";
import React from "react";

const HeroContent = () => {
  return (
    <div className="w-[62%] mx-auto">
      <div className="text-8xl  text-center tracking-wide leading-tight mt-24 font-semibold">
        <h1 className="gradient-text">
          30 days of content in{" "}
          <span className="purple-gradient">5 minutes</span>
        </h1>
      </div>
      <p className="text-center text-xl text-gray-600 tracking-wide mt-7 -ml-3">
        AI-powered social media marketing with GPT-4o
      </p>
      <div className="mt-20 text-center">
        <input
          type="text"
          placeholder="Business Website"
          className="w-3/4 py-4 px-5 rounded-full text-lg shadow-lg shadow-purple-200 border-2 border-purple-100 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-300 hover:transition-all ease-in-out hover:duration-500 focus:outline-none"
        />
        <button
          onClick={FetchDataFromWebsite}
          className="text-lg hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 text-white px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 hover:transition-all hover:duration-500 hover:shadow-md shadow-purple-400 shadow-md hover:shadow-gray-500 absolute -ml-28 mt-3"
        >
          Get Posts
        </button>
      </div>
      <div>
        <Link href="#" onClick={GenerateContent}>
          Don't Have a Website ?{" "}
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
