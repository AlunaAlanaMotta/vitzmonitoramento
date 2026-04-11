"use client";

import styles from "./mvv.module.css";

export default function MVV() {
  const items = [
    {
      icon: "fas fa-bullseye",
      title: "Missão",
      text: "Garantir segurança patrimonial e eficiência operacional por meio de tecnologia avançada, monitoramento 24h e gestão estratégica.",
    },
    {
      icon: "fas fa-eye",
      title: "Visão",
      text: "Ser referência em segurança empresarial em Curitiba, oferecendo soluções inteligentes, confiáveis e com alto padrão de qualidade.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Valores",
      text: "Ética, compromisso com resultados, inovação contínua, excelência operacional e respeito total aos nossos clientes.",
    },
  ];

  return (
    <section className={styles.mvv} aria-labelledby="mvv-titulo">
      <div className="container">
        <h2 id="mvv-titulo" className="titulo reveal">
          Missão, Visão e Valores da VITZ Segurança
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
