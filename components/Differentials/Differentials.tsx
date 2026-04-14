"use client";

import styles from "./Differentials.module.css";

export default function Differentials() {
  const items = [
    {
      icon: "fas fa-shield-alt",
      title: "Equipe altamente treinada",
      text: "Profissionais preparados para atuar com monitoramento eletrônico, controle de acesso e gestão eficiente de ambientes.",
    },
    {
      icon: "fas fa-microchip",
      title: "Tecnologia de ponta",
      text: "Soluções modernas para monitoramento inteligente, controle de acesso e acompanhamento em tempo real.",
    },
    {
      icon: "fas fa-clock",
      title: "Monitoramento 24h",
      text: "Acompanhamento contínuo com resposta rápida para empresas, condomínios e ambientes corporativos.",
    },
    {
      icon: "fas fa-users",
      title: "Atendimento personalizado",
      text: "Soluções adaptadas às necessidades de cada cliente, com foco em eficiência e organização.",
    },
  ];

  return (
    <section
      className={styles.diferenciais}
      aria-label="Diferenciais da empresa de monitoramento VITZ"
    >
      {/* 🎥 VÍDEO */}
      <video className={styles.bgVideo} autoPlay muted loop playsInline>
        <source src="/images/central.mp4" type="video/mp4" />
      </video>

      <div className="container">
        <div className={styles.content}>
          {/* TÍTULO SEO */}
          <h2 className="titulo reveal">
            Por que escolher a Vitz Monitoramento?
          </h2>

          <div className={styles.containerGrid}>
            {items.map((item, index) => (
              <article
                key={index}
                className={`${styles.item} reveal`}
                style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
              >
                <i className={item.icon} aria-hidden="true"></i>

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
