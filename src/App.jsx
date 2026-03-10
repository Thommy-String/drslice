import { useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { Methodology } from './components/Methodology'
import { Services } from './components/Services'
import { Locations } from './components/Locations'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <HeroSection />
      <Methodology />
      <Services />
      <Locations />

      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dott. Paolo Panarini. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
