const cards = [
  {
    title: 'Asistentes Virtuales Inteligentes',
    desc: 'Combinamos "Agentic AI" para toma de decisiones autónomas y razonamiento avanzado con "AI Agents" para conectar con APIs y realizar tareas prácticas. Estos asistentes virtuales pueden automatizar procesos complejos, tomar decisiones basadas en datos y ejecutar acciones en tiempo real.',
    bullets: ['Toma de decisiones autónoma basada en objetivos', 'Integración con múltiples sistemas y APIs', 'Aprendizaje continuo y adaptación']
  },
  {
    title: 'Imágenes y Vídeos con IA',
    desc: 'Utilizamos tecnología de vanguardia para crear imágenes y vídeos realistas con IA, generando contenido visual de alta calidad para marketing, entretenimiento y diseño.'
  },
  {
    title: 'Desarrollo de Software',
    desc: 'Creamos soluciones digitales adaptadas a las necesidades de tu negocio. Desde aplicaciones web y móviles hasta sistemas empresariales, diseñamos software escalable, seguro y fácil'
  },
]

export default function Solutions() {
  return (
    <section id="soluciones" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="sr-only">Soluciones</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(c => (
            <article key={c.title} className="p-8 rounded-2xl border hover:shadow-sm transition">
              <h3 className="font-semibold text-xl whitespace-pre-line">{c.title}</h3>
              <p className="mt-3 text-slate-600">{c.desc}</p>
              {c.bullets && (
                <ul className="mt-4 list-disc list-inside text-slate-600">
                  {c.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}