import React from "react";
import type { Meaning } from "../types";

type MeaningSectionProps = {
  meaning: Meaning;
};

const MeaningSection = ({ meaning }: MeaningSectionProps) => {
  return (
    <div className="mt-[32px]">
      <div className="">
        <h2 className="font-bold text-[18px] inline-block italic">
          {meaning.partOfSpeech}
        </h2>
        <hr inline-block width-100></hr>
      </div>
      <p className="text-gray-500 text-[16px] mt-[32px]">Meaning</p>
      {/* <ul className="list-dist list-inside marker:text-purple">
        {meaning.definitions.map((definition, definitionIndex) => (
          <React.Fragment key={definitionIndex}>
            <li className="text-[15px]">{definition.definition}</li>
            <span className="text-gray-500">
              {definition.example && definition.example}
            </span>
          </React.Fragment>
        ))}
      </ul> */}

      <ul className="list-disc list-inside marker:text-purple">
        {meaning.definitions.map((definition, definitionIndex) => (
          <li key={definitionIndex} className="text-[15px] mb-[13px]">
            {definition.definition}
            {definition.example && (
              <div className="text-gray-500 ml-4 mt-1">{`"${definition.example}"`}</div>
            )}
          </li>
        ))}
      </ul>

      {meaning.synonyms && (
        <>
          <p className="text-gray-500 text-[16px] inline-block mr-4">
            Synonyms
          </p>
          {meaning.synonyms.map((synonym, synonymIndex) => (
            <span key={synonymIndex} className="text-purple font-bold">
              {synonym}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default MeaningSection;
