import type { Meaning } from "../types";
import { Link } from "react-router-dom";

type MeaningSectionProps = {
  meaning: Meaning;
};

const MeaningSection = ({ meaning }: MeaningSectionProps) => {
  return (
    <div className="mt-8 md:mt-10">
      <div className="flex items-center">
        <h2 className="font-bold text-[18px] mr-[20px] inline-block italic md:text-heading-m">
          {meaning.partOfSpeech}
        </h2>
        <hr className="inline-block grow border-gray-200 dark:border-gray-600"></hr>
      </div>
      <p className="text-gray-500 text-[16px] mt-[32px] md:text-heading-s md:mt-10">
        Meaning
      </p>

      <ul className="list-disc list-inside marker:text-purple mt-4 md:mt-[25px]">
        {meaning.definitions.map((definition, definitionIndex) => (
          <li
            key={definitionIndex}
            className="text-[15px] mb-[13px] md:text-body-m"
          >
            {definition.definition}
            {definition.example && (
              <div className="text-gray-500 ml-[1.3rem] mt-1">{`"${definition.example}"`}</div>
            )}
          </li>
        ))}
      </ul>

      {meaning.synonyms && (
        <div className="mt-6">
          {/* TODO only show synonyms if they exist */}
          <p className="text-gray-500 text-4 inline-block mr-4 md:text-heading-s">
            Synonyms
          </p>
          {meaning.synonyms.map((synonym, synonymIndex) => (
            <Link
              key={synonymIndex}
              to={`/${synonym}`}
              className="text-purple font-bold text-4 md:text-heading-s"
            >
              <span className="hover:underline">{synonym}</span>
              {synonymIndex < meaning.synonyms!.length - 1 && ", "}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeaningSection;
