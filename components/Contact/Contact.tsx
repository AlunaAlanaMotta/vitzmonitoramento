"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ================= VALIDAÇÃO =================
  const validate = (values: typeof form) => {
    const newErrors: Record<string, string> = {};

    if (!values.nome.trim()) newErrors.nome = "Digite seu nome";

    if (!values.email.trim()) {
      newErrors.email = "Digite seu email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email inválido";
    }

    if (!values.mensagem.trim()) {
      newErrors.mensagem = "Digite sua mensagem";
    }

    return newErrors;
  };

  // ================= CHANGE =================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    const updated = { ...form, [name]: value };
    setForm(updated);
    setErrors(validate(updated));
  };

  // ================= BLUR =================
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // ================= SUBMIT =================
  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    setTouched({
      nome: true,
      email: true,
      mensagem: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      await fetch("https://formsubmit.co/mottaalana0@gmail.com", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });

      setLoading(false);
      setSuccess(true);

      setForm({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      alert("Erro ao enviar 😢");
      setLoading(false);
    }
  };

  // ================= CLASSES =================
  const getFieldClass = (field: string) => {
    if (!touched[field]) return "";
    return errors[field] ? styles.error : styles.success;
  };

  return (
    <section
      id="contato"
      className={styles.contato}
      aria-label="Contato para orçamento de segurança em Curitiba"
    >
      <div className="container">
        {/* SEO TITLE */}
        <h2 className="titulo reveal">
          Solicite um orçamento de segurança em Curitiba
        </h2>

        {/* SEO TEXT */}
        <p className="reveal">
          Entre em contato com nossa empresa de segurança em Curitiba e solicite
          um orçamento personalizado para proteger seu patrimônio com tecnologia
          e eficiência.
        </p>

        <div className={styles.contatoWrapper}>
          {/* ================= FORM ================= */}
          <form
            className={`${styles.contatoForm} reveal`}
            onSubmit={handleSubmit}
            aria-label="Formulário de contato para orçamento"
          >
            <div className={styles.formGrid}>
              {/* NOME */}
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  className={getFieldClass("nome")}
                />
                {touched.nome && errors.nome && (
                  <span className={styles.errorText}>{errors.nome}</span>
                )}
              </div>

              {/* EMAIL */}
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  className={getFieldClass("email")}
                />
                {touched.email && errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>

              {/* ASSUNTO */}
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="assunto"
                  placeholder="Assunto"
                  value={form.assunto}
                  onChange={handleChange}
                />
              </div>

              {/* MENSAGEM */}
              <div className={`${styles.inputGroup} ${styles.full}`}>
                <textarea
                  name="mensagem"
                  placeholder="Sua mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getFieldClass("mensagem")}
                />
                {touched.mensagem && errors.mensagem && (
                  <span className={styles.errorText}>{errors.mensagem}</span>
                )}
              </div>
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className={`${styles.btnEnviar} ${
                loading ? styles.btnEnviarLoading : ""
              } ${success ? styles.btnEnviarSuccess : ""}`}
              disabled={loading}
              aria-label="Enviar formulário de contato"
            >
              <span className={styles.btnText}>
                {success ? "✓ Mensagem enviada" : "Enviar mensagem"}
              </span>

              <span className={styles.loader}></span>
            </button>
          </form>

          {/* ================= WHATSAPP ================= */}
          <div className={`${styles.contatoInfo} reveal`}>
            <p>Ou fale direto no WhatsApp:</p>

            <a
              href="https://wa.me/5541995502824?text=Olá,%20gostaria%20de%20um%20orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
              aria-label="Falar com a empresa pelo WhatsApp"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
