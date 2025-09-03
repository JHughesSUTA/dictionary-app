import { useTheme } from "../contexts/ThemeContext";
import { FONT_OPTIONS } from "../constants/fontOptions";
import type { Font } from "../types";

export default function useFontSelect() {
  const { font, setFont } = useTheme();

  const selectFont = (fontValue: Font, onComplete?: () => void) => {
    setFont(fontValue);
    onComplete?.();
  };

  const getFontOptionByValue = (value: Font) => {
    return FONT_OPTIONS.find((option) => option.value === value);
  };

  const getCurrentFontOption = () => {
    return getFontOptionByValue(font);
  };

  return {
    font,
    fontOptions: FONT_OPTIONS,
    selectFont,
    getFontOptionByValue,
    getCurrentFontOption,
  };
}
