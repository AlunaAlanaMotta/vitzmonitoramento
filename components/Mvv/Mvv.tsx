"use client";

import styles from "./mvv.module.css";

export default function MVV() {
  const items = [
    {
      icon: "fas fa-bullseye",
      title: "Missão",
      text: "Proporcionar mais controle e tranquilidade para nossos clientes por meio de tecnologia avançada, monitoramento 24h e soluções eficientes.",
    },
    {
      icon: "fas fa-eye",
      title: "Visão",
      text: "Ser referência em monitoramento eletrônico em Curitiba, oferecendo soluções inteligentes, confiáveis e com alto padrão de qualidade.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Valores",
      text: "Ética, compromisso com resultados, inovação contínua, excelência no atendimento e respeito aos nossos clientes.",
    },
  ];

  return (
    <section className={styles.mvv} aria-labelledby="mvv-titulo">
      <div className="container">
        <h2 id="mvv-titulo" className="titulo reveal">
          Missão, Visão e Valores da VITZ Monitoramento
        </h2>

        <div className={styles.mvvContainer}>
          {items.map((item, index) => (
            <article
              key={index}
              className={`${styles.mvvCard} reveal`}
              style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
            >
              <i className={item.icon} aria-hidden="true"></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
