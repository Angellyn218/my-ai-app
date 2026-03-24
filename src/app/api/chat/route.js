import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Create Google AI Client
const client = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// Create Post request to client
export async function POST(req) {
    const { input } = await req.json();

    const res = await client.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: input,
    });
    console.log(res.text)
    
    return NextResponse.json({ text: res.text });
}