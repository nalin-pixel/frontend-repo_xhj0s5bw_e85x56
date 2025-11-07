import React from 'react'
import { motion } from 'framer-motion'
import { Star, ScanLine, Layers } from 'lucide-react'

const items = [
  {
    title: 'Chrono-Tablet',
    desc: 'A slate etched with recursive glyphs that decrypt to a genesis block.',
    tag: 'Mythic',
  },
  {
    title: 'Nebula Shard',
    desc: 'Iridescent fragment rumored to store signatures from lost validators.',
    tag: 'Legendary',
  },
  {
    title: 'Quantum Seal',
    desc: 'A rotating ring that locks contracts to archeo timecodes.',
    tag: 'Rare',
  },
]

export default function ArtifactCards() {
  return (
    <section id="artifacts" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_0%,rgba(168,85,247,0.15),transparent),radial-gradient(800px_300px_at_90%_100%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Relics</h2>
          <p className="mt-4 text-purple-200/80">Hover to awaken. Click to flip the card and read the inscription.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <FlipCard key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FlipCard({ title, desc, tag }) {
  const [flipped, setFlipped] = React.useState(false)

  return (
    <div className="[perspective:1000px]">
      <motion.button
        onClick={() => setFlipped(v => !v)}
        className="relative h-64 w-full rounded-2xl focus:outline-none"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        aria-label={`Flip ${title}`}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-6 shadow-xl backdrop-blur"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* front */}
          <div className="absolute inset-0 grid place-items-center" style={{ backfaceVisibility: 'hidden' }}>
            <div className="text-center">
              <ScanLine className="mx-auto h-8 w-8 text-purple-300" />
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-purple-600/30 px-3 py-1 text-xs text-purple-100">
                <Star className="h-3 w-3" /> {tag}
              </span>
            </div>
          </div>
          {/* back */}
          <div className="absolute inset-0 rotate-y-180 p-6" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <p className="text-sm text-purple-100/90">{desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs">
              <Layers className="h-3 w-3 text-purple-300" />
              Inscription #0x{Math.floor(Math.random() * 10 ** 6).toString(16)}
            </div>
          </div>
        </motion.div>
      </motion.button>
    </div>
  )
}
