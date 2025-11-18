import { useState } from 'react'
import PageLayout from '../components/PageLayout'

export default function Kontakt() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          subject: payload.subject,
          message: payload.message,
          customer_type: payload.customer_type,
        })
      })
      const data = await res.json()
      if (res.ok) setStatus('ok')
      else setStatus(data?.detail || 'Fehler beim Senden')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <PageLayout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Kontakt</h1>
            <p className="text-slate-700 mt-2">Schneller Draht zum Meisterbetrieb: Telefon, E-Mail oder Anfrageformular. Auf Wunsch mit kostenlosem Vor-Ort-Termin.</p>
            <div className="mt-6 text-sm text-slate-700 space-y-1">
              <p><strong>Telefon:</strong> 01234 567890</p>
              <p><strong>E-Mail:</strong> info@maler-muster.de</p>
              <p><strong>Einsatzgebiet:</strong> Stadt & Umland</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" required placeholder="Ihr Name" className="border border-slate-300 rounded-md px-3 py-2" />
              <input name="email" required type="email" placeholder="E-Mail" className="border border-slate-300 rounded-md px-3 py-2" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="phone" placeholder="Telefon" className="border border-slate-300 rounded-md px-3 py-2" />
              <select name="customer_type" className="border border-slate-300 rounded-md px-3 py-2">
                <option value="private">Privatkunde</option>
                <option value="business">Geschäftskunde</option>
              </select>
            </div>
            <input name="subject" required placeholder="Betreff" className="border border-slate-300 rounded-md px-3 py-2" />
            <textarea name="message" required rows="5" placeholder="Ihre Nachricht" className="border border-slate-300 rounded-md px-3 py-2" />
            <button disabled={status==='sending'} className="bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-60">
              {status==='sending' ? 'Senden...' : 'Jetzt Termin sichern'}
            </button>
            {status && status!=='sending' && (
              <p className={`text-sm ${status==='ok' ? 'text-green-600' : 'text-red-600'}`}>
                {status==='ok' ? 'Vielen Dank! Wir melden uns umgehend.' : status}
              </p>
            )}
          </form>
        </div>
      </section>
    </PageLayout>
  )
}
