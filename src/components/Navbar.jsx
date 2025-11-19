import { useState } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Tech', href: '#tech' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="relative inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow ring-1 ring-white/10">
                <Rocket size={18} className="-rotate-12" />
              </span>
              <div className="text-left">
                <div className="text-sm font-semibold tracking-tight text-white">Adventurecode</div>
                <div className="text-xs text-slate-300/80">Creative Engineering</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white rounded-lg hover:bg-white/5 transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95 transition"
              >
                <Sparkles size={16} /> Start a project
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-2 pb-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                Start a project
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
