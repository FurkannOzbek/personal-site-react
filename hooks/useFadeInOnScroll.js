import { useEffect, useRef } from "react";

const useFadeInOnScroll = (threshold = 0.2) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current.style.opacity = 1;
          elementRef.current.style.transform = "translateY(0)";
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return elementRef;
};

export default useFadeInOnScroll;
