function navigateToSection(targetIndex) {
  window.dispatchEvent(
    new CustomEvent("naar-goToSection", {
      detail: { targetIndex },
    })
  );
}

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
  return (
    <section
      id="metodologia"
      data-index="2"
      data-bg="light"
      className="methodology"
    >
      <div className="methodology-inner">
        <header className="methodology-head">
          <h2 className="methodology-title">Nuestra Metodología</h2>
          <p className="methodology-sub">
            Un proceso estructurado para garantizar el éxito de cada proyecto
          </p>
        </header>

        <div className="methodology-grid">
          {steps.map((s) => (
            <article className="step" key={s.n}>
              <div className="step-num" aria-hidden="true">
                {s.n}
              </div>

              <div className="step-card">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                <ul className="step-list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        className="methodology-chevron"
        aria-label="Sigue leyendo"
        onClick={() => navigateToSection(3)} // Solutions
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
