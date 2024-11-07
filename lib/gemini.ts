import { GoogleGenerativeAI } from "@google/generative-ai";

// Use NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY for client-side access
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error(
    "NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY is not set in the environment variables."
  );
}

// Initialize the generative AI instance
export const genAI = new GoogleGenerativeAI(apiKey as string);
