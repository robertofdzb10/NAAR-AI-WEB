import { useEffect, useState } from "react";
import heroUrl from "../assets/hero-bg.jpg";

function navigateToSection(targetIndex) {
  window.dispatchEvent(
    new CustomEvent("naar-goToSection", {
      detail: { targetIndex },
    })
  );
}

export default function Hero() {
  const [ready, setReady] = useState(false);

  // ❗ opcional: si quieres, puedes borrar este efecto entero
  useEffect(() => {
    const el = document.querySelector("#metodologia");
    if (!el) return;

    el.style.willChange = "transform, opacity";
    el.getBoundingClientRect();

    const t = setTimeout(() => {
      el.style.willChange = "";
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      data-index="0"
      data-bg="dark"
      className="hero"
      aria-label="Sección principal"
    >
      <video
        className={`hero-bg ${ready ? "is-ready" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        decoding="async"
        poster={heroUrl}
        onCanPlay={() => setReady(true)}
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-inner">
        <h1 className="hero-title">
          Soluciones Avanzadas de <br />
          Inteligencia Artificial
        </h1>

        <p className="hero-sub">
          Transformamos ideas en realidad con tecnología de vanguardia.
          <br />
          Nuestras soluciones de IA potencian el futuro de tu negocio.
        </p>

        <a href="#soluciones" className="cta">
          <span>Ver más</span>
          <span className="sr-only"> sobre nuestras soluciones</span>
        </a>
      </div>

      <button
        className="hero-chevron"
        aria-label="Desplazar hacia abajo"
        title="Desplazar hacia abajo"
        onClick={() => navigateToSection(1)} // About
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
