"use client";

import React, { useState, useEffect } from "react";
import { useClerk } from "@clerk/nextjs";
import {
  Menu,
  X,
  Edit3,
  LayoutDashboard,
  FolderKanban,
  CalendarDays,
  Lightbulb,
  BarChart3,
  Briefcase,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { signOut } = useClerk();
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMinimized(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <aside
      className={`${
        isMinimized ? "w-16" : "w-64"
      } border-r bg-[#f8f9fa] shadow-lg flex flex-col transition-all duration-300 ${
        isMobile ? "fixed inset-y-0 left-0 z-50 transform" : ""
      } ${isMobile && isMinimized ? "-translate-x-full" : ""}`}
    >
      <div className="p-4 flex-grow">
        <div className="flex items-center mb-6">
          {!isMinimized && (
            <div className="z-50 mr-2">
              <Image src="/latestLogo.png" alt="Logo" width={200} height={50} />
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-200 ml-auto"
          >
            {isMinimized ? (
              <Menu className="h-6 w-6 text-gray-600" />
            ) : (
              <X className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {!isMinimized && (
          <div className="mb-4 flex justify-between items-center">
            <button className="flex items-center px-4 py-2 text-white bg-purple-800 hover:bg-purple-700 rounded-md shadow-md transition duration-200">
              <Edit3 className="h-5 w-5 mr-2" /> Create Post
            </button>
          </div>
        )}

        <nav className="space-y-1">
          {[
            {
              name: "Dashboard",
              icon: <LayoutDashboard className="h-5 w-5" />,
              href: "/dashboard",
            },
            {
              name: "Projects",
              icon: <FolderKanban className="h-5 w-5" />,
              href: "/projects",
            },
            {
              name: "Schedule",
              icon: <CalendarDays className="h-5 w-5" />,
              href: "/schedule",
            },
            {
              name: "Idea Research",
              icon: <Lightbulb className="h-5 w-5" />,
              href: "/idea-research",
            },
            {
              name: "Analytics",
              icon: <BarChart3 className="h-5 w-5" />,
              href: "/analytics",
            },
            {
              name: "Your Brands",
              icon: <Briefcase className="h-5 w-5" />,
              href: "/brands",
            },
          ].map((item) => (
            <Link href={item.href} key={item.name} passHref>
              <button
                className={`w-full flex items-center ${
                  isMinimized ? "justify-center" : "px-4"
                } py-2 ${
                  pathname === item.href
                    ? "text-white bg-purple-600 hover:bg-purple-700"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                } rounded-lg transition-colors duration-200`}
              >
                <span
                  className={`flex-shrink-0 ${
                    isMinimized ? "mx-auto" : "mr-3"
                  }`}
                >
                  {item.icon}
                </span>
                {!isMinimized && <span>{item.name}</span>}
              </button>
            </Link>
          ))}
        </nav>
      </div>

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
  );
}
