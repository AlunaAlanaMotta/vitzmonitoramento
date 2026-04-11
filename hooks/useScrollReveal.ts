"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    function handleScroll() {
      const elements = document.querySelectorAll(".reveal");

      elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = (el as HTMLElement).getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    // executa ao carregar
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
