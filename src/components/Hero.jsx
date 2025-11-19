import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90dvh] overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1200px_600px_at_90%_-10%,rgba(168,85,247,0.25),transparent)]" />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none">
          <div className="h-[55vh] w-[85vw] max-w-[1200px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur shadow-2xl">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white"
              >
                We craft playful, production-grade experiences
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-4 text-lg text-slate-300"
              >
                Adventurecode is a creative engineering studio building interactive web apps that blend speed, polish, and delight.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <a href="#work" className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/15 border border-white/20">
                  View work
                </a>
                <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-white shadow">
                  Start a project
                </a>
              </motion.div>

              <div className="mt-6 flex items-center gap-4 text-slate-300/80">
                <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_2px_rgba(34,211,238,0.7)]" />
                <span className="text-sm">Accepting limited bookings for Q4</span>
              </div>
            </div>

            <div className="lg:col-span-6"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
