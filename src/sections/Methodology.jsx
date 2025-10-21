import { useEffect, useRef } from "react";

const steps = [
  {
    n: "1",
    title: "Consulta\nInicial",
    desc:
      "Analizamos tus necesidades y objetivos para definir el alcance del proyecto y la solución más adecuada.",
    bullets: [
      "Análisis de requerimientos",
      "Definición de objetivos",
      "Evaluación de viabilidad",
      "Propuesta personalizada",
    ],
  },
  {
    n: "2",
    title: "Desarrollo\nPersonalizado",
    desc:
      "Diseñamos y desarrollamos la solución utilizando las tecnologías más adecuadas para tu caso específico.",
    bullets: [
      "Diseño de arquitectura",
      "Desarrollo iterativo",
      "Pruebas continuas",
      "Revisiones periódicas",
    ],
  },
  {
    n: "3",
    title: "Implementación\nFinal",
    desc:
      "Desplegamos la solución en tu entorno, proporcionamos capacitación y aseguramos una transición sin problemas.",
    bullets: [
      "Despliegue en producción",
      "Capacitación de usuarios",
      "Documentación completa",
      "Soporte post-implementación",
    ],
  },
];

export default function Methodology() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const els = cardsRef.current.filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target); // evita que se oculte al salir
          }
        });
      },
      { threshold: 0.18 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="metodologia" className="methodology">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Cabecera */}
        <header className="methodology-head">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Nuestra Metodología
          </h2>
          <p className="mt-2 text-slate-700">
            Un proceso estructurado para garantizar el éxito de cada proyecto
          </p>
        </header>

        {/* Cards */}
        <div className="methodology-grid">
          {steps.map((s, i) => (
            <div key={s.n} className="step">
              {/* número XXL, fuera de la card */}
              <div className="step-num" aria-hidden="true">{s.n}</div>

              {/* card por delante */}
              <article
                ref={(el) => (cardsRef.current[i] = el)}
                className="step-card"
              >
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                <ul className="step-list">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </article>
            </div>
          ))}
        </div>


        {/* Chevron de scroll */}
        <button
          type="button"
          className="methodology-chevron"
          aria-label="Desplazar a la siguiente sección"
          onClick={() => {
            const target =
              document.querySelector("#soluciones") ||
              document.querySelector("#contacto") ||
              document.querySelector("#metodologia")?.nextElementSibling;
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* mismo SVG que About */}
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </section>
  );
}
