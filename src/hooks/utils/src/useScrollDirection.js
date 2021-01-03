import { useState, useEffect } from "react";

const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
  off,
} = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      setScrollPosition(scrollY);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    if (off) {
      window.addEventListener("scroll", onScroll);
    } else {
      setScrollDir(initialDirection);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return { direction: scrollDir, y: scrollPosition };
};

export default useScrollDirection;
