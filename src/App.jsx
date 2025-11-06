import Hero from './components/Hero'
import Features from './components/Features'
import Controls from './components/Controls'
import ShopPreview from './components/ShopPreview'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-cyan-300">Neon Drift</a>
          <nav className="hidden sm:flex items-center gap-6 text-cyan-100/90">
            <a className="hover:text-white" href="#features">Systems</a>
            <a className="hover:text-white" href="#controls">Controls</a>
            <a className="hover:text-white" href="#shop">Shop</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Controls />
        <ShopPreview />
      </main>

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-cyan-100/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Neon Drift: Liquid Run</p>
          <p>Windows • macOS • Linux • 60 FPS • 1920×1080</p>
        </div>
      </footer>
    </div>
  )
}

export default App
