import Hero from "@/components/landing-page/Hero";
import VideoSection from "@/components/landing-page/VideoSection";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 -z-10">
        <div className="min-h-screen w-full bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <Hero />
      <VideoSection />
    </div>
  );
};

export default page;
