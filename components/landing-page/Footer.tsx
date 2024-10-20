import Image from "next/image";
import React from "react";
import { FaLinkedin,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 to-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-y-5">
          {/* Column 1 */}
          <div className="flex flex-col justify-center items-center gap-4">
           <div>
           <div>
            <img src="latestLogo.png" alt="Logo" width="300" height="" />
            </div>
           
            <h1 className="text-2xl font-bold ">
              LinkedIn content creation made easy
            </h1>
            </div>
           <div className="flex flex-col gap-3 w-full md:items-center mt-3 ">
           <div className="flex gap-3 text-2xl">

              <a  className ="hover:text-white text-[#E5D9F2] border-2 border-[#E5D9F2] rounded-full p-2 hover:border-[#fff]"
                href="https://www.linkedin.com/in/himeshparashar/"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a  className = "hover:text-white text-[#E5D9F2] border-2 border-[#E5D9F2] rounded-full p-2 hover:border-[#fff]" href="https://x.com/himesh_dev" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a  className = "hover:text-white text-[#E5D9F2] border-2 border-[#E5D9F2] rounded-full p-2 hover:border-[#fff]" href="https://www.instagram.com/himeshig" aria-label="Twitter">
              <RiInstagramFill />
              </a>
              <a  className = "hover:text-white text-[#E5D9F2] border-2 border-[#E5D9F2] rounded-full p-2 hover:border-[#fff]" href="https://www.instagram.com/himeshig/" aria-label="Twitter">
              <FaFacebook />
              </a>
            </div>
           <div className="flex space-x-2 ">
         
           <p > <IoMail size={20}/></p>

           <p className="hover:underline">himeshparashar424@gmail.com</p>
          </div>
           </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 justify-center md:items-center mt-5 md:mt-0">
           <div className="space-y-2">
           <h2 className="text-3xl font-semibold ">Quick Links</h2>
            <ul className="md:space-y-2 text-xl max-md:flex  space-x-4 md:space-x-0  md:px-2 text-[#E5D9F2]">
              <li>
                <a href="#" className="hover:underline hover:text-[#fff]">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fff]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fff]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fff]">
                  FAQ
                </a>
              </li>
            </ul>
           </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 md:text-center md:items-center mt-3 md:mt-0">
            <h2 className="text-3xl font-semibold">Get Started</h2>
            <p className="text-lg">
              Try Social Morph now and generate 30 posts for free. Pay later to
              unlock additional features.
            </p>
            <div className="relative w-full md:w-[85%]">
              <input
                type="text"
                placeholder="Business Website"
                className="w-full py-3 px-4 text-black rounded-full text-lg shadow-lg border-2 border-purple-100 placeholder-gray-300 focus:border-purple-500 focus:outline-none pr-20"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-purple-900 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                Get Posts
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 border-t border-purple-200 pt-4">
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
