import { useEffect, useState, useRef } from "react";

export default function useKeyboardNavigation(
  isOpen: boolean,
  itemCount: number,
  onClose: () => void,
  onSelect: (index: number) => void
) {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  // Focus first item when dropdown opens
  useEffect(() => {
    if (isOpen && itemRefs.current[0]) {
      itemRefs.current[0].focus();
      setFocusedIndex(0);
    }
  }, [isOpen]);

  // Keyboard event handling
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          // Return focus to the trigger button
          setFocusedIndex(-1);
          event.preventDefault();
          break;

        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => {
            const nextIndex = prev < itemCount - 1 ? prev + 1 : 0;
            itemRefs.current[nextIndex]?.focus();
            return nextIndex;
          });
          break;

        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => {
            const nextIndex = prev > 0 ? prev - 1 : itemCount - 1;
            itemRefs.current[nextIndex]?.focus();
            return nextIndex;
          });
          break;

        case "Enter":
        case " ": {
          event.preventDefault();
          if (focusedIndex >= 0) {
            onSelect(focusedIndex);
          }
          break;
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, focusedIndex, itemCount, onClose, onSelect]);

  // Ref callback function for items
  const getItemRef = (index: number) => (el: HTMLElement | null) => {
    itemRefs.current[index] = el;
  };

  return {
    focusedIndex,
    getItemRef,
  };
}
