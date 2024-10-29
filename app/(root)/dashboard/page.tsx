"use client";

import React from "react";
import { Plus } from "lucide-react";

export default function DashboardContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Connected Accounts
            </h3>
            <div className="flex flex-wrap gap-4 mb-4">
              {["T", "L", "F", "I"].map((letter, index) => (
                <div
                  key={letter}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md text-lg font-semibold ${
                    [
                      "bg-blue-400",
                      "bg-blue-600",
                      "bg-blue-800",
                      "bg-purple-500",
                    ][index]
                  }`}
                >
                  {letter}
                </div>
              ))}
            </div>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center transition-colors duration-200">
              <Plus className="mr-2 h-5 w-5" /> Add New Account
            </button>
          </div>
        </div>

        <div className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Trending Hashtags
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "#AI",
                "#Marketing",
                "#SocialMedia",
                "#Growth",
                "#Strategy",
                "#ContentCreation",
                "#DigitalMarketing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
