import img1 from "../assets/sol-ava.jpg";
import img2 from "../assets/sol-media.jpg";
import img3 from "../assets/sol-dev.jpg";

function navigateToSection(targetIndex) {
  window.dispatchEvent(
    new CustomEvent("naar-goToSection", {
      detail: { targetIndex },
    })
  );
}

export default function Solutions() {
  return (
    <section
      id="soluciones"
      data-index="3"
      data-bg="light"
      className="solutions"
    >
      <div className="solutions-head">
        <h2 className="solutions-title">Soluciones</h2>
      </div>

      <div className="solutions-grid">
        <article
          className="sol-card"
          style={{ backgroundImage: `url(${img1})` }}
          tabIndex={0}
        >
          <div className="sol-overlay" aria-hidden="true" />
          <header className="sol-title-wrap">
            <h3 className="sol-kicker">Asistentes Virtuales</h3>
            <p className="sol-title">Inteligentes</p>
          </header>
          <div className="sol-info">
            <h4>Asistentes Virtuales Inteligentes</h4>
            <p>
              Combinamos “Agentic AI” con APIs para automatizar procesos,
              tomar decisiones basadas en datos y ejecutar acciones en
              tiempo real.
            </p>
            <ul className="sol-bullets">
              <li>Toma de decisiones autónoma</li>
              <li>Integración con múltiples sistemas</li>
              <li>Aprendizaje continuo</li>
            </ul>
          </div>
        </article>

        <article
          className="sol-card"
          style={{ backgroundImage: `url(${img2})` }}
          tabIndex={0}
        >
          <div className="sol-overlay" aria-hidden="true" />
          <header className="sol-title-wrap">
            <h3 className="sol-kicker">Imágenes y</h3>
            <p className="sol-title">Vídeos con IA</p>
          </header>
          <div className="sol-info">
            <h4>Imágenes y Vídeos con IA</h4>
            <p>
              Generamos contenido visual realista de alta calidad para
              marketing, entretenimiento y diseño.
            </p>
            <ul className="sol-bullets">
              <li>Modelos de última generación</li>
              <li>Brand-safe y consistencia</li>
              <li>Automatizaciones creativas</li>
            </ul>
          </div>
        </article>

        <article
          className="sol-card"
          style={{ backgroundImage: `url(${img3})` }}
          tabIndex={0}
        >
          <div className="sol-overlay" aria-hidden="true" />
          <header className="sol-title-wrap">
            <h3 className="sol-kicker">Desarrollo de</h3>
            <p className="sol-title">Software</p>
          </header>
          <div className="sol-info">
            <h4>Desarrollo de Software</h4>
            <p>
              Creamos soluciones digitales adaptadas a las necesidades de tu
              negocio. Desde aplicaciones web y móviles hasta sistemas
              empresariales, diseñamos software escalable, seguro y fácil.
            </p>
            <ul className="sol-bullets">
              <li>Arquitecturas modernas</li>
              <li>Integraciones y APIs</li>
              <li>DevOps y despliegue continuo</li>
            </ul>
          </div>
        </article>
      </div>

      <button
        className="solutions-chevron chevron-btn chevron--dark"
        aria-label="Sigue leyendo"
        onClick={() => navigateToSection(4)} // Contact
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 11l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
