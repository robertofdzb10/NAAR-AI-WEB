import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contacto" className="contact" aria-label="Contacto">
      <div className="contact-inner">
        {/* ───── Izquierda ───── */}
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

        {/* ───── Derecha (formulario) ───── */}
        <div className="contact-right" role="form" aria-labelledby="contact-title">
          <h3 id="contact-title">Información de Contacto</h3>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input id="name" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input id="email" type="email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="msg">Mensaje *</label>
              <textarea id="msg" required></textarea>
            </div>

            <p className="form-privacy">
              Trataremos sus datos para ponernos en contacto con usted y responder a su mensaje.
              Puede ejercer sus derechos escribiéndonos a <a href="mailto:info@naar.es">info@naar.es</a>.
              Más información en la <a href="#">Política de privacidad</a>.
            </p>

            <button type="submit" className="contact-btn">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
