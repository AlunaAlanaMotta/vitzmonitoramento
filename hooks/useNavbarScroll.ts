"use client";

import { useEffect, useState } from "react";

export default function useNavbarScroll() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrolled;
}
