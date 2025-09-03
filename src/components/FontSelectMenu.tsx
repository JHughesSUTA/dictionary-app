import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import useKeyboardNavigation from "../hooks/useKeyboardNavigation";
import useFontSelection from "../hooks/useFontSelection";

type FontSelectMenuProps = {
  showFontSelect: boolean;
  setShowFontSelect: (showFontSelect: boolean) => void;
};

const FontSelectMenu = ({
  showFontSelect,
  setShowFontSelect,
}: FontSelectMenuProps) => {
  const { font, fontOptions, selectFont } = useFontSelection();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setShowFontSelect(false), showFontSelect);

  const handleFontSelect = (index: number) => {
    selectFont(fontOptions[index].value, () => setShowFontSelect(false));
  };

  const { getItemRef } = useKeyboardNavigation(
    showFontSelect,
    fontOptions.length, // Dynamic count!
    () => setShowFontSelect(false),
    handleFontSelect
  );

  return (
    <div
      ref={dropdownRef}
      className={`absolute z-1 w-[183px] h-[152px] p-6 rounded-2xl right-0 bottom-[-162px] bg-white dark:bg-black shadow-[0_5px_30px_0_rgba(0,0,0,0.1)] dark:shadow-[0_5px_30px_0_rgba(164,69,237,1)] ${
        !showFontSelect && "hidden"
      }`}
      role="listbox"
      aria-label="Font family options"
    >
      <ul className="flex flex-col justify-between h-full">
        {fontOptions.map((option, index) => (
          <li
            key={option.value}
            className="hover:text-purple font-bold"
            role="option"
          >
            <button
              ref={getItemRef(index)}
              className={`cursor-pointer w-full text-left ${option.className}`}
              onClick={() =>
                selectFont(option.value, () => setShowFontSelect(false))
              }
              aria-selected={font === option.value}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FontSelectMenu;
