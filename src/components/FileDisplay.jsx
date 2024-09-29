export default function FileDisplay(props) {
  const { file, audioStream, handleAudioReset } = props;

  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20">
      <h2 className="text-blue-400 bold font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your file
      </h2>

      <div className="mx-auto flex flex-col text-left">
        <h3 className="font-semibold">Name</h3>
        <p>{file.name}</p>
      </div>
    </main>
  );
}
