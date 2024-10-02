import Sidebar from "@/components/dasboard/Sidebar";
import React from "react";

const page = () => {
  return (
    <div>
      <div className=" flex w-48 h-screen">
        <Sidebar />
      </div>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard</p>
      </div>
    </div>
  );
};

export default page;
