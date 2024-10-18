"use client";
import { faq } from "@/utils/constants";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    setShowAnswer(showAnswer === index ? null : index);
  };

  return (
    <div className="py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-6xl gradient-text">Frequently Asked Questions</h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light my-5 leading-snug md:w-1/3 text-center">
          Find answers to commonly asked questions about our product and
          services
        </p>
      </div>
      <div className="right mb-36 w-2/3 mx-auto select-none space-y-10">
        {faq.map((faq, i) => (
          <div key={i}>
            <div
              className="bg-gradient-to-r from-purple-100 shadow-lg shadow-purple-300 p-4 mx-3 md:p-7 md:m-5 rounded-xl transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => handleAccordion(i)}
              >
                <h1 className="md:text-2xl text-lg dm-sans-font w-[87%]">
                  {faq.question}
                </h1>

                <div
                  className={`text-2xl transform transition-transform duration-300 ${
                    showAnswer === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {showAnswer === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>

              {/* Expand/collapse content with slide and fade-in animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showAnswer === i ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className={`mt-5 text-lg text-gray-500 w-[95%] md:w-5/6 transition-opacity duration-300 ease-in-out ${
                    showAnswer === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
