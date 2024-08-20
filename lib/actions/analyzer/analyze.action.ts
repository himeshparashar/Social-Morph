"use server";

import { getLLM } from "@/utils/AiModel";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

export async function callToAction(contextData: string): Promise<any> {
  try {
    const llm = getLLM;
    const template = `
    "You are a social media business analyst."
    "You are given with below a organisation detailed information"
    "Your task is to identify what should be the call to action about business based on the content"
    context_data:
    ${contextData}

    Generate at least 3 calls to action using the given content
    `;

    const outputParser = new StringOutputParser();

    const prompt = PromptTemplate.fromTemplate(template); // Adjust based on actual method
    const callToActionChain = prompt.pipe(llm).pipe(outputParser);
    const res = callToActionChain.invoke({ context_data: contextData });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function GetNiche(contextData: string): Promise<any> {
  try {
    const llm = getLLM;
    const template = `
    "You are a social media business analyst."
    "You are given with below a organisation detailed information"
    "Your task is to identify what should be the niche of the business based on the content"
    context_data:
    ${contextData}

    Identify the niche of the business based on the content

    in a rich text editor format
    `;

    const outputParser = new StringOutputParser();

    const prompt = PromptTemplate.fromTemplate(template); // Adjust based on actual method
    const nicheChain = prompt.pipe(llm).pipe(outputParser);
    const res = nicheChain.invoke({ context_data: contextData });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function GetCoreValue(contextData: string): Promise<any> {
  try {
    const llm = getLLM;
    const template = `
    "You are a social media business analyst."
    "You are given with below a organisation detailed information"
    "Your task is to identify what should be the core value of the business based on the content"
    context_data:
    ${contextData}

    Identify the core value of the business based on the content

    in a rich text editor format
    `;

    const outputParser = new StringOutputParser();

    const prompt = PromptTemplate.fromTemplate(template); // Adjust based on actual method
    const coreValueChain = prompt.pipe(llm).pipe(outputParser);
    const res = coreValueChain.invoke({ context_data: contextData });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function GetUniqueSellingPoint(contextData: string): Promise<any> {
  try {
    const llm = getLLM;
    const template = `
    "You are a social media business analyst."
    "You are given with below a organisation detailed information"
    "Your task is to identify what should be the unique selling point of the business based on the content"
    context_data:
    ${contextData}

    Identify the unique selling point of the business based on the content

    in a rich text editor format
    `;

    const outputParser = new StringOutputParser();

    const prompt = PromptTemplate.fromTemplate(template); // Adjust based on actual method
    const uniqueSellingPointChain = prompt.pipe(llm).pipe(outputParser);
    const res = uniqueSellingPointChain.invoke({ context_data: contextData });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function GetTargetAudience(contextData: string): Promise<any> {
  try {
    const llm = getLLM;
    const template = `
    "You are a social media business analyst."
    "You are given with below a organisation detailed information"
    "Your task is to identify what should be the target audience of the business based on the content"
    context_data:
    ${contextData}

    Identify the target audience of the business based on the content

    in a rich text editor format
    `;

    const outputParser = new StringOutputParser();

    const prompt = PromptTemplate.fromTemplate(template); // Adjust based on actual method
    const targetAudienceChain = prompt.pipe(llm).pipe(outputParser);
    const res = targetAudienceChain.invoke({ context_data: contextData });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function GetObjective(contextData: string): Promise<any> {
  try {
    const llm = getLLM;
    const template = `
    "You are a social media business analyst."
    "You are given with below a organisation detailed information"
    "Your task is to identify what should be the objective of the business based on the content"
    context_data:
    ${contextData}

    Identify the objective of the business based on the content

    in a rich text editor format
    `;

    const outputParser = new StringOutputParser();

    const prompt = PromptTemplate.fromTemplate(template); // Adjust based on actual method
    const objectiveChain = prompt.pipe(llm).pipe(outputParser);
    const res = objectiveChain.invoke({ context_data: contextData });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function GetPainPoints(contextData: string): Promise<any> {
  try {
    const llm = getLLM;
    const template = `
    "You are a social media business analyst."
    "You are given with below a organisation detailed information"
    "Your task is to identify what should be the pain points of the business based on the content"
    context_data:
    ${contextData}

    Identify the pain points of the target audience based on the content

    in a rich text editor format
    `;

    const outputParser = new StringOutputParser();

    const prompt = PromptTemplate.fromTemplate(template); // Adjust based on actual method
    const painPointsChain = prompt.pipe(llm).pipe(outputParser);
    const res = painPointsChain.invoke({ context_data: contextData });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function Summarizer(contextData: string): Promise<any> {
  try {
    const llm = getLLM;
    const template = `
    "You are a social media business analyst."
    "You are given with below a organisation detailed information"
    "Your task is to summarize the content"
    context_data:
    ${contextData}

    Summarize the content based on the given context
    `;

    const outputParser = new StringOutputParser();

    const prompt = PromptTemplate.fromTemplate(template); // Adjust based on actual method
    const summarizerChain = prompt.pipe(llm).pipe(outputParser);
    const res = summarizerChain.invoke({ context_data: contextData });
    return res;
  } catch (error) {
    console.log(error);
  }
}
