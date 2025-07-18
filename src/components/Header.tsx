import type { ChangeEvent } from "react";
import BookIcon from "./icons/BookIcon";
import MoonIcon from "./icons/MoonIcon";
import { useTheme } from "../contexts/ThemeContext";
import type { Font } from "../types";

type HeaderProps = {
  setFont: (font: Font) => void;
};

const Header = ({ setFont }: HeaderProps) => {
  const { toggleTheme } = useTheme();

  const handleFontSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setFont(e.target.value as Font);
  };

  return (
    <header>
      <div className="flex justify-between">
        <div>
          <BookIcon />
        </div>
        <div className="flex">
          <select onChange={handleFontSelection}>
            <option value="sans">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
          <button className="cursor-pointer" onClick={toggleTheme}>
            <MoonIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
