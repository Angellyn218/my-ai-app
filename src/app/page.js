'use client'
import { useState } from "react";
import Message from "@/components/Message";
import UserInputForm from "@/components/UserInputForm";
import { useAIAPI } from "@/hooks/useAIAPI";
import Header from "@/components/Header";

export default function Home() {
  // React hook used for User Input form components
  const { messages, input, setInput, isLoading, error, handleSubmit, handleReset } = useAIAPI();

  // React States 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Spotnana Header */}
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/> 
      {/* Main Chat Area */}
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-2 px-2 bg-white dark:bg-black sm:items-start">
        {/* Chat Area with Messages */}
        <div className="h-110 overflow-y-auto p-4  w-full">
          {messages.map(({ role, content }, idx ) => {
            return (<Message text={content} role={role} key={idx} id={`${idx}`}/>)
          })}
          {/* Loading State */}
          {isLoading && <p>Thinking...</p>}
        </div>
        {/* Error State */}
        {error && <div className="text-red-500 text-sm px-2 py-1 bg-red-50 rounded w-full">
          <p>{error}</p>
        </div>}
        {/* User Input Box */}
        <div className="w-full h-30">
          <UserInputForm isLoading={isLoading} inputValue={input} setInput={setInput} clearButtonVisible={messages.length > 0} handleSubmit={handleSubmit} handleReset={handleReset}/>
        </div>
      </main>
    </div>
  );
}
