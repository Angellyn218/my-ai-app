'use client'
import { useState } from "react";
import Message from "@/components/Message";
import UserInput from "@/components/UserInput";

export default function Home() {
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

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-2 px-2 bg-white dark:bg-black sm:items-start">
        <div className="h-130 overflow-y-auto p-4  w-full">
          {messages.map(({ role, content }, idx ) => {
            return (<Message text={content} role={role} key={idx} id={`${idx}`}/>)
          })}
          {isLoading && <p>Thinking...</p>}
        </div>
        {error && <div className="text-red-500 text-sm px-2 py-1 bg-red-50 rounded w-full">
          <p>{error}</p>
        </div>}
        <div className="w-full h-30">
          <UserInput handleSubmit={handleSubmit} isLoading={isLoading}/>
        </div>
      </main>
    </div>
  );
}
