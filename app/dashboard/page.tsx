"use client";

import React, { useState, useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import {
  CalendarDays,
  Lightbulb,
  BarChart3,
  Plus,
  Search,
  Edit3,
  LogOut,
  Menu,
  LayoutDashboard,
  FolderKanban,
  Briefcase,
  X,
} from "lucide-react";
import Image from "next/image";

const HelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="17px"
    viewBox="0 -960 960 960"
    width="17px"
    fill="#666666"
  >
    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
);

const NotificationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="17px"
    viewBox="0 -960 960 960"
    width="17px"
    fill="#666666"
  >
    <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z" />
  </svg>
);

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMinimized(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <div>Not signed in</div>;

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Sidebar */}
      <aside
        className={`${
          isMinimized ? "w-16" : "w-64"
        } border-r bg-[#f8f9fa] shadow-lg flex flex-col transition-all duration-300 ${
          isMobile ? "fixed inset-y-0 left-0 z-50 transform" : ""
        } ${isMobile && isMinimized ? "-translate-x-full" : ""}`}
      >
        <div className="p-4 flex-grow">
          {/* SocialMorph Logo and Hamburger Menu */}
          <div className="flex items-center mb-6">
            {!isMinimized && (
              <div className="z-50 mr-2">
                <img src="latestLogo.png" alt="Logo" width="200" height="" />
              </div>
            )}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-200 ml-auto"
            >
              {isMinimized ? <Menu className="h-6 w-6 text-gray-600" /> : <X className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

          {/* Create Post Button */}
          {!isMinimized && (
            <div className="mb-4 flex justify-between items-center">
              <button className="flex items-center px-4 py-2 text-white bg-purple-800 hover:bg-purple-700 rounded-md shadow-md transition duration-200">
                <Edit3 className="h-5 w-5 mr-2" /> Create Post
              </button>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="space-y-1">
            {[
              { name: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, active: true },
              { name: "Projects", icon: <FolderKanban className="h-5 w-5" />, active: false },
              { name: "Schedule", icon: <CalendarDays className="h-5 w-5" />, active: false },
              { name: "Idea Research", icon: <Lightbulb className="h-5 w-5" />, active: false },
              { name: "Analytics", icon: <BarChart3 className="h-5 w-5" />, active: false },
              { name: "Your Brands", icon: <Briefcase className="h-5 w-5" />, active: false }
            ].map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center ${
                  isMinimized ? "justify-center" : "px-4"
                } py-2 ${
                  item.active
                    ? "text-white bg-purple-600 hover:bg-purple-700"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                } rounded-lg transition-colors duration-200`}
              >
                <span className={`flex-shrink-0 ${isMinimized ? "mx-auto" : "mr-3"}`}>
                  {item.icon}
                </span>
                {!isMinimized && <span>{item.name}</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Sign Out Button */}
        <div className="p-4 border-t">
          <button
            onClick={() => signOut()}
            className="w-full flex items-center px-4 py-2 text-gray-600 hover:text-purple-700 rounded-lg transition-colors duration-200"
          >
            <LogOut className={`h-5 w-5 ${isMinimized ? "mx-auto" : "mr-3"}`} />
            {!isMinimized && <span>Sign out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-[#f8f9fa] shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                {isMobile && (
                  <button
                    onClick={toggleSidebar}
                    className="mr-4 p-2 rounded-md hover:bg-gray-200"
                  >
                    <Menu className="h-6 w-6 text-gray-600" />
                  </button>
                )}
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              </div>

              {/* User Information */}
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-200">
                  <HelpIcon />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200">
                  <NotificationIcon />
                </button>
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {user.fullName || "User Name"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user.primaryEmailAddress?.emailAddress || "user@example.com"}
                  </p>
                </div>
                <Image
                  src={user.imageUrl || "/placeholder.svg"}
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-purple-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Input Box */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="type here to generate content for your website"
                className="w-full px-4 py-3 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 rounded-lg text-lg"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-6">
            {/* Connected Accounts */}
            <div className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Connected Accounts</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  {["T", "L", "F", "I"].map((letter, index) => (
                    <div
                      key={letter}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md text-lg font-semibold ${
                        ["bg-blue-400", "bg-blue-600", "bg-blue-800", "bg-purple-500"][index]
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

            {/* Trending Hashtags */}
            <div className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Trending Hashtags</h3>
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
      </main>
    </div>
  );
}