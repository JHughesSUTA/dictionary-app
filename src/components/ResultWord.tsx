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
        {/* TODO - only show play button when there is a sound available */}
        {/* <p>{result.phonetics[0].audio}</p> */}
      </div>
      <button
        className="cursor-pointer max-w-12 md:max-w-[75px]"
        onClick={playAudio}
      >
        <PlayIcon />
      </button>
    </div>
  );
};

export default ResultWord;
