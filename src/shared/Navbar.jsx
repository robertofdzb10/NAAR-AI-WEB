import { useState } from "react";
import logoUrl from "../assets/LOGO NAAR_ARTIFICIAL INTELLIGENCE_FONDO OSCURO.svg";

export default function Navbar() {
  const items = [
    { href: "#quienes", label: "QUIÉNES SOMOS" },
    { href: "#metodologia", label: "METODOLOGÍA" },
    { href: "#soluciones", label: "SOLUCIONES" },
    { href: "#contacto", label: "CONTACTO" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 navbar backdrop-blur w-full">
      {/* Altura más contenida para igualar la referencia */}
      <nav className="w-full px-16 h-[88px] md:h-[96px] flex items-center justify-between">
        {/* Logo: sin caption, tamaño protagonista */}
        <a href="#" className="flex items-center">
          <img
            src={logoUrl}
            alt="NAAR - Artificial Intelligence"
            className="h-[80px] w-auto md:h-[88px] w-auto scale-[1.5] logo-img"
          />
        </a>

        {/* Menú + idioma a la derecha */}
        <div className="hidden md:flex items-center gap-16">
          <ul className="flex items-center gap-16">
            {items.map((it) => (
              <li key={it.href}>
                <a href={it.href} className="nav-item">
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="lang-pill">EN</a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
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
                  className="nav-item block py-2"
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="lang-pill block py-2"
                onClick={() => setOpen(false)}
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
