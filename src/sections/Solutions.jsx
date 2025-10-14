const cards = [
  {
    title: 'Asistentes Virtuales Inteligentes',
    desc: 'Agentic AI + AI Agents para orquestación, decisiones y ejecución conectada a APIs.',
  },
  {
    title: 'Imágenes y Vídeos con IA',
    desc: 'Generación de contenido visual realista para marketing, diseño y entretenimiento.',
  },
  {
    title: 'Desarrollo de Software',
    desc: 'Aplicaciones web/móvil y sistemas empresariales escalables y seguros.',
  },
]

export default function Solutions() {
  return (
    <section id="soluciones" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Soluciones</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map(c => (
            <article key={c.title} className="p-6 rounded-2xl border hover:shadow-sm transition">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-slate-600">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}