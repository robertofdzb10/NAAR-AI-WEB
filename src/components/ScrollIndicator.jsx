import React from "react";

// 🔹 Emisor de eventos global para navegación
function navigateToSection(targetIndex) {
  window.dispatchEvent(
    new CustomEvent("naar-goToSection", {
      detail: { targetIndex },
    })
  );
}

export default function ScrollIndicator({ currentIndex = 0 }) {
  // Índices de las secciones:
  // 0 = Hero
  // 1 = About
  // 2 = Methodology
  // 3 = Solutions
  // 4 = Contact
  const dots = [0, 1, 2, 3, 4];

  // 🔹 Cambia el estilo (bordes oscuros) cuando el fondo es claro
  // Si Methodology (2) ya es blanca, usamos >= 2
  // Si quieres solo Contact (4) como claro, cambia a === 4
  const lightBackground = currentIndex >= 2;

  return (
    <nav
      className={
        "section-nav" + (lightBackground ? " section-nav--light" : "")
      }
      aria-label="Navegación secciones"
    >
      {dots.map((i) => (
        <button
          key={i}
          onClick={() => navigateToSection(i)} // 🔹 Click -> mover a sección
          className={
            "section-nav__item" +
            (i === currentIndex ? " section-nav__item--active" : "")
          }
          aria-current={i === currentIndex ? "step" : undefined}
          aria-label={`Ir a sección ${i + 1}`}
        />
      ))}
    </nav>
  );
}
