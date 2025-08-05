import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { DictionaryResult, Meaning } from "../types";
import MeaningSection from "./MeaningSection";
import Footer from "./Footer";
import NoDefinitions from "./NoDefinitions";
import ResultWord from "./ResultWord";
import Spinner from "./Spinner";
import uniqueId from "lodash.uniqueid";

const ResultMain = () => {
  const { word } = useParams<{ word: string }>();
  const [result, setResult] = useState<DictionaryResult | null>(null);
  const [meanings, setMeanings] = useState<Meaning[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (word) {
      fetchWord(word);
    }
  }, [word]);

  const fetchWord = async (searchWord: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const data = await res.json();
      console.log(data[1]);
      setResult(data[0]);
      setMeanings(data[0].meanings);
    } catch (error) {
      console.log("error loading data", error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner loading={loading} />
  ) : result ? (
    <>
      <ResultWord result={result} />
      <div>
        {meanings.map((meaning) => (
          <MeaningSection key={uniqueId("meaning-")} meaning={meaning} />
        ))}
      </div>
      <hr className="mt-8 mb-6 border-gray-200 dark:border-gray-600 md:mt-10" />
      <Footer word={result.word} />
    </>
  ) : (
    <NoDefinitions />
  );
};

export default ResultMain;
