import { useEffect } from "react";

interface KeyboardCallbacks {
  onEnter?: () => void;
  onEscape?: () => void;
  onSpaceBar?: () => void;
  onOptionCommandPeriod?: () => void;
  onDelete?: () => void;
}

export const useKeyboard = ({
  onEnter,
  onEscape,
  onSpaceBar,
  onOptionCommandPeriod,
  onDelete,
}: KeyboardCallbacks) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isInteractiveElement =
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        activeElement?.getAttribute("contenteditable") === "true";

      if (event.metaKey && event.altKey && event.key === ".") {
        event.preventDefault(); // Optionally prevent default behavior
        if (onOptionCommandPeriod) {
          onOptionCommandPeriod();
        }
        return;
      }
      switch (event.key) {
        case "Enter":
          if (onEnter && event.metaKey) {
            event.preventDefault();
            onEnter();
          }
          break;
        case "Escape":
          if (onEscape) {
            event.preventDefault();
            onEscape();
          }
          break;
        case " ":
          if (onSpaceBar) {
            if (isInteractiveElement) return;
            event.preventDefault();
            onSpaceBar();
          }
          break;
        case "Delete":
          if (onDelete) {
            if (isInteractiveElement) return;
            event.preventDefault();
            onDelete();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEnter, onEscape, onSpaceBar]);
};
