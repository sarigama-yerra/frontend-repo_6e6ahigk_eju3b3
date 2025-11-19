import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(800px_400px_at_0%_0%,rgba(34,211,238,0.15),transparent),radial-gradient(800px_400px_at_100%_0%,rgba(168,85,247,0.15),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}

export default App
