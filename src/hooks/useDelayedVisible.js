import { useEffect, useState } from "react";

// Marks something as "visible" after a short delay, once the component
// first mounts. Used for the Hero text lines that fade in one after
// another when the page loads, instead of the framer-motion library.
// "delaySeconds" controls how long to wait before switching to visible.
export function useDelayedVisible(delaySeconds = 0) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delaySeconds * 1000);
    return () => clearTimeout(timer);
  }, [delaySeconds]);

  return isVisible;
}
