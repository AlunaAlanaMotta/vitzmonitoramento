"use client";

import styles from "./Services.module.css";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      img: "/images/portaria.png",
      tag: "Segurança",
      title: "Portaria e Controle de Acesso",
      desc: "Serviço de portaria com controle de acesso seguro, identificação de visitantes e redução de riscos para empresas e condomínios.",
    },
    {
      img: "/images/central.png",
      tag: "Monitoramento",
      title: "Monitoramento 24h",
      desc: "Monitoramento 24 horas com tecnologia avançada e resposta rápida para prevenir incidentes e garantir segurança contínua.",
    },
    {
      img: "/images/zeladoria.png",
      tag: "Facilities",
      title: "Serviços de Facilities",
      desc: "Gestão completa de facilities com organização, manutenção e eficiência operacional para reduzir custos e melhorar resultados.",
    },
  ];

  return (
    <section
      id="servicos"
      className={styles.servicos}
      aria-labelledby="servicos-titulo"
    >
      <div className="container">
        <h2 id="servicos-titulo" className="titulo reveal">
          Serviços de segurança e monitoramento em Curitiba
        </h2>

        <div className={styles.servicosContainer}>
          {services.map((service, index) => (
            <article
              key={index}
              className={`${styles.servicoCard} reveal`}
              style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
            >
              <Image
                src={service.img}
                alt={`${service.title} - VITZ Segurança`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className={styles.image}
                priority={index === 0}
              />

              <div className={styles.overlay}>
                <span className={styles.tag}>{service.tag}</span>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                <a
                  href="https://wa.me/5541995502824?text=Olá,%20gostaria%20de%20um%20orçamento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-servico"
                  aria-label={`Falar com especialista sobre ${service.title}`}
                >
                  Falar com especialista
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
