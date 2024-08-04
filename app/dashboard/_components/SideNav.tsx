"use client";
import {
  Divide,
  FileClock,
  Home,
  Settings,
  Wallet,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import path from "path";
import React, { use } from "react";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src="/logo.svg" alt="logo" width={120} height={100} />
      </div>
      <hr className="my-6 border" />
      <div className="">
        {MenuList.map((menu, index) => (
          <div
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
          ${path === menu.path ? "bg-primary text-white" : ""}
          `}
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
