import PlayIcon from "./icons/PlayIcon";
import type { DictionaryResult } from "../types";

type ResultWordProps = {
  result: DictionaryResult;
};

const ResultWord = ({ result }: ResultWordProps) => {
  // TODO - handle audio when first phonetic doesn't have a pronunciation
  const playAudio = () => {
    const audioUrl: string | undefined = result.phonetics?.[0].audio;

    if (audioUrl) {
      const audio = new Audio(audioUrl);

      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      console.log("No audio available");
    }
  };

  return (
    <div className="flex justify-between items-center mt-6">
      <div>
        <h1 className="text-[32px] font-bold capitalize">{result.word}</h1>
        <p className="text-body-m text-purple">
          {result.phonetic ? result.phonetic : "oops"}
        </p>
        {/* <p>{result.phonetics[0].audio}</p> */}
      </div>
      <button className="cursor-pointer" onClick={playAudio}>
        <PlayIcon />
      </button>
    </div>
  );
};

export default ResultWord;
