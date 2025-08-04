import { Link } from "react-router-dom";
import BookIcon from "./icons/BookIcon";
import MoonIcon from "./icons/MoonIcon";
import { useTheme } from "../contexts/ThemeContext";
import carat from "../assets/images/carat.svg";
import { useState } from "react";
import FontSelectMenu from "./FontSelectMenu";

const Header = () => {
  const { toggleTheme, theme, font } = useTheme();
  const [showFontSelect, setShowFontSelect] = useState<boolean>(false);

  return (
    <header>
      <div className="flex justify-between">
        <div className="max-w-[28px] md:max-w-[32px] ">
          <Link to="/" aria-label="Go to home page">
            <BookIcon aria-hidden="true" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => setShowFontSelect((prev) => !prev)}
              className="flex capitalize font-bold cursor-pointer justify-between mr-4 md:mr-6.5 text-body-s md:text-body-m"
              aria-expanded={showFontSelect}
              aria-haspopup="listbox"
              aria-label="Select font family"
            >
              {font} <img className="ml-4" src={carat} alt="" aria-hidden />
            </button>

            <FontSelectMenu
              showFontSelect={showFontSelect}
              setShowFontSelect={setShowFontSelect}
            />
          </div>

          <div className="flex relative after:content-[''] after:absolute after:left-0 after:w-px after:bg-gray-200 after:h-full">
            <label
              htmlFor="toggle"
              className="relative cursor-pointer mr-3 md:mr-5 ml-4 md:ml-6.5 focus-within:ring-2 focus-within:ring-purple focus-within:ring-offset-2 focus-within:rounded-full"
            >
              <input
                id="toggle"
                type="checkbox"
                className="absolute opacity-0 w-full h-full cursor-pointer peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <div className="w-11 h-6 bg-gray-300 peer-checked:bg-purple rounded-full transition-all duration-300"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-300"></div>
            </label>
            <MoonIcon aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
