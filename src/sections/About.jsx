import aboutUrl from "../assets/about-bg.jpg"; // imagen grande de fondo

export default function About() {
  const NAVBAR_HEIGHT = 96;

  const scrollToNext = (e) => {
    e.preventDefault();
    const el = document.querySelector("#metodologia");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="quienes" className="about" aria-label="Quiénes somos">
      {/* Hero superior con foto */}
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${aboutUrl})` }}
        aria-hidden="true"
      >
        <div className="about-hero-inner">
          <h2 className="about-title">Innovación en Inteligencia Artificial</h2>
          <p className="about-lead">
            Somos una empresa especializada en desarrollar soluciones de IA personalizadas que
            transforman la manera en que las empresas operan y se conectan con sus clientes.
            Combinamos tecnología de vanguardia con un profundo entendimiento de las necesidades
            empresariales.
          </p>
        </div>
      </div>

      {/* Features (3 columnas) */}
      <div className="about-features">
        <div className="about-container">
          <ul className="feature-grid">
            <li className="feature-item">
              <span className="feature-icon">
                {/* maletín */}
                <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
                  <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.7"/>
                  <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/>
                  <path d="M3 12h18" stroke="currentColor" strokeWidth="1.7"/>
                </svg>
              </span>
              <h3 className="feature-title">Experiencia</h3>
              <p className="feature-desc">
                Equipo de expertos en IA con amplia experiencia en soluciones innovadoras
              </p>
            </li>

            <li className="feature-item">
              <span className="feature-icon">
                {/* chip */}
                <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.7"/>
                  <path d="M3 10h4M3 14h4M17 10h4M17 14h4M10 3v4M14 3v4M10 17v4M14 17v4"
                        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                </svg>
              </span>
              <h3 className="feature-title">Tecnología</h3>
              <p className="feature-desc">
                Utilizamos las herramientas y frameworks más avanzados del mercado
              </p>
            </li>

            <li className="feature-item">
              <span className="feature-icon">
                {/* lapiz */}
                <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
                  <path d="M4 20l4-.8 9.2-9.2a2 2 0 0 0 0-2.8l-.4-.4a2 2 0 0 0-2.8 0L4 16v4z"
                        stroke="currentColor" strokeWidth="1.7" fill="none"/>
                  <path d="M14 6l4 4" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
              <h3 className="feature-title">Personalización</h3>
              <p className="feature-desc">
                Soluciones adaptadas específicamente a las necesidades de tu negocio
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Chevron a siguiente sección */}
      <a href="#metodologia" className="about-chevron" onClick={scrollToNext} aria-label="Sigue leyendo">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  );
}