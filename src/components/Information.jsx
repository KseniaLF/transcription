import { useState } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

export default function Information() {
  const [tab, setTab] = useState("transcription");
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose w-full mx-auto">
      <h2 className="text-blue-400 bold font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your transcription
      </h2>

      <div className="grid grid-cols-2 mx-auto bg-white shadow rounded-full overflow-hidden items-center">
        <button
          onClick={() => setTab("transcription")}
          className={
            "px-4 duration-200 py-2 font-medium " +
            (tab == "transcription"
              ? "bg-blue-400 text-white"
              : "text-blue-400 hover:text-blue-500")
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab("translation")}
          className={
            "px-4 duration-200 py-2 font-medium " +
            (tab == "translation"
              ? "bg-blue-400 text-white"
              : "text-blue-400 hover:text-blue-500")
          }
        >
          Translation
        </button>
      </div>

      {tab == "transcription" ? <Transcription /> : <Translation />}
    </main>
  );
}
