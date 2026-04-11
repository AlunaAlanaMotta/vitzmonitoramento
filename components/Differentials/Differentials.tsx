"use client";

import styles from "./Differentials.module.css";

export default function Differentials() {
  const items = [
    {
      icon: "fas fa-shield-alt",
      title: "Equipe altamente treinada",
      text: "Profissionais altamente treinados para garantir segurança patrimonial e empresarial com excelência.",
    },
    {
      icon: "fas fa-microchip",
      title: "Tecnologia de ponta",
      text: "Tecnologia avançada para monitoramento inteligente, controle de acesso e resposta rápida.",
    },
    {
      icon: "fas fa-clock",
      title: "Monitoramento 24h",
      text: "Proteção contínua com monitoramento 24h para empresas, condomínios e patrimônios.",
    },
    {
      icon: "fas fa-users",
      title: "Atendimento personalizado",
      text: "Soluções de segurança sob medida, adaptadas às necessidades do seu negócio.",
    },
  ];

  return (
    <section
      className={styles.diferenciais}
      aria-label="Diferenciais da empresa de segurança VITZ"
    >
      {/* 🎥 VÍDEO */}
      <video className={styles.bgVideo} autoPlay muted loop playsInline>
        <source src="/images/central.mp4" type="video/mp4" />
      </video>

      <div className="container">
        <div className={styles.content}>
          {/* TÍTULO SEO */}
          <h2 className="titulo reveal">
            Diferenciais da nossa empresa de segurança
          </h2>

          <div className={styles.containerGrid}>
            {items.map((item, index) => (
              <article
                key={index}
                className={`${styles.item} reveal`}
                style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
              >
                <i className={item.icon}></i>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
