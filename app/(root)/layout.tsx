"use client";

import React, { useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body>
        <div
          className="flex h-screen bg-gray-50 overflow-hidden"
          style={{
            backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
              `,
            backgroundSize: "40px 40px",
          }}
        >
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar toggleSidebar={toggleSidebar} />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
