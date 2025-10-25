// src/components/Hero.jsx
import { useState } from "react";
import heroUrl from "../assets/hero-bg.jpg";

export default function Hero() {
  const [ready, setReady] = useState(false);

  const scrollToSection = (e) => {
    e.preventDefault();
    const target = document.querySelector("#quienes");
    if (!target) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    target.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section id="hero" className="hero" aria-label="Sección principal">
      {/* Video de fondo */}
      <video
        className={`hero-bg ${ready ? "is-ready" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroUrl}
        onCanPlay={() => setReady(true)}
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Fondo anterior (comentado)
      <div className="hero-bg" style={{ backgroundImage: `url(${heroUrl})` }} aria-hidden="true" />
      */}

      <div className="hero-inner">
        <h1 className="hero-title">
          Soluciones Avanzadas de <br />
          Inteligencia Artificial
        </h1>

        <p className="hero-sub">
          Transformamos ideas en realidad con tecnología de vanguardia.<br />
          Nuestras soluciones de IA potencian el futuro de tu negocio.
        </p>

        {/* CTA principal → no forzamos scroll manual aquí, es navegación normal por ancla,
           pero si quieres el mismo smooth controlado que en el chevron, puedes
           convertir esto en onClick y hacer scrollIntoView también. */}
        <a href="#soluciones" className="cta">
          <span>Ver más</span>
          <span className="sr-only"> sobre nuestras soluciones</span>
        </a>
      </div>

      <a
        href="#quienes"
        className="hero-chevron"
        onClick={scrollToSection}
        aria-label="Desplazar hacia abajo"
        title="Desplazar hacia abajo"
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
      </a>
    </section>
  );
}
