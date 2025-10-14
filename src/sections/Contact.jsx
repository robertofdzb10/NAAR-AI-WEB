import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const data = Object.fromEntries(new FormData(e.currentTarget))

    // Honeypot: si el campo oculto tiene contenido, abortar
    if (data.company) {
      setStatus('idle')
      return
    }

    // Validación básica
    const emailOk = /.+@.+\..+/.test(data.email)
    if (!emailOk) {
      setStatus('idle')
      setError('Introduce un correo válido')
      return
    }

    if (!data.privacy) {
      setStatus('idle')
      setError('Debes aceptar la política de privacidad')
      return
    }

    // Opción rápida: Formspree (reemplaza TU_ENDPOINT)
    const res = await fetch('https://formspree.io/f/TU_ENDPOINT', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message
      })
    })

    setStatus(res.ok ? 'success' : 'error')
    if (!res.ok) setError('No se pudo enviar el mensaje. Inténtalo de nuevo.')
  }

  return (
    <section id="contacto" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">¿Hablamos?</h2>
        <p className="mt-2 text-slate-700">Estamos listos para ayudarte a transformar tus ideas.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4" noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="grid gap-2">
              <span className="text-sm">Nombre *</span>
              <input name="name" required className="border rounded-xl px-4 py-3" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm">Correo electrónico *</span>
              <input name="email" type="email" required className="border rounded-xl px-4 py-3" />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm">Mensaje *</span>
            <textarea name="message" required rows="5" className="border rounded-xl px-4 py-3"></textarea>
          </label>

          {/* Honeypot */}
          <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

          <label className="flex items-start gap-2 text-sm">
            <input name="privacy" type="checkbox" />
            <span>
              Acepto la <a href="#" className="underline">Política de privacidad</a> y consiento el tratamiento de mis datos para responder a mi consulta.
            </span>
          </label>

          <div className="grid gap-2">
            <button disabled={status==='loading'} className="btn-primary">
              {status==='loading' ? 'Enviando…' : 'Enviar'}
            </button>
            <div aria-live="polite" className="text-sm">
              {status==='success' && <p className="text-green-700">¡Mensaje enviado! Te contactaremos en breve.</p>}
              {status==='error' && <p className="text-red-700">{error}</p>}
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Puedes ejercer tus derechos escribiendo a <a className="underline" href="mailto:info@naar.es">info@naar.es</a>.
          </p>
        </form>

        <div className="mt-8 text-sm text-slate-600">
          <p><strong>Tel:</strong> +34 946 52 87 16 &nbsp;•&nbsp; <strong>Email:</strong> info@naar.es</p>
        </div>
      </div>
    </section>
  )
}