"use client";

import styles from "./WhatsAppButton.module.css";
import Image from "next/image";
import { useMenu } from "@/hooks/MenuContext";

export default function WhatsAppButton() {
  const { menuOpen } = useMenu();

  return (
    <a
      href="https://wa.me/5541995502824?text=Olá,%20gostaria%20de%20um%20orçamento"
      className={`${styles.whatsappFloat} ${menuOpen ? styles.hidden : ""}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp"
        width={32}
        height={32}
        className={styles.whatsappIcon}
      />
    </a>
  );
}
