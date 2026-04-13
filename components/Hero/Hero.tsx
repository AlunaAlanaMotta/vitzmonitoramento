"use client";

import styles from "./hero.module.css";
import useScrollVisibility from "@/hooks/useScrollVisibility";

export default function Hero() {
  const isAtTop = useScrollVisibility(50);

  return (
    <section
      className={styles.hero}
      id="home"
      aria-label="Seção inicial - VITZ Segurança"
    >
      <div className={styles.heroOverlay} />

      <div className={`${styles.heroContent} reveal`}>
        <h1>Proteja seu patrimônio com monitoramento 24h</h1>

        <p>
          Soluções completas em segurança eletrônica com atendimento rápido e
          tecnologia de ponta em Curitiba e região.
        </p>

        <a
          href="https://wa.me/5541995502824?text=Olá,%20gostaria%20de%20um%20orçamento!"
          className={styles.btnHero}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento pelo WhatsApp"
        >
          Solicitar orçamento
        </a>
      </div>

      <div
        className={`${styles.scrollIndicator} ${!isAtTop ? styles.hide : ""}`}
        aria-hidden="true"
      />
    </section>
  );
}
