import React from "react";
import { useState, useEffect } from "react";
import PlayIcon from "./icons/PlayIcon";

const Result = () => {
  const [result, setResult] = useState([]);
  const [meanings, setMeanings] = useState([]);
  const [partsOfSpeech, setPartsOfSpeech] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {}, [result]);

  return loading ? (
    <p>loading</p>
  ) : (
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
          <div key={index}>
            <div>
              <h2 className="font-bold">{meaning.partOfSpeech}</h2>
              <hr></hr>
            </div>
            <p className="text-gray-500">Meaning</p>
            <ul>
              {meaning.definitions.map((definition, definitionIndex) => (
                <React.Fragment key={definitionIndex}>
                  <li>{definition.definition}</li>
                  <span className="text-gray-500">{definition.example && definition.example}</span>
                </React.Fragment>
              ))}
            </ul>
            <p className="text-gray-500">Synonyms</p>
            {meaning.synonyms.map((synonym, synonymIndex) => (
              <span key={synonymIndex} className="text-purple-950">
                {synonym}
              </span>
            ))}
          </div>
        ))}
      </div>
      <hr />
      <div>
        <p>Source</p>
        <a href="https://en.wiktionary.org/wiki/keyboard">
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </div>
    </>
  );
};

export default Result;
