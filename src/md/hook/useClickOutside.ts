import { useEffect, useRef } from "react";

export const useClickOutside = (
  open: boolean,
  callback?: () => void,
  classOutside?: string
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        ((classOutside &&
          !(event.target as Node).parentElement?.classList.contains(
            classOutside
          )) ||
          !classOutside)
      ) {
        callback?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open, classOutside, callback]);

  return { ref };
};
