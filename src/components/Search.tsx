import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { DictionaryResult, Meaning } from "../types";
import SearchIcon from "./icons/SearchIcon";

type SearchProps = {
  setResult: (result: DictionaryResult) => void;
  setMeanings: (meanings: Meaning[]) => void;
  setLoading: (val: boolean) => void;
  setHasSearched: (val: boolean) => void;
};

const Search = ({
  setResult,
  setMeanings,
  setLoading,
  setHasSearched,
}: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchTerm = async (word: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await res.json();
      setResult(data[0]);
      setMeanings(data[0].meanings);
      setHasSearched(true);
    } catch (error) {
      console.log("error loading data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchTerm(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleFormSubmit} role="search">
      <div className="mt-6 md:mt-[50px] relative" role="search">
        <input
          id="search"
          className="font-bold bg-gray-100 dark:bg-gray-800 border-gray-100 w-full h-12 rounded-2xl pl-5 md:h-16 md:text-heading-s"
          type="text"
          placeholder="Search for any word..."
          value={searchTerm}
          onChange={handleInputChange}
          role="searchbox"
          aria-label="Search for word definitions"
          aria-describedby="search-button"
        />
        <button
          id="search-button"
          className="absolute inset-y-0 right-0 cursor-pointer px-4 md:px-6"
          type="submit"
          aria-label="Search"
        >
          <SearchIcon aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default Search;
