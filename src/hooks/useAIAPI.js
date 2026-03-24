import { useState } from "react";

export function useAIAPI() {
    // React States
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle Submit button function that calls AI API
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Set error and loading states
        setError(null);
        setIsLoading(true);

        // Grab value from user input
        const userInput = input.trim()
        
        // Input empty error
        if (!userInput) {
        setError("Please enter a message");
        setIsLoading(false);
        return;
        }

        // Add user message
        setMessages((prevMessages) => [
            ...prevMessages,
            { role: "User", content: userInput }
        ])

        // Reset input form to empty
        setInput("");

        // call AI API
        try {
            // Fetch API
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                input: userInput
                }),
            });

            // wait for data from API
            const data = await response.json();

            // Error: Response not ok from API
            if (!response.ok) {
                throw new Error(data?.error || `Server error: ${response.status}.`)
            }

            // Error: Empty text from AI
            if (!data.text) {
                throw new Error("Error: No response from the AI.")
            }

            // Add AI response to messages
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "AI", content: data.text },
            ])

        // Error: display error messages
        } catch (error) {
            console.error(error);
            setError(error.message || "Error: Something went wrong. Please try again.")
            
        // Set loading to false
        } finally {
            setIsLoading(false)
        }
    };
    return ({ 
        messages, 
        input,
        setInput, 
        isLoading, 
        error, 
        handleSubmit
    });
};