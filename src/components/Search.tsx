import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import SearchIcon from "./icons/SearchIcon";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/${searchTerm.toLowerCase()}`);
      setSearchTerm("");
    }
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
