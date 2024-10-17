import React from "react";
import { FaCheck } from "react-icons/fa";

const Infocards = () => {
  return (
<div class="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 p-5">
  <!-- Card Section -->
  <div class="lg:w-1/2 bg-gradient-to-r from-purple-50 to-purple-200 shadow-lg shadow-purple-400 rounded-2xl">
    <div class="px-10 py-7">
      <h1 class="text-3xl md:text-5xl md:leading-[3.5rem] font-bold purple-gradient w-full text-center lg:text-left">
        Manage unlimited brands & social accounts
      </h1>
      <p class="my-3 text-lg text-center lg:text-left">
        Post and track analytics for all your brands in one place
      </p>
      <div class="space-y-2">
        <p class="flex items-center justify-center lg:justify-start text-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-green-600 mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            ></path>
          </svg>
          Unlimited accounts
        </p>
        <p class="flex items-center justify-center lg:justify-start text-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-green-600 mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            ></path>
          </svg>
          Unlimited brands
        </p>
        <p class="flex items-center justify-center lg:justify-start text-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-green-600 mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            ></path>
          </svg>
          Unlimited posts
        </p>
      </div>
    </div>
  </div>

  <!-- Image Section -->
  <div class="lg:w-1/2">
    <img
      src="https://minvo.pro/_next/image?url=%2Fassets%2Fimages%2Fillustrations%2FMultiBrand.png&w=640&q=75"
      alt="info-img-1"
      class="w-full max-w-md mx-auto"
    />
  </div>
</div>

      <div className="flex lg:justify-between lg:items-center mt-14 flex-wrap-reverse justify-center items-center">
        <div>
          <img
            src="https://minvo.pro/_next/image?url=%2Fassets%2Fimages%2Fillustrations%2Fai-captions-and-hashtags.png&w=640&q=75"
            alt="info-img-2"
          />
        </div>
        <div className="lg:w-1/2 bg-gradient-to-r to-purple-50 from-purple-200 shadow-lg shadow-purple-400 rounded-2xl">
          <div className="p-20">
            <h1 className="text-3xl md:text-5xl md:leading-[3.5rem] font-bold gradient-text">
              Instantly write viral captions & hashtags
            </h1>
            <p className="my-3 text-lg w-3/4">
              Unlimited AI-powered captions and hashtags for all your social
              media posts
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocards;
