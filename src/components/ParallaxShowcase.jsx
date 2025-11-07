import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Globe, Fingerprint } from 'lucide-react'

export default function ParallaxShowcase() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={ref} id="discover" className="relative w-full bg-gradient-to-b from-black via-[#0a0014] to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1250px_450px_at_50%_-10%,rgba(124,58,237,0.15),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Crypto Archaeology Protocol</h2>
          <p className="mt-4 text-purple-200/80">
            We preserve on-chain relics, timestamp discoveries, and tokenize provenance.
            Explore the core pillars as layers shift with your scroll.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div style={{ y: y1 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <Shield className="h-6 w-6 text-purple-300" />
            <h3 className="mt-4 text-xl font-semibold">Immutable Provenance</h3>
            <p className="mt-2 text-sm text-purple-200/80">Every artifact is minted with cryptographic lineage and verifiable metadata.</p>
          </motion.div>

          <motion.div style={{ y: y2 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <Globe className="h-6 w-6 text-purple-300" />
            <h3 className="mt-4 text-xl font-semibold">Open Discovery</h3>
            <p className="mt-2 text-sm text-purple-200/80">Community-led expeditions map ancient knowledge to a global, decentralized registry.</p>
          </motion.div>

          <motion.div style={{ y: y1 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <Fingerprint className="h-6 w-6 text-purple-300" />
            <h3 className="mt-4 text-xl font-semibold">Authenticity Engine</h3>
            <p className="mt-2 text-sm text-purple-200/80">AI-assisted validation protects the archive from replicas and temporal anomalies.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
