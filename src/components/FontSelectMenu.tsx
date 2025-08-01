import { useRef, useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

type FontSelectMenuProps = {
  showFontSelect: boolean;
  setShowFontSelect: (showFontSelect: boolean) => void;
};

const FontSelectMenu = ({
  showFontSelect,
  setShowFontSelect,
}: FontSelectMenuProps) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const { font, setFont } = useTheme();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowFontSelect(false);
      }
    };

    if (showFontSelect) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFontSelect]);

  useEffect(() => {
    if (showFontSelect && optionRefs.current[0]) {
      optionRefs.current[0].focus();
      setFocusedIndex(0);
    }
  }, [showFontSelect]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!showFontSelect) return;

      switch (event.key) {
        case "Escape":
          setShowFontSelect(false);
          setFocusedIndex(-1);
          // Return focus to the trigger button
          event.preventDefault();
          break;

        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => {
            const nextIndex = prev < 2 ? prev + 1 : 0;
            optionRefs.current[nextIndex]?.focus();
            return nextIndex;
          });
          break;

        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => {
            const nextIndex = prev > 0 ? prev - 1 : 2;
            optionRefs.current[nextIndex]?.focus();
            return nextIndex;
          });
          break;

        case "Enter":
        case " ": {
          event.preventDefault();
          // Find which button is currently focused and click it
          const activeElement = document.activeElement as HTMLButtonElement;
          if (activeElement && optionRefs.current.includes(activeElement)) {
            activeElement.click();
          }
          break;
        }
      }
    };

    if (showFontSelect) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFontSelect, focusedIndex]);

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
        <li className="hover:text-purple font-bold" role="option">
          <button
            ref={(el) => {
              optionRefs.current[0] = el;
            }}
            className="cursor-pointer w-full text-left font-sans"
            onClick={() => {
              setFont("sans");
              setShowFontSelect(false);
              setFocusedIndex(-1);
            }}
            aria-selected={font === "sans"}
          >
            Sans Serif
          </button>
        </li>
        <li className="hover:text-purple font-bold" role="option">
          <button
            ref={(el) => {
              optionRefs.current[1] = el;
            }}
            className="cursor-pointer w-full text-left font-serif"
            onClick={() => {
              setFont("serif");
              setShowFontSelect(false);
              setFocusedIndex(-1);
            }}
            aria-selected={font === "serif"}
          >
            Serif
          </button>
        </li>
        <li className="hover:text-purple font-bold" role="option">
          <button
            ref={(el) => {
              optionRefs.current[2] = el;
            }}
            className="cursor-pointer w-full text-left font-mono"
            onClick={() => {
              setFont("mono");
              setShowFontSelect(false);
              setFocusedIndex(-1);
            }}
            aria-selected={font === "mono"}
          >
            mono
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FontSelectMenu;
