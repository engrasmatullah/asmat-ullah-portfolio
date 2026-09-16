// frontend/src/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

// Tells us when an element has scrolled into view. We use this everywhere
// we want a fade-in-on-scroll effect, instead of the framer-motion library.
export function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // matches "once: true" from before
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
