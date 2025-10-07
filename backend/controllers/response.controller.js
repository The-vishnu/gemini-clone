import axios from "axios";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export const getResponseFromGemini = async (req, res) => {
    try {
        const { prompt } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // sending user prompt to gemini api
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        res.status(200).json({ reply: text })
    } catch (error) {
        console.error("Error fetching response from Gemini API:", error);
        res.status(500).json({ error: "Failed to fetch response from Gemini API" });
    }
}