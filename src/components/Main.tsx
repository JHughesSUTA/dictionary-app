import MeaningSection from "./MeaningSection";
import type { Meaning, DictionaryResult } from "../types";
import Footer from "./Footer";
import NoDefinitions from "./NoDefinitions";
import ResultWord from "./ResultWord";
import Spinner from "./Spinner";

type MainProps = {
  result: DictionaryResult | null;
  loading: boolean;
  meanings: Meaning[];
};

const Main = ({ result, loading, meanings }: MainProps) => {
  return loading ? (
    <Spinner loading={loading} />
  ) : result ? (
    <>
      <ResultWord result={result} />
      <div>
        {meanings.map((meaning, index) => (
          <MeaningSection key={index} meaning={meaning} />
        ))}
      </div>
      <hr className="mt-8 mb-6 border-gray-200 dark:border-gray-600" />
      <Footer word={result.word} />
    </>
  ) : (
    <NoDefinitions />
  );
};

export default Main;
