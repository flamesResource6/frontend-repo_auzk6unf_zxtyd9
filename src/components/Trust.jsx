export default function Trust() {
  return (
    <section className="py-14 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Warum wir?</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 text-slate-700">
            <li className="bg-white border border-slate-200 rounded-lg p-4">Familienbetrieb mit verlässlichen Ansprechpartnern.</li>
            <li className="bg-white border border-slate-200 rounded-lg p-4">Saubere, termintreue Ausführung inklusive Schutzarbeiten.</li>
            <li className="bg-white border border-slate-200 rounded-lg p-4">Transparente Angebote – keine versteckten Kosten.</li>
            <li className="bg-white border border-slate-200 rounded-lg p-4">Echte Referenzen, dokumentierte Qualität und Garantien.</li>
          </ul>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <p className="font-semibold text-slate-900">Kostenloses Erstgespräch</p>
          <p className="text-sm text-slate-600 mt-1">Wir beraten Sie unverbindlich zu Farben, Material und Ablauf – privat oder gewerblich.</p>
          <a href="/kontakt" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">Jetzt Termin sichern</a>
        </div>
      </div>
    </section>
  )
}
