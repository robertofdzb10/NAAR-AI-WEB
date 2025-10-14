export default function About() {
  return (
    <section id="quienes" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Innovación en Inteligencia Artificial</h2>
          <p className="mt-3 text-slate-700">
            Somos una empresa especializada en desarrollar soluciones de IA personalizadas que transforman cómo las
            empresas operan y se conectan con sus clientes. Combinamos tecnología de vanguardia con un profundo
            entendimiento de las necesidades de negocio.
          </p>
        </div>
        <ul className="grid gap-4">
          <li className="p-4 rounded-xl border">
            <p className="font-semibold">Experiencia</p>
            <p className="text-slate-600">Equipo de expertos en IA con amplia experiencia en soluciones innovadoras.</p>
          </li>
          <li className="p-4 rounded-xl border">
            <p className="font-semibold">Tecnología</p>
            <p className="text-slate-600">Herramientas y frameworks avanzados para resultados reales.</p>
          </li>
          <li className="p-4 rounded-xl border">
            <p className="font-semibold">Personalización</p>
            <p className="text-slate-600">Soluciones adaptadas a las necesidades específicas de tu negocio.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}