export default function About() {
  return (
    <section id="quienes" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Innovación en Inteligencia Artificial</h2>
          <p className="mt-4 text-slate-700">
            Somos una empresa especializada en desarrollar soluciones de IA personalizadas que 
            transforman la manera en que las empresas operan y se conectan con sus clientes. 
            Combinamos tecnología de vanguardia con un profundo entendimiento de las 
            necesidades empresariales.
          </p>
          <div className="mt-6">
            <a href="#metodologia" className="btn-primary uppercase">Ver más</a>
          </div>
        </div>
        <ul className="grid gap-4">
          <li className="p-6 rounded-xl border">
            <p className="font-semibold">Experiencia</p>
            <p className="text-slate-600">Equipo de expertos en IA con amplia experiencia en soluciones innovadores</p>
          </li>
          <li className="p-6 rounded-xl border">
            <p className="font-semibold">Tecnología</p>
            <p className="text-slate-600">Utilizamos las herramientas y frameworks más avanzados del mercado</p>
          </li>
          <li className="p-6 rounded-xl border">
            <p className="font-semibold">Personalización</p>
            <p className="text-slate-600">Soluciones adaptadas específicamente a las necesidades de tu negocio</p>
          </li>
        </ul>
      </div>
    </section>
  )
}