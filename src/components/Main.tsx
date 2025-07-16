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
      <div>
        <h1>{result.word}</h1>
        <p className="text-purple-950">
          {result.phonetic ? result.phonetic : "oops"}
        </p>
        <PlayIcon />
      </div>
      <div>
        {meanings.map((meaning, index) => (
          <MeaningSection key={index} meaning={meaning} />
        ))}
      </div>
      <hr />
      <Footer word={result.word} />
    </>
  ) : (
    <div>
      <p>No Results Found</p>
    </div>
  );
};

export default Main;
