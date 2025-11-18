export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-800 mb-2">Malerbetrieb Muster</p>
          <p>Familienunternehmen in Ihrer Stadt. Saubere Arbeit, termintreu, persönlich.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-2">Kontakt</p>
          <p>Telefon: 01234 567890</p>
          <p>E-Mail: info@maler-muster.de</p>
          <p>Mo–Fr: 8–17 Uhr</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-2">Hinweise</p>
          <p>Impressum • Datenschutz</p>
          <p>Innung • Meisterbetrieb • Versichert</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Malerbetrieb Muster</div>
    </footer>
  )
}
