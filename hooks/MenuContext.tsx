"use client";

import { createContext, useContext, useState, useEffect } from "react";

type MenuContextType = {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // trava scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

// hook para usar o contexto
export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu precisa estar dentro do MenuProvider");
  }

  return context;
}
