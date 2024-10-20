import React from "react";
import { FaCheck } from "react-icons/fa";

const Infocards = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 p-5">
      {/* Card Section */}
      <div className="lg:w-1/2 bg-gradient-to-r from-purple-50 to-purple-200 shadow-lg shadow-purple-400 rounded-2xl">
        <div className="px-10 py-7">
          <h1 className="text-3xl md:text-5xl md:leading-[3.5rem] font-bold purple-gradient w-full text-center lg:text-left">
            Manage unlimited brands & social accounts
          </h1>
          <p className="my-3 text-lg text-center lg:text-left">
            Post and track analytics for all your brands in one place
          </p>
          <div className="space-y-2">
            <p className="flex items-center justify-center lg:justify-start text-lg">
              <FaCheck className="text-green-600 mr-2" />
              Unlimited accounts
            </p>
            <p className="flex items-center justify-center lg:justify-start text-lg">
              <FaCheck className="text-green-600 mr-2" />
              Unlimited brands
            </p>
            <p className="flex items-center justify-center lg:justify-start text-lg">
              <FaCheck className="text-green-600 mr-2" />
              Unlimited posts
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src="https://minvo.pro/_next/image?url=%2Fassets%2Fimages%2Fillustrations%2FMultiBrand.png&w=640&q=75"
          alt="info-img-1"
          className="w-full max-w-md mx-auto"
        />
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
