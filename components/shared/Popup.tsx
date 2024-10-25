// shared/Popup.tsx

import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest, FaYoutube, FaTiktok, FaBusinessTime, FaArrowAltCircleDown, FaFileAlt, FaPen, FaExpand, FaHeart } from "react-icons/fa"; // Make sure all icons are imported correctly
import ReactMarkdown from "react-markdown";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Use NEXT_PUBLIC_GEMINI_API_KEY for client-side access
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.error("NEXT_PUBLIC_GEMINI_API_KEY is not set in the environment variables.");
}

// Initialize the generative AI instance
const genAI = new GoogleGenerativeAI(apiKey || '');

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState<string[]>([]);
  const [wordCount, setWordCount] = useState(1200);
  const [emojiLevel, setEmojiLevel] = useState("small");
  const [postsToGenerate, setPostsToGenerate] = useState(1);
  const [generatedContent, setGeneratedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [favoritePrompts, setFavoritePrompts] = useState<string[]>([]);
  // Predefined prompts based on selected template
  const templates = {
    Suggested: "Generate a platform-appropriate post that resonates with the target audience on [platform].",
    Rewrite: "Rewrite this content for enhanced clarity, engagement, and alignment with the platform's tone.",
    Edit: "Edit this content to improve readability, professionalism, and conciseness.",
    "Explain & Expand": "Provide a detailed explanation or expand on the following ideas related to [topic].",
    Summarize: "Summarize the key points about [topic] in a short, informative format.",
    "Google Business Profile": "Write a promotional Google Business Profile post about [topic] to attract local customers.",
    Facebook: "Write a Facebook post that encourages interaction about [topic].",
    Instagram: "Create an Instagram post about [topic] with a captivating caption and relevant hashtags.",
    Twitter: "Craft a tweet about [topic] that's concise, engaging, and includes hashtags or mentions if relevant.",
    LinkedIn: "Compose a professional LinkedIn post about [topic], targeting industry professionals and thought leaders.",
    Pinterest: "Suggest a visually appealing Pinterest post concept related to [topic].",
    TikTok: "Create a TikTok video idea or caption that highlights [topic] in a fun and engaging way.",
    Youtube: "Write a YouTube video description that outlines the content and value of [topic] for viewers."
  };
  
    // Load favorite prompts from localStorage
    useEffect(() => {
      const savedFavorites = localStorage.getItem("favoritePrompts");
      if (savedFavorites) {
        setFavoritePrompts(JSON.parse(savedFavorites));
      }
    }, []);
  
    // Save favorite prompts to localStorage whenever favoritePrompts state changes
    useEffect(() => {
      localStorage.setItem("favoritePrompts", JSON.stringify(favoritePrompts));
    }, [favoritePrompts]);

  const handleTemplateClick = (template: keyof typeof templates) => {
    setPrompt(templates[template] || "");
  };

  // Save the current prompt to favorite prompts
  const handleSaveToFavorites = () => {
    if (prompt && !favoritePrompts.includes(prompt)) {
      setFavoritePrompts([...favoritePrompts, prompt]);
    }
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedContent("");

    try {
      if (!apiKey) {
        throw new Error("Gemini API key is not set. Please check your .env file.");
      }

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const fullPrompt = `Generate ${postsToGenerate} posts in a ${tone.join(", ")} manner about ${prompt} in ${wordCount} words with a ${emojiLevel} emoji level.`;

      const result = await model.generateContent(fullPrompt);
      const text = await result.response.text();

      setGeneratedContent(text);
    } catch (error) {
      console.error("Error generating content:", error);
      setError(error instanceof Error ? error.message : "An error occurred while generating content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null; // Don't render if the modal isn't open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white w-11/12 h-5/6 rounded-lg shadow-lg overflow-hidden flex">
        
        {/* Left Section: Prompt Templates */}
        <div className="w-1/4 bg-gray-100 p-6 border-r">
          <h2 className="text-lg font-semibold mb-4">Prompt Templates</h2>
          <div className="grid grid-cols-3 gap-4">
            <Button onClick={() => handleTemplateClick("Suggested")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaExpand className="text-lg text-white" />
              <span>Suggested</span>
            </Button>
            {/* Display the option to save to favorites */}
            <Button onClick={handleSaveToFavorites} className="col-span-2 w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaHeart className="text-lg text-white" />
              <span>Save to Favorites</span>
            </Button>

            {/* Display dynamically saved favorite prompts */}
            {favoritePrompts.length > 0 && favoritePrompts.map((favPrompt, index) => (
              <Button key={index} onClick={() => setPrompt(favPrompt)} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
                <FaHeart className="text-lg text-white" />
                <span>{favPrompt.substring(0, 10)}...</span> {/* Shortened display */}
              </Button>
            ))}
            <Button onClick={() => handleTemplateClick("Rewrite")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaPen className="text-lg text-white" />
              <span>Rewrite</span>
            </Button>
            <Button onClick={() => handleTemplateClick("Explain & Expand")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaArrowAltCircleDown className="text-lg text-white" />
              <span>Expand</span>
            </Button>
            <Button onClick={() => handleTemplateClick("Summarize")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaFileAlt className="text-lg text-white" />
              <span>Summarize</span>
            </Button>

            
            <Button onClick={() => handleTemplateClick("Google Business Profile")} className="col-span-2 w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaBusinessTime className="text-lg text-white" />
              <span>Google Business</span>
            </Button>

            <Button onClick={() => handleTemplateClick("Facebook")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaFacebook className="text-lg text-white" />
              <span>Facebook</span>
            </Button>
            <Button onClick={() => handleTemplateClick("Instagram")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaInstagram className="text-lg text-white" />
              <span>Instagram</span>
            </Button>
            <Button onClick={() => handleTemplateClick("Twitter")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaTwitter className="text-lg text-white" />
              <span>Twitter</span>
            </Button>
            <Button onClick={() => handleTemplateClick("LinkedIn")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaLinkedin className="text-lg text-white" />
              <span>LinkedIn</span>
            </Button>
            <Button onClick={() => handleTemplateClick("Pinterest")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaPinterest className="text-lg text-white" />
              <span>Pinterest</span>
            </Button>
            <Button onClick={() => handleTemplateClick("TikTok")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaTiktok className="text-lg text-white" />
              <span>TikTok</span>
            </Button>
            <Button onClick={() => handleTemplateClick("Youtube")} className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-purple-600 hover:bg-purple-800 text-white">
              <FaYoutube className="text-lg text-white" />
              <span>YouTube</span>
            </Button>
          </div>
        </div>
  
        {/* Middle Section: Prompt and Settings */}
        <div className="w-2/5 bg-white p-6 border-r">
          <h2 className="text-lg font-bold mb-4">Prompt</h2>
          <Textarea
            placeholder="Enter your post prompt here"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full mb-4"
          />
  
          {/* Tone Selection */}
          <div className="mb-4">
            <h3 className="text-lg mb-2">Tone</h3>
            <ToggleGroup
              type="multiple"
              value={tone}
              onValueChange={(values: string[]) => setTone(values)}
              className="space-x-2"
            >
              <ToggleGroupItem value="polite">Polite</ToggleGroupItem>
              <ToggleGroupItem value="funny">Funny</ToggleGroupItem>
              <ToggleGroupItem value="informal">Informal</ToggleGroupItem>
              <ToggleGroupItem value="formal">Formal</ToggleGroupItem>
              <ToggleGroupItem value="friendly">Friendly</ToggleGroupItem>
              <ToggleGroupItem value="more">More</ToggleGroupItem>
            </ToggleGroup>
          </div>
  
          {/* Word Count */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Approx Word Count</label>
            <Slider
              value={[wordCount]}
              onValueChange={(value) => setWordCount(value[0])}
              max={1000}
              step={10}
              className="mt-2"
            />
            <span className="text-sm text-gray-600">{wordCount} words</span>
          </div>
  
          {/* Emoji Level */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Emoji Level</label>
            <Select value={emojiLevel} onValueChange={setEmojiLevel}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select emoji level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
  
          {/* Posts to Generate */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Posts to Generate</label>
            <input
              type="number"
              value={postsToGenerate}
              onChange={(e) => setPostsToGenerate(Number(e.target.value))}
              min={1}
              max={5}
              className="w-20 p-2 border border-gray-300 rounded-md"
            />
          </div>
  
          <Button onClick={handleGenerate} disabled={isLoading} className="w-full bg-purple-700 text-white">
            {isLoading ? "Generating..." : "Generate Post"}
          </Button>
  
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
  
        {/* Right Section: Generated Posts */}
        <div className="w-1/3 p-6 bg-gray-50">
          <h2 className="text-lg font-bold mb-4">Post</h2>
          {generatedContent ? (
            <div className="bg-white p-4 rounded shadow">
              {/* Render the generated content with markdown */}
              <ReactMarkdown className="prose">{generatedContent}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-gray-600">No content generated yet. Enter a prompt and click "Generate".</p>
          )}
        </div>
  
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
}  

export default Popup;
