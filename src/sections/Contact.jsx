import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const data = Object.fromEntries(new FormData(e.currentTarget))

    // Opción rápida: Formspree (reemplaza TU_ENDPOINT)
    const res = await fetch('https://formspree.io/f/TU_ENDPOINT', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message
      })
    })

    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <section id="contacto" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">¿Hablamos?</h2>
        <p className="mt-2 text-slate-700">Estamos listos para ayudarte a transformar tus ideas.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Nombre *" required className="border rounded-xl px-4 py-3" />
            <input name="email" type="email" placeholder="Correo electrónico *" required className="border rounded-xl px-4 py-3" />
          </div>
          <textarea name="message" placeholder="Mensaje *" required rows="5" className="border rounded-xl px-4 py-3"></textarea>
          <p className="text-xs text-slate-500">
            Trataremos sus datos para responder a su mensaje. Puede ejercer sus derechos escribiéndonos a info@naar.es. Más información en la Política de privacidad.
          </p>
          <button disabled={status==='loading'} className="bg-primary text-white px-5 py-3 rounded-xl">
            {status==='loading' ? 'Enviando…' : 'Enviar'}
          </button>
          {status==='success' && <p className="text-green-700">¡Mensaje enviado! Te contactaremos en breve.</p>}
          {status==='error' && <p className="text-red-700">Error al enviar. Inténtalo de nuevo.</p>}
        </form>

        <div className="mt-8 text-sm text-slate-600">
          <p><strong>Tel:</strong> +34 946 52 87 16 &nbsp;•&nbsp; <strong>Email:</strong> info@naar.es</p>
        </div>
      </div>
    </section>
  )
}