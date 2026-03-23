'use client'
import { useState } from "react";
import Message from "@/components/Message";
import UserInput from "@/components/UserInput";
import { useAIAPI } from "@/hooks/useAIAPI";

export default function Home() {
  const { messages, isLoading, error, handleSubmit } = useAIAPI()

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
