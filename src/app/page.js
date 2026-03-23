'use client'
import { useState } from "react";
import Message from "@/components/Message";
import UserInput from "@/components/UserInput";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const userInput = formData.get('userInput');
    console.log(userInput);

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "User", content: userInput }
    ])

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        input: userInput
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.text)
    } else {
      console.error(data);
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "AI", content: data.text },
    ])

    setIsLoading(false)
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-2 px-2 bg-white dark:bg-black sm:items-start">
        {messages.map(({ role, content }, idx ) => {
          return (<Message text={content} role={role} key={idx} id={`${idx}`}/>)
        })}
        {isLoading && <p>Thinking...</p>}
        <UserInput handleSubmit={handleSubmit} isLoading={isLoading}/>
      </main>
    </div>
  );
}
