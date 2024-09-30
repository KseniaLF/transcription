export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <h2 className="text-blue-400 font-medium">Transcription</h2>
      <button className="flex items-center gap-2 spetialBtn px-4 py-2 rounded-lg text-blue-400">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}
