// import { callToAction } from "@/lib/actions/analyzer/analyze.action";
import { WebExtractor } from "@/lib/actions/analyzer/scrapper";
import React from "react";

const page = async () => {
  const test1 = await WebExtractor("https://chirpn.com");
  return (
    <div>
      page
      <p>{test1}</p>
    </div>
  );
};

export default page;
