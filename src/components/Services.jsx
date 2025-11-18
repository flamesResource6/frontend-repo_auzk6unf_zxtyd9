import { RollerCoaster, ShieldCheck, Sparkles, Building2, Home, Palette } from 'lucide-react'

const services = [
  { icon: <Home className="text-blue-600" />, title: 'Innenraum & Lack', text: 'Innenanstriche, Lackierarbeiten und Tapezieren – staubarm, sauber und langlebig.' },
  { icon: <Building2 className="text-blue-600" />, title: 'Fassade', text: 'Fassadengestaltung inkl. Putz- und Ausbesserungsarbeiten, langlebige Systeme.' },
  { icon: <ShieldCheck className="text-blue-600" />, title: 'Schimmelbeseitigung', text: 'Analyse, fachgerechte Entfernung und Beratung für dauerhaft gesundes Raumklima.' },
  { icon: <Palette className="text-blue-600" />, title: 'Farbberatung', text: 'Individuelle Farbkonzepte, Musterflächen und Materialproben vor Ort.' },
  { icon: <Sparkles className="text-blue-600" />, title: 'Sorgfalt & Sauberkeit', text: 'Abdeck- und Schutzarbeiten, klare Absprachen, reibungslose Abläufe.' },
]

export default function Services() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Unsere Leistungen</h2>
        <p className="text-slate-700 mt-2">Hochwertige Materialien, saubere Verarbeitung und termintreue Ausführung – für Privat und Gewerbe.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-5 bg-white hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-3">{s.icon}</div>
              <p className="font-semibold text-slate-900">{s.title}</p>
              <p className="text-sm text-slate-600 mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
