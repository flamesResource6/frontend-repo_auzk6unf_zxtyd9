import PageLayout from '../components/PageLayout'

const projects = [
  { type: 'Privat', title: 'Altbauwohnung – Farbkonzept & Anstrich', img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop' },
  { type: 'Gewerblich', title: 'Büroetage – Neuanstrich & Akustik', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop' },
  { type: 'Privat', title: 'Fassade – Energetische Sanierung', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop' },
  { type: 'Gewerblich', title: 'Treppenhaus – Schutzanstrich', img: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop' },
]

export default function Referenzen() {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-900">Referenzen</h1>
          <p className="text-slate-700 mt-2">Auswahl abgeschlossener Projekte – mit Vorher/Nachher, Kurzbeschreibung und Kundenstimmen.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {projects.map((p, i) => (
              <figure key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                <figcaption className="p-4">
                  <p className="text-xs text-blue-700 font-semibold">{p.type}</p>
                  <p className="font-medium text-slate-900">{p.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <a href="/kontakt" className="inline-block mt-8 bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700">Mehr Projekte ansehen</a>
        </div>
      </section>
    </PageLayout>
  )
}
