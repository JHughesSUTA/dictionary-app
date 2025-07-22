import BookIcon from "./icons/BookIcon";
import MoonIcon from "./icons/MoonIcon";
import { useTheme } from "../contexts/ThemeContext";
import type { Font } from "../types";
import carat from "../assets/images/carat.svg";
import { useState } from "react";

type HeaderProps = {
  font: Font;
  setFont: (font: Font) => void;
};

const Header = ({ font, setFont }: HeaderProps) => {
  const { toggleTheme, theme } = useTheme();
  const [showFontSelect, setShowFontSelect] = useState<boolean>(false);

  const fontSelectClass: string =
    theme === "light"
      ? "absolute bg-white w-[183px] h-[152px] p-6 rounded-2xl right-0 bottom-[-162px] shadow-[0_5px_30px_0_rgba(0,0,0,0.1)]"
      : "absolute bg-black w-[183px] h-[152px] p-6 rounded-2xl right-0 bottom-[-162px] shadow-[0_5px_30px_0_rgba(164,69,237,1)]";

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
            >
              {font} <img src={carat} alt="" aria-hidden />
            </button>

            <div
              className={`${fontSelectClass} ${!showFontSelect && "hidden"}`}
            >
              <ul className="flex flex-col justify-between h-full">
                <li className="hover:text-purple font-bold">
                  <button
                    className="cursor-pointer w-full text-left font-sans"
                    onClick={() => setFont("sans")}
                  >
                    Sans Serif
                  </button>
                </li>
                <li className="hover:text-purple font-bold">
                  <button
                    className="cursor-pointer w-full text-left font-serif"
                    onClick={() => setFont("serif")}
                  >
                    Serif
                  </button>
                </li>
                <li className="hover:text-purple font-bold">
                  <button
                    className="cursor-pointer w-full text-left font-mono"
                    onClick={() => setFont("mono")}
                  >
                    mono
                  </button>
                </li>
              </ul>
            </div>

            {/* <select onChange={handleFontSelection}>
              <option value="sans">Sans Serif</option>
              <option value="serif">Serif</option>
              <option value="mono">Mono</option>
            </select> */}
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
