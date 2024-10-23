"use client";

import React from "react";
import { PlusCircle, Eye, Settings, Edit, MoreVertical } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for projects
const projects = [
  {
    id: 1,
    name: "Zero-Click Content",
    description:
      "Industry expertise shared natively, without sending users outside the...",
    isActive: true,
    posts: 15,
    platforms: ["facebook", "twitter", "instagram", "linkedin", "youtube"],
  },
  {
    id: 2,
    name: "Webinar Content",
    description: "Content related to our upcoming webinars and online events.",
    isActive: true,
    posts: 8,
    platforms: ["facebook", "twitter", "linkedin", "youtube"],
  },
  {
    id: 3,
    name: "Product Spotlight",
    description:
      "Posts about SB (existing & new features + concierge + mentions of Soc...",
    isActive: true,
    posts: 12,
    platforms: ["facebook", "twitter", "instagram", "linkedin", "youtube"],
  },
  {
    id: 4,
    name: "Weekly Blog Post",
    description: "Content promoting our blog",
    isActive: true,
    posts: 5,
    platforms: ["facebook", "twitter", "linkedin", "instagram", "youtube"],
  },
  {
    id: 5,
    name: "Behind the Scenes",
    description:
      "A sneak peek into SocialBee's day-to-day operations, team culture, and...",
    isActive: false,
    posts: 7,
    platforms: ["facebook", "twitter", "instagram", "linkedin", "youtube"],
  },
  {
    id: 6,
    name: "Content without a category",
    description: "Content that hasn't been saved in a category",
    isActive: true,
    posts: 2,
    platforms: ["facebook", "twitter", "instagram", "linkedin", "youtube"],
  },
];

const platformIcons = {
  facebook: "🇫",
  twitter: "🇹",
  instagram: "🇮",
  linkedin: "🇱",
  youtube: "🇾",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Project
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: any) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-lg font-semibold">{project.name}</h2>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">Active</span>
        <Switch checked={project.isActive} />
      </div>
      <div className="mb-4">
        <span className="text-sm font-medium">Posts for</span>
        <div className="flex mt-1 space-x-1">
          {project.platforms.map((platform: keyof typeof platformIcons) => (
            <div
              key={platform}
              className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs"
            >
              {platformIcons[platform]}
            </div>
          ))}
          {project.platforms.length > 5 && (
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium">
              +{project.platforms.length - 5}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button variant="outline" className="text-sm">
          <Eye className="mr-2 h-4 w-4" /> View Posts ({project.posts})
        </Button>
        <Button variant="outline" className="text-sm">
          <Settings className="mr-2 h-4 w-4" /> Edit Category
        </Button>
        <Button variant="outline" className="text-sm">
          <Edit className="mr-2 h-4 w-4" /> Bulk Editor
        </Button>
      </div>
    </div>
  );
}
