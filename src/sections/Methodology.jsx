const steps = [
  {
    n: '1',
    title: 'Consulta Inicial',
    desc: 'Analizamos necesidades y objetivos para definir alcance y solución óptima.',
    bullets: ['Análisis de requerimientos', 'Definición de objetivos', 'Evaluación de viabilidad', 'Propuesta personalizada']
  },
  {
    n: '2',
    title: 'Desarrollo Personalizado',
    desc: 'Diseño y desarrollo iterativo con pruebas continuas y revisiones.',
    bullets: ['Arquitectura', 'Desarrollo iterativo', 'Pruebas continuas', 'Revisiones periódicas']
  },
  {
    n: '3',
    title: 'Implementación Final',
    desc: 'Despliegue, capacitación y soporte post-implementación.',
    bullets: ['Despliegue en producción', 'Capacitación', 'Documentación', 'Soporte']
  }
]

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Nuestra Metodología</h2>
        <p className="mt-2 text-slate-700">Un proceso estructurado para garantizar el éxito de cada proyecto.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map(s => (
            <article key={s.n} className="p-6 rounded-2xl border">
              <div className="text-secondary font-black text-4xl">{s.n}</div>
              <h3 className="mt-2 font-semibold text-lg">{s.title}</h3>
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