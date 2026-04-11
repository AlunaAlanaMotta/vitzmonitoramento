"use client";

import { useMenu } from "@/hooks/MenuContext";
import styles from "./Navbar.module.css";
import useNavbarScroll from "@/hooks/useNavbarScroll";
import Image from "next/image";

export default function Navbar() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();
  const scrolled = useNavbarScroll();

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <Image
          src="/images/logo_vitz-2.png"
          alt="Logo Vitz"
          width={120}
          height={60}
          className={styles.logo}
          style={{ width: "auto", height: "auto" }}
        />

        <div className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div
          className={`${styles.menuOverlay} ${styles.active}`}
          onClick={closeMenu}
        />
      )}
    </>
  );
}
