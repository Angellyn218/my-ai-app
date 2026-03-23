import { useState } from "react";

export function useAIAPI() {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const userInput = formData.get('userInput');
        
        if (!userInput?.trim()) {
        setError("Please enter a message");
        setIsLoading(false);
        return;
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            { role: "User", content: userInput }
        ])

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                input: userInput
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.error || `Server error: ${response.status}.`)
            }

            if (!data.text) {
                throw new Error("Error: No response from the AI.")
            }

            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "AI", content: data.text },
            ])
        } catch (error) {
            console.error(error);
            setError(error.message || "Error: Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    };
    return ({ messages, isLoading, error, handleSubmit });
};