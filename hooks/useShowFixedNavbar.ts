import { useEffect, useState } from "react";

export function useShowFixedNavbar(scrollThreshold = 50, maxScreenWidth = 1024) {
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const handleScrollResize = () => {
      const scrolled = window.scrollY > scrollThreshold;
      const isSmallScreen = window.innerWidth <= maxScreenWidth;
      setShowFixedNav(scrolled || isSmallScreen);
    };

    handleScrollResize();
    window.addEventListener("scroll", handleScrollResize);
    window.addEventListener("resize", handleScrollResize);

    return () => {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
    };
  }, [scrollThreshold, maxScreenWidth]);

  return showFixedNav;
}