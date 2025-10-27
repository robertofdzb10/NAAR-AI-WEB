import aboutUrl from "../assets/about-bg.jpg";
import iconMaletin from "../assets/ICON_MALETIN.svg";
import iconTecnologia from "../assets/ICON_TECNOLOGIA.svg";
import iconPersonalizacion from "../assets/ICON_PERSONALIZACION.svg";

export default function About() {
  const scrollToNext = (e) => {
    e.preventDefault();

    const el = document.querySelector("#metodologia");
    if (!el) return;

    // Marca: vamos a metodología de forma programada
    if (typeof window !== "undefined") {
      window.__naarPrefillMethodology = true;
    }

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    el.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section id="quienes" className="about" aria-label="Quiénes somos">
      {/* ───── Hero superior ───── */}
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${aboutUrl})` }}
        aria-hidden="true"
        role="img"
      >
        <div className="about-hero-inner">
          <h2 className="about-title">Innovación en Inteligencia Artificial</h2>
          <p className="about-lead">
            Somos una empresa especializada en desarrollar soluciones de IA personalizadas
            que transforman la manera en que las empresas operan y se conectan con sus clientes.
            Combinamos tecnología de vanguardia con un profundo entendimiento de las
            necesidades empresariales.
          </p>
        </div>
      </div>

      {/* ───── Features (3 columnas / 3 filas en móvil) ───── */}
      <div className="about-features">
        <div className="about-container">
          <ul className="feature-grid">
            <li className="feature-item">
              <span className="feature-icon" aria-hidden="true">
                <img
                  src={iconMaletin}
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <h3 className="feature-title">Experiencia</h3>
              <p className="feature-desc">
                Equipo de expertos en IA con amplia experiencia en soluciones innovadoras
              </p>
            </li>

            <li className="feature-item">
              <span className="feature-icon" aria-hidden="true">
                <img
                  src={iconTecnologia}
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <h3 className="feature-title">Tecnología</h3>
              <p className="feature-desc">
                Utilizamos las herramientas y frameworks más avanzados del mercado
              </p>
            </li>

            <li className="feature-item">
              <span className="feature-icon" aria-hidden="true">
                <img
                  src={iconPersonalizacion}
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <h3 className="feature-title">Personalización</h3>
              <p className="feature-desc">
                Soluciones adaptadas específicamente a las necesidades de tu negocio
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* ───── Chevron hacia siguiente sección ───── */}
      <a
        href="#metodologia"
        className="about-chevron"
        onClick={scrollToNext}
        aria-label="Sigue leyendo"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
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
