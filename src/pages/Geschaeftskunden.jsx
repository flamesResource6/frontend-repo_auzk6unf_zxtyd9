import PageLayout from '../components/PageLayout'

export default function Geschaeftskunden() {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900">Für Geschäftskunden</h1>
          <p className="text-slate-700 mt-2">Effiziente Planung, klare Terminabsprachen und dokumentierte Qualität. Ob Treppenhäuser, Büroflächen oder Fassaden – wir arbeiten koordiniert, sicher und normgerecht.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {['Koordination mit Hausverwaltungen', 'Arbeiten im laufenden Betrieb', 'Sicherheits- und Brandschutzauflagen', 'Wartungs- und Turnuspläne', 'Dokumentation & Abnahme', 'Festpreis- und Rahmenverträge'].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 text-sm text-slate-700">{item}</div>
            ))}
          </div>

          <a href="/kontakt" className="inline-block mt-8 bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700">Projektanfrage starten</a>
        </div>
      </section>
    </PageLayout>
  )
}
