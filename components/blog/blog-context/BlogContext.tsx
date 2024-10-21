"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface BlogContextType {
  update: boolean | null;
  setUpdate: (update: boolean | null) => void;
}

// Default context value (optional)
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Create a custom hook to use the UserContext
export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Define the provider component props
interface BlogProviderProps {
  children: ReactNode;
}

// Create the provider component
export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [update, setUpdate] = useState<boolean | null>(null);

  return (
    <BlogContext.Provider value={{ update, setUpdate }}>
      {children}
    </BlogContext.Provider>
  );
};