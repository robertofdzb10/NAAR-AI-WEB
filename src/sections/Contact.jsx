import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "error" | null

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // honeypot
    if (form.company.value) return setStatus("ok");

    if (!name || !email || !message) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("bad status");

      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contacto"
      className="contact"
      data-index="4"
      data-bg="light"
      aria-label="Contacto"
    >
      <div className="contact-inner">
        {/* Izquierda */}
        <div className="contact-left">
          <div className="contact-head">
            <h2>¿Hablamos?</h2>
            <p>
              Estamos listos para ayudarte a transformar tus ideas en
              soluciones de IA innovadoras. Contáctanos para comenzar.
            </p>
          </div>

          <ul className="contact-cta" aria-label="Formas de contacto rápido">
            <li>
              <a className="contact-icon" href="tel:+34946528716">
                <span className="icon" aria-hidden="true"><FaPhoneAlt /></span>
                <span className="label">+34 946 52 87 16</span>
              </a>
            </li>
            <li>
              <a className="contact-icon" href="mailto:info@naar.es">
                <span className="icon" aria-hidden="true"><HiMail /></span>
                <span className="label">info@naar.es</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Derecha */}
        <div className="contact-right" role="form" aria-labelledby="contact-title">
          <h3 id="contact-title">Información de Contacto</h3>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot anti-spam (oculto) */}
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea id="message" name="message" required />
            </div>

            <p className="form-privacy">
              Trataremos sus datos para ponernos en contacto con usted y responder a su mensaje.
              Puede ejercer sus derechos escribiéndonos a <a href="mailto:info@naar.es">info@naar.es</a>.
              Más información en la <a href="#">Política de privacidad</a>.
            </p>

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>

            {status === "ok" && (
              <p style={{ color: "#10b981", marginTop: 8 }}>
                ¡Mensaje enviado! Te responderemos en breve.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "#ef4444", marginTop: 8 }}>
                Hubo un problema al enviar. Inténtalo de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
