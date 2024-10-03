import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FileDisplay from "./components/FileDisplay";
import Information from "./components/Information";
import Transcribing from "./components/Transcribing";

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const isAudioAvailible = file || audioStream;

  function handleAudioReset() {
    setFile(null);
    setAudioStream(null);
  }

  const worker = useRef(null);

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL("./utils/whisper.worker.js", import.meta.url),
        { type: "module" }
      );
    }

    const onMessageReceived = async (e) => {
      switch (e.data.type) {
        case "DOWNLOADING":
          setDownloading(true);
          console.log("DOWNLOADING");
          break;
        case "LOADING":
          setLoading(true);
          console.log("LOADING");
          break;
        case "RESULT":
          setDownloading(true);
          console.log("RESULT");
          setOutput(e.data.results);
          break;
        case "INFERENCE_DONE":
          setDownloading(true);
          console.log("INFERENCE_DONE");
          setFinished(true);
          break;
      }
    };
    worker.current.addEventListener("message", onMessageReceived);
    return () =>
      worker.current.removeEventListener("message", onMessageReceived);
  }, [downloading]);

  async function readAudioFrom(file) {
    const sampling_rate = 16000;
    const audioCTX = new AudioContext({ sampleRate: sampling_rate });
    const response = await file.arrayBuffer();
    const decoded = await audioCTX.decodeAudioData(response);
    const audio = decoded.getChannelData(0);
    return audio;
  }
  // async function handleFormSubmission() {
  //   if (!file && !audioStream) return;
  //   let audio = await readAudioFrom(file ? file : audioStream);
  //   const model_name = "openai/whisper.tiny.en";
  //   worker.current.postMessage({type:MessageTypes.INFERENCE_REQUEST, audio, model_name}}

  useEffect(() => {
    console.log(audioStream);
  }, [audioStream]);

  return (
    <div className="fex flex-col p-4 max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {output ? (
          <Information />
        ) : loading ? (
          <Transcribing />
        ) : isAudioAvailible ? (
          <FileDisplay
            file={file}
            audioStream={audioStream}
            handleAudioReset={handleAudioReset}
          />
        ) : (
          <HomePage setFile={setFile} setAudioStream={setAudioStream} />
        )}
      </section>
    </div>
  );
}

export default App;
