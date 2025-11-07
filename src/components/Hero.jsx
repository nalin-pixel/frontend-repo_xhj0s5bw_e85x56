import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow gradients that do not block Spline interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span className="text-xs uppercase tracking-widest text-purple-200/90">Archaeo-Cyber Exploration</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-b from-white via-purple-200 to-purple-400/70 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Unearth The Future of the Past
        </h1>
        <p className="mt-5 max-w-2xl text-base text-purple-100/90 md:text-lg">
          A surreal expedition where ancient mysteries meet crypto-native technology.
          Scroll to uncover artifacts, lore, and interactive 3D discoveries.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#discover"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:translate-y-[-2px] hover:bg-purple-500"
          >
            <Rocket className="h-4 w-4" /> Begin Descent
          </a>
          <a
            href="#artifacts"
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            View Artifacts
          </a>
        </div>
      </div>
    </section>
  )
}
