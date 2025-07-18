import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import type { DictionaryResult, Meaning } from "../types";

type SearchProps = {
  setResult: (result: DictionaryResult) => void;
  setMeanings: (meanings: Meaning[]) => void;
  setLoading: (val: boolean) => void;
};

const Search = ({ setResult, setMeanings, setLoading }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchTermTest = async (word: string) => {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchTermTest(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <div className="mt-4">
      <input
        id="search"
        className="bg-gray-100 dark:bg-gray-800 border-gray-100 w-full h-12 rounded-2xl pl-5"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
