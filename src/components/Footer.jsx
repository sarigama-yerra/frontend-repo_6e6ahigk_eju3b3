export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-transparent">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {year} Adventurecode. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#services" className="text-slate-300 hover:text-white">Services</a>
            <a href="#work" className="text-slate-300 hover:text-white">Work</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
