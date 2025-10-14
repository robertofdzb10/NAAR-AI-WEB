export default function Navbar() {
  const items = [
    { href: '#soluciones', label: 'Soluciones' },
    { href: '#metodologia', label: 'Metodología' },
    { href: '#contacto', label: 'Contacto' },
    { href: '#quienes', label: 'Quiénes somos' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-primary">NAAR • AI</a>
        <ul className="hidden md:flex gap-6 text-sm">
          {items.map(it => (
            <li key={it.href}>
              <a href={it.href} className="hover:text-secondary transition-colors">{it.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="md:inline-block hidden bg-secondary text-primary font-semibold px-4 py-2 rounded-xl">Hablemos</a>
      </nav>
    </header>
  )
}