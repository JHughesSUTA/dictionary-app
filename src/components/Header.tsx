import BookIcon from "./icons/BookIcon";
import MoonIcon from "./icons/MoonIcon";
import { useTheme } from "../contexts/ThemeContext";
import type { Font } from "../types";
import carat from "../assets/images/carat.svg";
import { useState } from "react";
import FontSelectMenu from "./FontSelectMenu";

type HeaderProps = {
  font: Font;
  setFont: (font: Font) => void;
};

const Header = ({ font, setFont }: HeaderProps) => {
  const { toggleTheme, theme } = useTheme();
  const [showFontSelect, setShowFontSelect] = useState<boolean>(false);

  return (
    <header>
      <div className="flex justify-between">
        <div>
          <BookIcon />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => setShowFontSelect((prev) => !prev)}
              className="flex capitalize font-bold cursor-pointer w-[98px] justify-between"
              aria-expanded={showFontSelect}
              aria-haspopup="listbox"
              aria-label="Select font family"
            >
              {font} <img src={carat} alt="" aria-hidden />
            </button>

            <FontSelectMenu
              font={font}
              setFont={setFont}
              showFontSelect={showFontSelect}
              setShowFontSelect={setShowFontSelect}
            />
          </div>

          <div className="flex relative after:content-[''] after:absolute after:left-0 after:w-px after:bg-gray-200 after:h-full">
            <label
              htmlFor="toggle"
              className="relative cursor-pointer ml-[16px] mr-[12px]"
            >
              <input
                id="toggle"
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="w-11 h-6 bg-gray-300 peer-checked:bg-purple rounded-full transition-all duration-300"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-300"></div>
            </label>
            <MoonIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
