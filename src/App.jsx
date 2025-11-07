import React from 'react'
import Hero from './components/Hero'
import ParallaxShowcase from './components/ParallaxShowcase'
import ArtifactCards from './components/ArtifactCards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter','Geist','Manrope',system-ui,sans-serif] text-white">
      <Hero />
      <ParallaxShowcase />
      <ArtifactCards />

      {/* Callout section */}
      <section className="relative bg-gradient-to-b from-black via-[#0a0014] to-black py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_0%,rgba(124,58,237,0.15),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Join The Dig</h2>
          <p className="mx-auto mt-4 max-w-2xl text-purple-200/80">
            Claim an Explorer Pass, access private digs, and vote on the next expedition. Built for
            creators, archivists, and time-traveling degenerates.
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3">
            <a className="rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:-translate-y-0.5 hover:bg-purple-500" href="#">
              Claim Pass
            </a>
            <a className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10" href="#">
              Read The Codex
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
