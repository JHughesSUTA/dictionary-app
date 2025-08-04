import PlayIcon from "./icons/PlayIcon";
import type { DictionaryResult } from "../types";

type ResultWordProps = {
  result: DictionaryResult;
};

const ResultWord = ({ result }: ResultWordProps) => {
  // The American English pronunciation seems to usually be the last phonetic provided, findAudio function will grab the American Pronunciation as often as possible
  const findAudio = (): string | undefined => {
    if (!result.phonetics || result.phonetics.length === 0) return undefined;

    for (let i = result.phonetics.length - 1; i >= 0; i--) {
      const audio = result.phonetics[i]?.audio;
      if (audio && audio.trim() !== "") {
        return audio;
      }
    }

    return undefined;
  };

  const audioUrl = findAudio();

  const playAudio = () => {
    if (audioUrl) {
      console.log(audioUrl);
      const audio = new Audio(audioUrl);

      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      console.log("No audio available");
    }
  };

  return (
    <div className="flex justify-between items-center mt-6 md:mt-12">
      <div>
        <h1 className="text-[32px] font-bold capitalize md:text-heading-l">
          {result.word}
        </h1>
        <p className="text-body-m text-purple mt-2 md:text-heading-m md:mt-[5px]">
          {result.phonetic ? result.phonetic : "Pronunciation unavailable"}
        </p>
      </div>
      {audioUrl && (
        <button
          className="cursor-pointer max-w-12 md:max-w-[75px]"
          onClick={playAudio}
        >
          <PlayIcon />
        </button>
      )}
    </div>
  );
};

export default ResultWord;
