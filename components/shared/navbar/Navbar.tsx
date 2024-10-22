"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
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

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) return null;

  return (
    <div className="bg-[#f8f9fa] shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-4 p-2 rounded-md hover:bg-gray-200 md:hidden"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>

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
  );
}
