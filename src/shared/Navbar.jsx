// ──────────────────────────────────────────────────────────────────────────────
// src/shared/Navbar.jsx
// ──────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import logoUrl from "../assets/naar-logo-dark.png";

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
      {/* ⚙️ Cambiamos max-w-[1440px] por full width */}
      <nav className="w-full px-12 h-[88px] flex items-center justify-between">
        {/* Izquierda: logo pegado al borde */}
        <a href="#" className="flex flex-col items-start leading-none">
          <img
            src={logoUrl}
            alt="NAAR - Artificial Intelligence"
            className="h-12 w-auto"
          />
          <div className="logo-caption -mt-1">ARTIFICIAL INTELLIGENCE</div>
        </a>

        {/* Derecha: menú + idioma pegados al borde derecho */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-12">
            {items.map((it) => (
              <li key={it.href}>
                <a href={it.href} className="nav-item">
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="lang-pill">
            EN
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          <ul className="w-full px-12 py-4 grid gap-3">
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
