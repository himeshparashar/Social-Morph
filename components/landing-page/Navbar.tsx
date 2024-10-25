"use client";
import React, { useState } from "react";
import {
  IoMdArrowDropup,
  IoMdArrowDropdown,
} from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="mx-4 mt-5">
        <div className="flex justify-between items-center gap-14">
          {/* LOGO */}
          <div className="z-50">
            <img src="latestLogo.png" alt="Logo" width="200" />
          </div>

          <div className="max-md:hidden">
            <div className="flex gap-12 text-lg">
              {/* FEATURES DROPDOWN */}
              <div
                className="relative cursor-pointer group"
                onMouseEnter={() => setShowFeatures(true)}
                onMouseLeave={() => setShowFeatures(false)}
              >
                <div className="flex items-center gap-1 group-hover:text-purple-600">
                  Features
                  {/* Up/Down icons for medium+ screens */}
                  <span className="hidden md:block">
                    {!showFeatures ? (
                      <IoMdArrowDropdown className="text-xl" />
                    ) : (
                      <IoMdArrowDropup className="text-xl" />
                    )}
                  </span>
                  
                </div>

                {/* DROPDOWN MENU */}
                {showFeatures && (
                  <div className="absolute top-full left-0 w-fit bg-white py-5 px-6 rounded-xl shadow-xl shadow-purple-300 z-50 transition-all duration-300">
                    <ul>
                      <li className="cursor-pointer hover:text-purple-600">Generate</li>
                      <li className="cursor-pointer my-5 hover:text-purple-600">Schedule</li>
                      <li className="cursor-pointer hover:text-purple-600">Design</li>
                    </ul>
                  </div>
                )}
              </div>

              <Link href="/pricing">
                <h1 className="cursor-pointer hover:text-purple-600">Pricing</h1>
              </Link>
              <h1 className="cursor-pointer hover:text-purple-600 ml-2">Blog</h1>
            </div>
          </div>

          <div className="max-md:hidden">
            <button className="text-lg hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 text-white px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-purple-900 hover:transition-all hover:duration-500 hover:shadow-lg shadow-purple-400 shadow-md hover:shadow-gray-500">
              Get Started
            </button>
          </div>

          <div className="md:hidden z-50">
            <button className="text-3xl" onClick={toggleNavbar}>
              {isOpen ? <RxCross1 /> : <CiMenuBurger />}
            </button>
          </div>

          {isOpen && (
            <div className="fixed inset-0 flex flex-col justify-center items-center space-y-8 h-[60dvh] bg-purple-200/95 z-40">
              <div className="text-2xl flex flex-col justify-center items-center space-y-6">
                <div
                  className="cursor-pointer"
                  onMouseEnter={() => setShowFeatures(true)}
                  onMouseLeave={() => setShowFeatures(false)}
                >
                  <div className="flex items-center gap-1 relative">
                    Features{" "}
                    
                    {/* Left/Right icons for small screens */}
                    <span className="md:hidden block">
                      {!showFeatures ? (
                        <FaAngleRight className="text-xl" />
                      ) : (
                        <FaAngleLeft className="text-xl" />
                      )}
                    </span>
                    {showFeatures && (
                      <div className="absolute top-0 left-[100%] text-[1rem] w-fit bg-white py-5 px-6 rounded-xl shadow-xl shadow-purple-300 z-40 transition-all duration-300">
                        <ul>
                          <li className="cursor-pointer hover:text-purple-600">Generate</li>
                          <li className="cursor-pointer hover:text-purple-600">Schedule</li>
                          <li className="cursor-pointer hover:text-purple-600">Design</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <h1 className="cursor-pointer">Pricing</h1>
                <h1 className="cursor-pointer ml-2">Blog</h1>
                <button className="text-lg hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 text-white px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-purple-900 hover:transition-all hover:duration-500 hover:shadow-lg shadow-purple-400 shadow-md hover:shadow-gray-500">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
