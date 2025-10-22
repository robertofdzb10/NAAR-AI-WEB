export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact-inner">
        {/* Lado Izquierdo */}
        <div className="contact-left">
          <h2 className="contact-title">¿Hablamos?</h2>
          <p className="contact-lead">
            Estamos listos para ayudarte a transformar tus ideas en soluciones de IA innovadoras.
            Contáctanos para comenzar.
          </p>

          <ul className="contact-chips" aria-label="Datos de contacto">
            <li className="chip">
              <span className="chip-icon" aria-hidden="true">
                {/* phone */}
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.89.31 1.76.57 2.6a2 2 0 0 1-.45 2.11L9.1 10.91a16 16 0 0 0 4 4l1.48-1.13a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.6.57A2 2 0 0 1 22 16.92Z" fill="currentColor"/></svg>
              </span>
              <a href="tel:+34946528716">+34 946 52 87 16</a>
            </li>
            <li className="chip">
              <span className="chip-icon" aria-hidden="true">
                {/* mail */}
                <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2
                 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z" fill="currentColor"/></svg>
              </span>
              <a href="mailto:info@naar.es">info@naar.es</a>
            </li>
          </ul>
        </div>

        {/* Tarjeta del formulario */}
        <div className="contact-card" role="form" aria-label="Formulario de contacto">
          <h3 className="card-title">Información de Contacto</h3>

          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <label className="field">
              <span>Nombre *</span>
              <input type="text" name="name" required />
            </label>

            <label className="field">
              <span>Correo electrónico *</span>
              <input type="email" name="email" required />
            </label>

            <label className="field field--textarea">
              <span>Mensaje *</span>
              <textarea name="message" rows="4" required />
            </label>

            <p className="gdpr">
              Trataremos sus datos para ponernos en contacto con usted y responder a su
              mensaje. Puede ejercer sus derechos escribiéndonos a <a href="mailto:info@naar.es">info@naar.es</a>.
              Más información en la <a href="/privacidad">Política de privacidad</a>.
            </p>

            <button className="btn-submit" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
