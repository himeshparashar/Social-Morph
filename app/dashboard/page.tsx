"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { CalendarDays, Lightbulb, BarChart3, BookMarked, Plus, Search, Edit3 } from "lucide-react";
import Image from "next/image";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const HelpIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#666666"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
  )
}
const NotificationIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#666666"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z"/></svg>
  )
}


export default function Dashboard({children} : {children: React.ReactNode}) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <div>Not signed in</div>;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white shadow-lg relative">
        <div className="p-6">
          {/* Create Post Button */}
          <div className="mb-4 flex justify-between items-center">
            <button className="flex items-center px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition duration-200">
              <Edit3 className="h-5 w-5 mr-2" /> Create Post
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {[
              { name: "Dashboard", icon: <BookMarked className="h-5 w-5" />, active: true }, // Set Dashboard as active
              { name: "Projects", icon: <BookMarked className="h-5 w-5" />, active: false },
              { name: "Schedule", icon: <CalendarDays className="h-5 w-5" />, active: false },
              { name: "Idea Research", icon: <Lightbulb className="h-5 w-5" />, active: false },
              { name: "Analytics", icon: <BarChart3 className="h-5 w-5" />, active: false },
              { name: "Your Brands", icon: <BookMarked className="h-5 w-5" />, active: false }
            ].map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center px-4 py-2 ${
                  item.active ? "text-purple-600" : "text-gray-600"
                } hover:text-purple-700 rounded-lg transition-colors duration-200`}
                style={{ background: "transparent" }} // Remove background color
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* User Information */}
        <div className="absolute bottom-0 p-4 border-t w-full bg-gray-50">
          <div className="flex items-center space-x-4">
            {/* <Image
              src={user.imageUrl || "/placeholder.svg"}
              alt="User"
              width={40}
              height={40}
              className="rounded-full border-2 border-purple-200"
            /> */}
            <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Notifications"
                  labelIcon={<NotificationIcon />}
                  href="/notifications"
                />
                <UserButton.Link
                  label="Help"
                  labelIcon={<HelpIcon />}
                  href="/help"
                />
              </UserButton.MenuItems>
            </UserButton>
            </SignedIn>
            <div>
              <p className="font-medium text-gray-800">{user.fullName || "User Name"}</p>
              <p className="text-sm text-gray-500">{user.primaryEmailAddress?.emailAddress || "user@example.com"}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Hello, {user.firstName || "User"}</h1>

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
              <div className="flex space-x-4 mb-4">
                {["T", "L", "F", "I"].map((letter, index) => (
                  <div
                    key={letter}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md text-lg font-semibold ${
                      ["bg-blue-400", "bg-blue-600", "bg-blue-800", "bg-gradient-to-br from-purple-600 to-pink-500"][index]
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
      </main>
    </div>
  );
}
