import React from 'react'
import { Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black to-transparent py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm text-purple-200/80">© {new Date().getFullYear()} ArchaeoChain. Excavating the future.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="GitHub" className="rounded-lg border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
