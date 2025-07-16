import React from "react";
import type { Meaning } from "../types";

type MeaningSectionProps = {
  meaning: Meaning;
};

const MeaningSection = ({ meaning }: MeaningSectionProps) => {
  return (
    <div>
      <div>
        <h2 className="font-bold">{meaning.partOfSpeech}</h2>
        <hr></hr>
      </div>
      <p className="text-gray-500">Meaning</p>
      <ul>
        {meaning.definitions.map((definition, definitionIndex) => (
          <React.Fragment key={definitionIndex}>
            <li>{definition.definition}</li>
            <span className="text-gray-500">
              {definition.example && definition.example}
            </span>
          </React.Fragment>
        ))}
      </ul>
      {meaning.synonyms && (
        <>
          <p className="text-gray-500">Synonyms</p>
          {meaning.synonyms.map((synonym, synonymIndex) => (
            <span key={synonymIndex} className="text-purple-950">
              {synonym}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default MeaningSection;
