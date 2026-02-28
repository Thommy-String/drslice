import { useState } from 'react'
import { HeroSection } from './components/HeroSection'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <HeroSection />

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
