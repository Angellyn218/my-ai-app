import { InferenceClient } from "@huggingface/inference";
import { NextResponse } from "next/server";
import { errorResponse } from "@/utils/errorResponse";

// Create Huggingface Client
const client = new InferenceClient(process.env.HF_API_TOKEN);

// Create Post request to client
export async function POST(req) {
    try {
        const { messages } = await req.json();

        // If messages not delivered as expected
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return errorResponse("No messages provided.", 400)
        }

        // Call to model
        const res = await client.chatCompletion({
            model: "meta-llama/Llama-3.2-1B-Instruct",
            provider: "auto",
            messages: messages,
            max_tokens: 500
        });
        
        // Expected return tect
        const text = res.choices?.[0]?.message?.content;

        // No content returned
        if (!text) {
            errorResponse("No response from the AI", 500)
        }
        
        // Expected response
        return NextResponse.json({ text });
    } catch (err) {
        console.error("POST /api/chat error:", err);

        // Catch different errors
        if (err.status === 401) {
            return errorResponse("Invalid API token.", 401);
        }

        if (err.status === 429) {
            return errorResponse("Too many request. Try again later!", 429);
        }
        return errorResponse(err.message || "Something went wrong.", 500);
    }
    
}