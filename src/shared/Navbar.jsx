import { useState } from "react";
import logoUrl from "../assets/LOGO NAAR_ARTIFICIAL INTELLIGENCE_FONDO OSCURO.svg";

// mismo helper que usamos en el resto de la app
function navigateToSection(targetIndex) {
  window.dispatchEvent(
    new CustomEvent("naar-goToSection", {
      detail: { targetIndex },
    })
  );
}

export default function Navbar({ currentSection = 0 }) {
  const items = [
    { href: "#quienes", label: "QUIÉNES SOMOS", index: 1 },
    { href: "#metodologia", label: "METODOLOGÍA", index: 2 },
    { href: "#soluciones", label: "SOLUCIONES", index: 3 },
    { href: "#contacto", label: "CONTACTO", index: 4 },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] navbar backdrop-blur w-full">
      <nav className="w-full px-16 h-[88px] md:h-[96px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            navigateToSection(0); // ir al hero
          }}
        >
          <img
            src={logoUrl}
            alt="NAAR - Artificial Intelligence"
            className="h-[80px] md:h-[88px] w-auto scale-[1.5] logo-img"
          />
        </a>

        {/* Menú escritorio */}
        <div className="hidden md:flex items-center gap-16">
          <ul className="flex items-center gap-16">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className={
                    "nav-item transition-colors duration-200 cursor-pointer" +
                    (currentSection === it.index ? " nav-item--active" : "")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection(it.index); // <-- navegación centralizada
                  }}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="lang-pill">EN</a>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <ul className="w-full px-16 py-4 grid gap-3">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className={
                    "nav-item block py-2 transition-colors duration-200 cursor-pointer" +
                    (currentSection === it.index ? " nav-item--active" : "")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    navigateToSection(it.index); // <-- igual en móvil
                  }}
                >
                  {it.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#"
                className="lang-pill block py-2"
                onClick={() => {
                  setOpen(false);
                  // si en el futuro quieres idioma -> aquí
                }}
              >
                EN
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
