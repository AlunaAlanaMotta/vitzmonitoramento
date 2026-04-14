"use client";

import styles from "./Footer.module.css";
import Image from "next/image";

const NAVIGATION_LINKS = [
  { href: "#home", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

const CONTACT_INFO = [
  { type: "phone", href: "tel:+5541995502824", label: "(41) 99550-2824" },
  {
    type: "email",
    href: "mailto:grupovitz@gmail.com",
    label: "grupovitz@gmail.com",
  },
  {
    type: "location",
    label: "Curitiba - PR",
  },
];

const SOCIAL_LINKS = [
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/grupo.vitz",
    className: "instagram",
    label: "Instagram da VITZ",
  },
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/grupovitz",
    className: "facebook",
    label: "Facebook da VITZ",
  },
];

const ICONS: Record<string, string> = {
  phone: "📞",
  email: "📧",
  location: "📍",
};

export default function Footer() {
  return (
    <footer
      className={styles.footer}
      aria-label="Rodapé com informações da empresa de monitoramento VITZ"
    >
      <div className={styles.footerContainer}>
        {/* LOGO + DESCRIÇÃO */}
        <div className={styles.footerCol}>
          <Image
            src="/images/logo_vitz-2.png"
            alt="VITZ Monitoramento e Facilities em Curitiba"
            width={120}
            height={60}
            className={styles.footerLogo}
            style={{ height: "auto" }}
            priority
          />

          <p>
            Empresa especializada em monitoramento eletrônico e facilities em
            Curitiba, com soluções em controle de acesso, portaria e
            acompanhamento 24h para empresas e condomínios.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <nav
          className={styles.footerCol}
          aria-label="Links de navegação do site"
        >
          <h4>Navegação</h4>
          <ul>
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} aria-label={`Ir para seção ${label}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CONTATO */}
        <div className={styles.footerCol}>
          <h4>Contato</h4>
          <ul>
            {CONTACT_INFO.map(({ href, label, type }) => {
              const content = (
                <>
                  <span className={styles.icon}>{ICONS[type]}</span>
                  {label}
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <a href={href} aria-label={`Contato via ${type}`}>
                      {content}
                    </a>
                  ) : (
                    <span>{content}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* REDES SOCIAIS */}
        <div className={styles.footerCol}>
          <h4>Siga-nos</h4>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map(({ href, icon, className, label }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${styles[className]}`}
                aria-label={label}
              >
                <i className={icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* RODAPÉ FINAL */}
      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} VITZ Monitoramento e Facilities em Curitiba
        — Todos os direitos reservados
      </div>
    </footer>
  );
}
