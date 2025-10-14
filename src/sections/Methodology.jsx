const steps = [
  {
    n: '1',
    title: 'Consulta Inicial',
    desc: 'Analizamos tus necesidades y objetivos para definir el alcance del proyecto y la solución más adecuada.',
    bullets: ['Análisis de requerimientos', 'Definición de objetivos', 'Evaluación de viabilidad', 'Propuesta personalizada']
  },
  {
    n: '2',
    title: 'Desarrollo Personalizado',
    desc: 'Diseñamos y desarrollamos la solución utilizando las tecnologías más adecuadas para tu caso específico.',
    bullets: ['Diseño de arquitectura', 'Desarrollo iterativo', 'Pruebas continuas', 'Revisiones periódicas']
  },
  {
    n: '3',
    title: 'Implementación Final',
    desc: 'Desplegamos la solución en tu entorno, proporcionamos capacitación y aseguramos una transición sin problemas.',
    bullets: ['Despliegue en producción', 'Capacitación de usuarios', 'Documentación completa', 'Soporte post-implementación']
  }
]

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestra Metodología</h2>
        <p className="mt-2 text-slate-700">Un proceso estructurado para garantizar el éxito de cada proyecto</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map(s => (
            <article key={s.n} className="p-8 rounded-2xl border">
              <div className="text-secondary font-black text-5xl leading-none">{s.n}</div>
              <h3 className="mt-3 font-semibold text-xl whitespace-pre-line">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <ul className="mt-4 list-disc list-inside text-slate-600">
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}