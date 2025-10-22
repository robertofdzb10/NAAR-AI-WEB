import { useRef } from "react";
import img1 from "../assets/sol-ava.jpg";      // ← ajusta rutas
import img2 from "../assets/sol-media.jpg";
import img3 from "../assets/sol-dev.jpg";

export default function Solutions() {
  const gridRef = useRef(null);

  const openWithKeyboard = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.currentTarget.classList.toggle("is-open");
      e.preventDefault();
    }
  };

  return (
    <section id="soluciones" className="solutions">
      <div className="solutions-head">
        <h2 className="solutions-title">Soluciones</h2>
      </div>

      <div className="solutions-grid" ref={gridRef}>
        {/* ─────────────── 1 ─────────────── */}
        <article
          className="sol-card"
          style={{ backgroundImage: `url(${img1})` }}
          tabIndex={0}
          onKeyDown={openWithKeyboard}
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
              tomar decisiones basadas en datos y ejecutar acciones en tiempo real.
            </p>
            <ul className="sol-bullets">
              <li>Toma de decisiones autónoma</li>
              <li>Integración con múltiples sistemas</li>
              <li>Aprendizaje continuo</li>
            </ul>
          </div>
        </article>

        {/* ─────────────── 2 ─────────────── */}
        <article
          className="sol-card"
          style={{ backgroundImage: `url(${img2})` }}
          tabIndex={0}
          onKeyDown={openWithKeyboard}
        >
          <div className="sol-overlay" aria-hidden="true" />
          <header className="sol-title-wrap">
            <h3 className="sol-kicker">Imágenes y</h3>
            <p className="sol-title">Vídeos con IA</p>
          </header>

          <div className="sol-info">
            <h4>Imágenes y Vídeos con IA</h4>
            <p>
              Generamos contenido visual realista de alta calidad para marketing,
              entretenimiento y diseño.
            </p>
            <ul className="sol-bullets">
              <li>Modelos de última generación</li>
              <li>Brand-safe y consistencia</li>
              <li>Automatizaciones creativas</li>
            </ul>
          </div>
        </article>

        {/* ─────────────── 3 ─────────────── */}
        <article
          className="sol-card"
          style={{ backgroundImage: `url(${img3})` }}
          tabIndex={0}
          onKeyDown={openWithKeyboard}
        >
          <div className="sol-overlay" aria-hidden="true" />
          <header className="sol-title-wrap">
            <h3 className="sol-kicker">Desarrollo de</h3>
            <p className="sol-title">Software</p>
          </header>

          <div className="sol-info">
            <h4>Desarrollo de Software</h4>
            <p>
              Aplicaciones y sistemas empresariales escalables, seguros y fáciles de usar.
            </p>
            <ul className="sol-bullets">
              <li>Arquitecturas modernas</li>
              <li>Integraciones y APIs</li>
              <li>DevOps y despliegue continuo</li>
            </ul>
          </div>
        </article>
      </div>

      {/* ─────────────── Chevron al final ─────────────── */}
      <button
        className="solutions-chevron chevron-btn chevron--dark"
        aria-label="Sigue leyendo"
        onClick={() => {
          const el =
            document.querySelector("#contacto") ||
            document.querySelector("#soluciones")?.nextElementSibling;
          el?.scrollIntoView({ behavior: "smooth" });
        }}
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
