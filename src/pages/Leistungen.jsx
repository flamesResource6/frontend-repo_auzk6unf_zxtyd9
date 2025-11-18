import PageLayout from '../components/PageLayout'

const blocks = [
  { title: 'Innenraumgestaltung', text: 'Innenanstriche, Lackierarbeiten, Tapezieren und dekorative Techniken – sauber und langlebig.' },
  { title: 'Fassadengestaltung', text: 'Fachgerechte Fassadenbeschichtung inkl. Putzreparaturen und Schutzsysteme gegen Witterung.' },
  { title: 'Schimmelbeseitigung', text: 'Analyse, sichere Entfernung, Ursachenbeseitigung und Beratung für gesundes Raumklima.' },
  { title: 'Farbberatung', text: 'Individuelle Farbkonzepte, Musterflächen und passende Materialien für Ihr Projekt.' },
]

export default function Leistungen() {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900">Leistungen</h1>
          <p className="text-slate-700 mt-2">Hochwertige Materialien, strukturierter Ablauf und zuverlässige Termine – privat und gewerblich.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {blocks.map((b, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                <p className="font-semibold text-slate-900">{b.title}</p>
                <p className="text-slate-600 mt-1 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/kontakt" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700">Jetzt Angebot anfordern</a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
