import { useState, useEffect } from "react";
import PlayIcon from "./icons/PlayIcon";
import MeaningSection from "./MeaningSection";
import type { Meaning, DictionaryResult } from "../types";

const Main = () => {
  const [result, setResult] = useState<DictionaryResult | null>(null);
  const [meanings, setMeanings] = useState<Meaning[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTerm = async () => {
      try {
        const res = await fetch(
          "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard"
        );
        const data = await res.json();
        setResult(data[0]);
        setMeanings(data[0].meanings);
      } catch (error) {
        console.log("error loading data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTerm();
  }, []);

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
    </>
  ) : (
    <div>
      <p>No Results Found</p>
    </div>
  );
};

export default Main;
