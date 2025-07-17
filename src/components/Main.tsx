import PlayIcon from "./icons/PlayIcon";
import MeaningSection from "./MeaningSection";
import type { Meaning, DictionaryResult } from "../types";
import Footer from "./Footer";

type MainProps = {
  result: DictionaryResult | null;
  loading: boolean;
  meanings: Meaning[];
};

const Main = ({ result, loading, meanings }: MainProps) => {
  return loading ? (
    <p>loading</p>
  ) : result ? (
    <>
      <div className="flex justify-between items-center mt-6">
        <div>
          <h1 className="text-[32px] font-bold capitalize">{result.word}</h1>
          <p className="text-body-m text-purple">
            {result.phonetic ? result.phonetic : "oops"}
          </p>
        </div>
        <PlayIcon />
      </div>
      <div>
        {meanings.map((meaning, index) => (
          <MeaningSection key={index} meaning={meaning} />
        ))}
      </div>
      <hr className="mt-8 mb-6" />
      <Footer word={result.word} />
    </>
  ) : (
    <div>
      <p>No Results Found</p>
    </div>
  );
};

export default Main;
