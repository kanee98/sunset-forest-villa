// hooks/useNavbarState.ts
import { useEffect, useState } from "react";

export default function useNavbarState() {
  const [scrolled, setScrolled] = useState(false);
  const [isCompactView, setIsCompactView] = useState(false); // xl and down = compact

  useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth <= 1280); // Nest Hub Max and below
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrolled, isCompactView };
}
