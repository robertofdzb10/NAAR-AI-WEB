export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row gap-2 md:gap-6 justify-between">
        <p>NAAR 2025 ©</p>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-secondary">Términos</a>
          <a href="#" className="hover:text-secondary">Privacidad</a>
          <a href="#contacto" className="hover:text-secondary">Contacto</a>
        </nav>
      </div>
    </footer>
  )
}