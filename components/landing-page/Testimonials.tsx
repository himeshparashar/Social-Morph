"use client";
import React from "react";
import { TESTIMONIALS, TESTIMONIALS_INFO_CONTENT } from "../../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import CountUp from "react-countup";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative pt-28 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(229,204,255,0.2)_100%)] overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-3xl lg:text-5xl md:w-3/6 ml-20 leading-tight gradient-text">
          Trusted to publish 200k posts across 12k channels
        </h1>
        <div className="flex mt-12 justify-around w-full">
          {TESTIMONIALS_INFO_CONTENT.map((info, index) => (
            <div key={index} className="border-l-4 border-gray-300 pl-7">
              <h1 className="text-4xl md:text-8xl purple-gradient">
                <CountUp
                  start={0}
                  prefix={info.prefix || ""}
                  end={info.title}
                  duration={5} // Duration for the animation
                  suffix={info.suffix || ""}
                  decimals={info.title % 1 !== 0 ? 1 : 0} // Set decimals for values with fractions
                />
              </h1>
              <p className="text-sm md:text-xl gradient-text">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative z-10 my-12 container mx-auto px-4 w-[90%]">
        <Slider {...settings}>
          {TESTIMONIALS.map((testis, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 mt-16 mb-10 rounded-lg h-[540px] bg-white shadow-lg shadow-purple-300 hover:shadow-lg hover:shadow-purple-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="text-center">
                <img
                  src={testis.img}
                  alt="img"
                  className="w-16 h-16 rounded-full object-cover mb-4 mx-auto"
                />
                <h1 className="text-xl font-semibold text-center mb-4">
                  {testis.name}
                </h1>
                <h1 className="flex gap-1 text-purple-700 justify-center mb-3 -mt-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </h1>
              </div>
              <p className="leading-relaxed text-lg">{testis.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
