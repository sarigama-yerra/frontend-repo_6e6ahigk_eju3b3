import { motion } from 'framer-motion'
import { Code2, Sparkles, Rocket, Cpu, Verified, Quote, Mail, ArrowRight } from 'lucide-react'

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-24">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(34,211,238,0.07),transparent),radial-gradient(600px_300px_at_90%_10%,rgba(168,85,247,0.07),transparent)]" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  </section>
)

export default function Sections() {
  return (
    <div>
      <Section id="about" title="About" subtitle="We’re a small studio with a big heart for delightful UX.">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-slate-300">
              We ship interactive experiences that feel alive. From rapid prototypes to production-grade SaaS, we blend engineering rigor with motion, microinteractions, and accessibility.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="grid grid-cols-2 gap-4 text-slate-200">
              <li className="flex items-center gap-2"><Verified size={18} className="text-cyan-400"/> Production-ready</li>
              <li className="flex items-center gap-2"><Sparkles size={18} className="text-purple-400"/> Delightful</li>
              <li className="flex items-center gap-2"><Cpu size={18} className="text-cyan-400"/> Performant</li>
              <li className="flex items-center gap-2"><Code2 size={18} className="text-purple-400"/> Maintainable</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="services" title="Services" subtitle="From idea to launch, we help you move fast.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Rocket, title: 'Product Prototypes', desc: 'Clickable concepts that sell the vision.' },
            { icon: Sparkles, title: 'Interactive UI', desc: 'Motion, microinteractions, and polish.' },
            { icon: Cpu, title: 'Engineering', desc: 'Clean, modern stacks built to scale.' },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/80 to-purple-600/80 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="work" title="Case Studies" subtitle="Selected work that shows our range.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-5">
                <h4 className="text-white font-semibold">Project {i}</h4>
                <p className="text-sm text-slate-300">A short description about results and outcomes.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="tech" title="Technologies" subtitle="We pick the right tool for the job.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {['React','Next.js','FastAPI','MongoDB','Tailwind','Framer Motion'].map((t) => (
            <motion.div key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-slate-200">
              {t}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="testimonials" title="Testimonials" subtitle="People say nice things.">
        <div className="grid gap-6 md:grid-cols-2">
          {[1,2].map((i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
              <Quote className="mb-3 text-slate-400"/>
              “They delivered a beautiful, fast product that our users love.”
              <footer className="mt-3 text-sm text-slate-400">Happy Client • SaaS</footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Tell us about your idea. We’ll reply within 1–2 days.">
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
            <input type="email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Email" />
          </div>
          <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Company (optional)" />
          <textarea rows="5" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Project details"></textarea>
          <button className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-white font-semibold shadow">
            <Mail size={18} className="mr-2" />
            Send inquiry
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="text-sm text-slate-400">This is a placeholder form (no messages are sent).</p>
        </form>
      </Section>
    </div>
  )
}
