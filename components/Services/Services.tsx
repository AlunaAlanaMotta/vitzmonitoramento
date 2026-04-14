"use client";

import styles from "./Services.module.css";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      img: "/images/portaria.png",
      tag: "Controle de Acesso",
      title: "Portaria e Controle de Acesso",
      desc: "Gestão de entrada e saída com identificação de visitantes, organização e mais controle para empresas e condomínios.",
    },
    {
      img: "/images/central.png",
      tag: "Monitoramento",
      title: "Monitoramento 24h",
      desc: "Acompanhamento em tempo real com tecnologia moderna e equipe preparada para respostas rápidas.",
    },
    {
      img: "/images/zeladoria.png",
      tag: "Facilities",
      title: "Serviços de Facilities",
      desc: "Soluções completas para organização, manutenção e eficiência operacional do seu ambiente.",
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
          Serviços de monitoramento e controle em Curitiba
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
                alt={`${service.title} com monitoramento e controle em Curitiba`}
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
