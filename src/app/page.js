import Message from "@/components/Message";
import UserInput from "@/components/UserInput";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-2 px-2 bg-white dark:bg-black sm:items-start">
        <Message text="Hello. I must make this text longer for scale" speaker="AI" id="test message"></Message>
        <UserInput/>
      </main>
    </div>
  );
}
