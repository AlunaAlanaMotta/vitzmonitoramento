"use client";

import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }

  const cards = [
    { icon: "fas fa-user-shield", text: "Equipe altamente treinada" },
    { icon: "fas fa-microchip", text: "Tecnologia de ponta" },
    { icon: "fas fa-chart-line", text: "Gestão eficiente" },
    { icon: "fas fa-video", text: "Monitoramento 24h" },
  ];

  return (
    <section id="sobre" className={styles.sobre} aria-labelledby="sobre-titulo">
      <div className={styles.sobreContainer}>
        {/* TEXTO */}
        <div className={`${styles.sobreText} reveal`}>
          <h2 id="sobre-titulo" className="titulo">
            Sobre a Vitz Monitoramento
          </h2>

          <p className={styles.subtitulo}>
            Mais controle, menos riscos e segurança real para sua empresa
          </p>

          <p>
            A Vitz Monitoramento oferece soluções modernas em segurança
            eletrônica para residências e empresas. Trabalhamos com tecnologia
            atualizada, atendimento ágil e foco total na proteção do seu
            patrimônio. Nossa missão é garantir tranquilidade para nossos
            clientes por meio de sistemas eficientes e monitoramento contínuo.
          </p>

          <p className={styles.destaque}>
            Enquanto você foca no crescimento do seu negócio, nós cuidamos da
            segurança, organização e performance do seu ambiente.
          </p>
          <div className={styles.sobreCards}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="card-mini"
                onMouseMove={handleMouseMove}
                style={{ "--delay": `${index * 0.15}s` } as React.CSSProperties}
              >
                <i className={card.icon} aria-hidden="true"></i>
                <span>{card.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGEM */}
        <div className={`${styles.sobreImg} reveal`}>
          <Image
            src="/images/sobre.png"
            alt="Equipe de segurança empresarial monitorando ambiente corporativo"
            width={500}
            height={400}
            sizes="(max-width: 768px) 100vw, 500px"
          />

          <a
            href="#contato"
            className={styles.btnSobre}
            aria-label="Falar com especialista em segurança"
          >
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
