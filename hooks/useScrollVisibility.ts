"use client";

import { useEffect, useState } from "react";

export default function useScrollVisibility(threshold: number = 50) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY < threshold);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isVisible;
}
