"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BlogContextType {
  update: boolean | null;
  setUpdate: (update: boolean | null) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [update, setUpdate] = useState<boolean | null>(null);

  return (
    <BlogContext.Provider value={{ update, setUpdate }}>
      {children}
    </BlogContext.Provider>
  );
};