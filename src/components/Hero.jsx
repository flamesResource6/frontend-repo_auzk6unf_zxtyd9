import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Frische Farbe. Klare Planung. Saubere Ausführung.</h1>
          <p className="mt-4 text-lg text-slate-700">Familiengeführter Malerbetrieb für Privat- und Geschäftskunden. Innenräume, Fassaden, Schimmelbeseitigung und individuelle Farbberatung – termintreu und zuverlässig.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/kontakt" className="bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700">Kostenloses Erstgespräch</Link>
            <Link to="/leistungen" className="px-5 py-3 rounded-md font-semibold border border-slate-300 text-slate-700 hover:bg-white">Leistungen ansehen</Link>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200">
          <img src="https://images.unsplash.com/photo-1688372199140-cade7ae820fe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWxlciUyMGJlaSUyMGRlciUyMEFyYmVpdHxlbnwwfDB8fHwxNzYzNDU2MzM3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Maler bei der Arbeit" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
