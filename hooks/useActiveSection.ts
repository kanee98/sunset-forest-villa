import { useState, useEffect } from "react";

export default function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
            setActiveSection(visible.target.id);
        } else {
            setActiveSection("");
        }
        },
        {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.1,
        }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sectionIds]);

  return activeSection;
}