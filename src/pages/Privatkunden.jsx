import PageLayout from '../components/PageLayout'

export default function Privatkunden() {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Für Privatkunden</h1>
            <p className="text-slate-700 mt-2">Behagliche Räume ohne Schmutzstress: Wir schützen Möbel, arbeiten zügig und hinterlassen alles sauber. Beratung zu Farbstimmungen, Akzenten und gesundem Raumklima inklusive.</p>
            <a href="/kontakt" className="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700">Angebot für Ihr Zuhause anfordern</a>
          </div>
          <div className="rounded-xl overflow-hidden shadow border border-slate-200">
            <img src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1600&auto=format&fit=crop" alt="Wohnzimmer mit frischer Farbe" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
