import { Summarizer } from "./analyze.action";
import axios from "axios";

export const WebExtractor = async (url: string) => {
  console.log("yooyoyoyo");

  const response = await axios.get(`https://r.jina.ai/${url}`);
  const description = await Summarizer(response.data);
  return description;
};
