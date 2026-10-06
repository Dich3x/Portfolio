import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [mathes, setMathces] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const update = () => setMathces(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, [query]);

  return mathes;
}
