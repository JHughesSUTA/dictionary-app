import { useState, type ChangeEvent } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mt-4">
      <input
        id="search"
        className="bg-gray-100 border-gray-100 w-full h-12 rounded-2xl pl-5"
        type="text"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
