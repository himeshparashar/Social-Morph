import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 to-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-y-5">
          {/* Column 1 */}
          <div className="flex flex-col justify-center items-center gap-4">
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="71"
                height="55"
                fill="none"
                viewBox="0 0 71 55"
              >
                <path
                  fill="#113441"
                  d="M62.883 50.1c.988 0 1.523.734 1.523 1.642v1.723h-.662v-1.616c0-.594-.293-1.115-.908-1.115-.594 0-.894.5-.894 1.102v1.629h-.661v-1.63c0-.6-.3-1.101-.909-1.101-.614 0-.888.52-.888 1.115v1.616h-.66v-1.716c0-.915.52-1.65 1.502-1.65.654 0 1.128.334 1.295.842.18-.508.641-.841 1.262-.841ZM56.498 52.904c.607 0 .941-.528.941-1.135v-1.576h.661v1.656c0 .948-.574 1.696-1.602 1.696-1.015 0-1.59-.755-1.59-1.703v-1.649h.661v1.583c0 .6.328 1.128.929 1.128ZM53.044 53.538c-.608 0-1.075-.24-1.33-.727l.508-.28c.167.326.434.447.795.447.374 0 .661-.154.661-.441 0-.688-1.876-.167-1.876-1.416 0-.574.507-.995 1.222-.995.607 0 1.021.28 1.228.661l-.507.288c-.14-.288-.407-.388-.708-.388-.307 0-.574.16-.574.42 0 .669 1.876.181 1.876 1.416 0 .621-.6 1.015-1.295 1.015ZM48.505 54.967h-.662v-3.145c0-.975.755-1.71 1.743-1.71a1.71 1.71 0 0 1 1.736 1.71c0 .989-.714 1.723-1.71 1.723-.44 0-.84-.194-1.108-.487v1.91Zm1.081-2.043c.608 0 1.075-.5 1.075-1.095 0-.601-.467-1.088-1.075-1.088-.614 0-1.081.487-1.081 1.088 0 .594.467 1.095 1.081 1.095ZM46.306 50.193h.66v3.272h-.66v-3.272ZM55.223 47.207c-5.051 0-8.904-3.885-8.904-8.613 0-4.694 3.853-8.58 8.904-8.58 5.05 0 8.904 3.886 8.904 8.58 0 4.728-3.853 8.613-8.904 8.613Zm0-5.472c1.845 0 3.076-1.425 3.076-3.108 0-1.716-1.23-3.141-3.076-3.141s-3.076 1.425-3.076 3.14c0 1.684 1.23 3.11 3.076 3.11ZM35.314 54.654c-4.015 0-6.93-1.78-8.419-4.954l4.825-2.59c.518 1.1 1.49 2.234 3.497 2.234 2.104 0 3.497-1.328 3.659-3.659-.778.68-2.008 1.198-3.853 1.198-4.501 0-8.128-3.464-8.128-8.321 0-4.695 3.854-8.515 8.905-8.515 5.18 0 8.904 3.594 8.904 8.547v6.411c0 5.828-4.048 9.649-9.39 9.649Zm.388-13.243c1.749 0 3.076-1.198 3.076-2.979 0-1.748-1.327-2.914-3.076-2.914-1.716 0-3.075 1.166-3.075 2.914 0 1.781 1.36 2.98 3.075 2.98ZM17.009 47.207c-5.051 0-8.904-3.885-8.904-8.613 0-4.694 3.853-8.58 8.904-8.58 5.05 0 8.904 3.886 8.904 8.58 0 4.728-3.853 8.613-8.904 8.613Zm0-5.472c1.845 0 3.076-1.425 3.076-3.108 0-1.716-1.23-3.141-3.076-3.141s-3.076 1.425-3.076 3.14c0 1.684 1.23 3.11 3.076 3.11ZM0 23.085h5.828v23.636H0V23.085ZM70.734 32a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                ></path>
                <path
                  fill="#FFD43E"
                  fillRule="evenodd"
                  d="M54.79 9.665a33 33 0 0 1 9.616 21.525 11.867 11.867 0 0 0-6.561-3.9 27 27 0 0 0-50.1-7.205H1.086A33 33 0 0 1 54.79 9.665ZM8.828 30.15Zm7.587-3.122a12.704 12.704 0 0 0 0 0Zm9.986 4.415Zm8.685-4.377a12.784 12.784 0 0 0 0 0Zm10.481 4.719Zm8.911-4.75a12.653 12.653 0 0 0 0 0Z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#EE8E1D"
                  fillRule="evenodd"
                  d="M50.547 13.908a27.001 27.001 0 0 1 7.298 13.382c-.842-.18-1.72-.276-2.622-.276-1.22 0-2.394.174-3.497.499a20.999 20.999 0 0 0-40.81 1.108 11.8 11.8 0 0 0-2.088 1.529V20.085H7.744a27 27 0 0 1 42.803-6.177ZM26.401 31.443c-1.761-2.194-4.323-3.746-7.284-4.252 2.96.506 5.523 2.058 7.284 4.252Z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#971C1C"
                  d="M46.306 30.888a15 15 0 0 0-28.613-3.856c3.56.192 6.67 1.873 8.708 4.411 2.172-2.69 5.563-4.396 9.399-4.396 4.11 0 7.642 1.802 9.767 4.738.231-.311.478-.61.739-.897Z"
                ></path>
                <path
                  fill="#D62727"
                  fillRule="evenodd"
                  d="M51.725 27.513a11.85 11.85 0 0 0-5.42 3.375 15 15 0 0 0-28.612-3.856 12.716 12.716 0 0 0-.684-.018c-2.237 0-4.317.586-6.093 1.607a21 21 0 0 1 40.81-1.108Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div> */}
            <div className="Z-50 flex items-center justify-center">
              <Image alt="logo" src={"/log.png"} width={150} height={150} />
            </div>

            <h1 className="text-3xl font-bold text-center">
              LinkedIn content creation made easy
            </h1>
            <div className="flex gap-4 text-3xl">
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
            <p className="text-lg mt-2">support@gmail.com</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-3xl font-semibold">Quick Links</h2>
            <ul className="md:space-y-2 text-xl max-md:flex justify-center items-center space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold">Get Started</h2>
            <p className="text-lg">
              Try Marky now and generate 30 posts for free. Pay later to unlock
              additional features.
            </p>
            <div className="relative w-full md:w-[85%]">
              <input
                type="text"
                placeholder="Business Website"
                className="w-full py-3 px-4 rounded-full text-lg shadow-lg border-2 border-purple-100 placeholder-gray-300 focus:border-purple-500 focus:outline-none pr-20"
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
