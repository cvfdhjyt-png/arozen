import { GoogleGenAI, Type } from "@google/genai";
import { ElementalAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || ''; // Ideally strictly from process.env

const ai = new GoogleGenAI({ apiKey });

export const getElementalAnalysis = async (date: string, time: string): Promise<ElementalAnalysisResult> => {
  if (!apiKey) {
    // Fallback if no API key is present for demo purposes
    return {
      element: "Earth",
      stone: "Onyx",
      reading: "Without an API key, we connect you to the Earth. You seek stability and grounding in a chaotic world. Onyx will be your anchor."
    };
  }

  const prompt = `
    Analyze the elemental balance (Fire, Earth, Air, Water) for a person born on ${date} at ${time}. 
    Provide:
    1. Their dominant element.
    2. A gemstone that grounds them.
    3. A short, mystical but grounded reading (under 50 words) suitable for a mindfulness jewelry brand. 
    Focus on reflection, not prediction.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            element: { type: Type.STRING },
            stone: { type: Type.STRING },
            reading: { type: Type.STRING },
          },
          required: ["element", "stone", "reading"],
        }
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text) as ElementalAnalysisResult;
    }
    throw new Error("No response text");
  } catch (error) {
    console.error("Gemini analysis failed", error);
    return {
      element: "Unknown",
      stone: "Clear Quartz",
      reading: "The mists are thick today. Look inward for your answer."
    };
  }
};