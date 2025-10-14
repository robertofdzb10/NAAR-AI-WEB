import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black leading-tight text-primary"
        >
          Soluciones Avanzadas de <span className="text-secondary">Inteligencia Artificial</span>
        </motion.h1>
        <p className="mt-4 max-w-3xl text-base md:text-lg text-slate-700">
          Transformamos ideas en realidad con tecnología de vanguardia.
          Nuestras soluciones de IA potencian el futuro de tu negocio.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#soluciones" className="btn-primary uppercase">Ver más</a>
        </div>
        <div className="mt-8 text-sm uppercase tracking-wide flex gap-6 text-slate-600">
          <a href="#soluciones" className="hover:text-secondary">Soluciones</a>
          <a href="#metodologia" className="hover:text-secondary">Metodología</a>
          <a href="#contacto" className="hover:text-secondary">Contacto</a>
          <a href="#quienes" className="hover:text-secondary">Quiénes somos</a>
        </div>
      </div>
    </section>
  )
}