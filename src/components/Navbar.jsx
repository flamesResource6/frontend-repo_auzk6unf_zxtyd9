import { Link, NavLink } from 'react-router-dom'
import { Paintbrush, Phone, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-slate-200 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-blue-600 text-white"><Paintbrush size={20} /></div>
            <span className="font-semibold text-slate-800">Malerbetrieb</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLink}>Start</NavLink>
            <NavLink to="/leistungen" className={navLink}>Leistungen</NavLink>
            <NavLink to="/privatkunden" className={navLink}>Privatkunden</NavLink>
            <NavLink to="/geschaeftskunden" className={navLink}>Geschäftskunden</NavLink>
            <NavLink to="/referenzen" className={navLink}>Referenzen</NavLink>
            <NavLink to="/kontakt" className={navLink}>Kontakt</NavLink>
            <a href="tel:+491234567890" className="ml-3 inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              <Phone size={16} /> 01234 567890
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menü">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <div className="grid gap-1">
              <NavLink to="/" onClick={() => setOpen(false)} className={navLink}>Start</NavLink>
              <NavLink to="/leistungen" onClick={() => setOpen(false)} className={navLink}>Leistungen</NavLink>
              <NavLink to="/privatkunden" onClick={() => setOpen(false)} className={navLink}>Privatkunden</NavLink>
              <NavLink to="/geschaeftskunden" onClick={() => setOpen(false)} className={navLink}>Geschäftskunden</NavLink>
              <NavLink to="/referenzen" onClick={() => setOpen(false)} className={navLink}>Referenzen</NavLink>
              <NavLink to="/kontakt" onClick={() => setOpen(false)} className={navLink}>Kontakt</NavLink>
              <a href="tel:+491234567890" className="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                <Phone size={16} /> 01234 567890
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
