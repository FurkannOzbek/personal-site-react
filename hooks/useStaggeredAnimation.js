import { useState, useEffect } from "react";

export const useStaggeredAnimation = (count, delay = 100, initialDelay = 0) => {
  const [visibility, setVisibility] = useState(Array(count).fill(false));
  useEffect(() => {
    const timeouts = Array.from({ length: count }).map((_, index) =>
      setTimeout(() => {
        setVisibility((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, initialDelay + index * delay)
    );
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [count, delay, initialDelay]);
  return visibility;
};
