import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import Privatkunden from './pages/Privatkunden'
import Geschaeftskunden from './pages/Geschaeftskunden'
import Referenzen from './pages/Referenzen'
import Kontakt from './pages/Kontakt'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leistungen" element={<Leistungen />} />
      <Route path="/privatkunden" element={<Privatkunden />} />
      <Route path="/geschaeftskunden" element={<Geschaeftskunden />} />
      <Route path="/referenzen" element={<Referenzen />} />
      <Route path="/kontakt" element={<Kontakt />} />
    </Routes>
  )
}

export default App
