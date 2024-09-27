export default function HomePage() {
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20">
      <h1 className="text-blue-400 bold font-semibold text-5xl sm:text-6xl md:text-7xl">
        Transcription
      </h1>
      <h3 className="font-medium">
        Record <span className="text-blue-400">&rarr;</span>
        Transcribe <span className="text-blue-400">&rarr;</span>
        Transate
      </h3>

      <button>
        <p>Record</p>
        <i className="fa-solid fa-microphone"></i>
      </button>
    </main>
  );
}
