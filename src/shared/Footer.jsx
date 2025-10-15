import { FaFacebookF, FaInstagram, FaLinkedinIn, FaVimeoV, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaVimeoV />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Izquierda */}
        <p className="footer-copy">NAAR 2025 ©</p>

        {/* Centro */}
        <ul className="socials-list footer-center">
          {socials.map((s, i) => (
            <li key={i}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                {s.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Derecha */}
        <nav className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}