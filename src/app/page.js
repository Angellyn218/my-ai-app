'use client'
import Message from "@/components/Message";
import UserInput from "@/components/UserInput";
import { useAIAPI } from "@/hooks/useAIAPI";

export default function Home() {
  // React hook used to call Google Gemini API on submit
  const { messages, input, setInput, isLoading, error, handleSubmit } = useAIAPI()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Main Chat Area */}
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-2 px-2 bg-white dark:bg-black sm:items-start">
        {/* Chat Area with Messages */}
        <div className="h-130 overflow-y-auto p-4  w-full">
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
          <UserInput handleSubmit={handleSubmit} isLoading={isLoading} inputValue={input} setInput={setInput}/>
        </div>
      </main>
    </div>
  );
}
