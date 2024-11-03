"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Plus } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    "NEXT_PUBLIC_GEMINI_API_KEY is not set in the environment variables."
  );
}
const genAI = new GoogleGenerativeAI(apiKey || "");

export default function DashboardContent() {
  const [inputText, setInputText] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [generatedHashtags, setGeneratedHashtags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const customPrompt =
    "Return result using this JSON schema. Example: {content: 'just generated content about topic without hastags or anything else', hashtags: ['hashtag1', 'hashtag2', ...]}. Generate a social media post about: ";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const generateContent = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);
    setGeneratedContent("");
    setGeneratedHashtags([]);

    try {
      if (!apiKey) {
        throw new Error(
          "Gemini API key is not set. Please contact project support"
        );
      }

      const fullPrompt = `${customPrompt} ${inputText}`;
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(fullPrompt);
      const response = await result.response;
      const text = await response.text();
      const JsonResponse = text.replace(
        /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
        '"$2":'
      );
      const jsonResponse = JSON.parse(JsonResponse);
      setGeneratedContent(jsonResponse.content);
      setGeneratedHashtags(jsonResponse.hashtags);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred while generating content. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here to generate content for your post"
            className="w-full px-4 py-3 border border-gray-300 focus:border-[#401B80] focus:ring focus:ring-purple-200 focus:ring-opacity-50 rounded-lg text-lg"
            value={inputText}
            onChange={handleInputChange}
          />
          <button
            onClick={generateContent}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>

      {(isLoading || generatedContent || error) && (
        <div className="mb-8 p-6 bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#401B80]"></div>
            </div>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <ReactMarkdown className="text-gray-600 whitespace-pre-wrap">
              {generatedContent}
            </ReactMarkdown>
          )}
        </div>
      )}

      <div className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Trending Hashtags
          </h3>
          <div className="flex flex-wrap gap-2">
            {generatedHashtags.length > 0
              ? generatedHashtags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))
              : [
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
      </div>
    </div>
  );
}
