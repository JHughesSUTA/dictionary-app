import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTheme } from "../contexts/ThemeContext";
import SearchIcon from "./icons/SearchIcon";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { theme } = useTheme();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setError("Whoops, can't be empty...");
      return;
    }

    setError("");
    navigate(`/${searchTerm.toLowerCase()}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleFormSubmit} role="search">
      <div className="mt-6 md:mt-[50px] relative" role="search">
        <input
          id="search"
          className={`font-bold bg-gray-100 transition duration-500 ease-in-out dark:bg-gray-800 border-gray-100 transition- w-full h-12 rounded-2xl pl-5 md:h-16 md:text-heading-s focus-visible:outline-purple ${
            error && "outline-1 outline-red!"
          } ${
            theme === "light"
              ? "placeholder:text-gray-700"
              : "placeholder:text-white"
          } placeholder:opacity-25`}
          type="text"
          placeholder="Search for any word..."
          value={searchTerm}
          onChange={handleInputChange}
          role="searchbox"
          aria-label="Search for word definitions"
          aria-describedby="search-button"
          aria-invalid={!!error}
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
      {error && (
        <p className="text-red mt-2 md:text-heading-s" role="alert">
          {error}
        </p>
      )}
    </form>
  );
};

export default Search;
