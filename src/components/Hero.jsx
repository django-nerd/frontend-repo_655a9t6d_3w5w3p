import { Rocket, Gauge, Zap, Music } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-purple-600/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 text-cyan-200 uppercase tracking-widest text-xs font-semibold mb-4">
                <Gauge className="h-4 w-4" /> 150 BPM • Endless Drift
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow">
                Neon Drift: <span className="text-cyan-300">Liquid Run</span>
              </h1>
              <p className="mt-4 text-cyan-50/90 text-lg max-w-xl">
                A fast-paced hover runner with liquid-glass vibes, phonk energy and precision drifting. Collect DriftCoins, chain combos, and unleash the boost.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#play" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 rounded-xl shadow-lg transition">
                  <Rocket className="h-5 w-5" /> Play Demo
                </a>
                <a href="#controls" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 rounded-xl border border-white/20 transition">
                  View Controls
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-cyan-50/80">
                <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-cyan-300" /> Boost +30%</span>
                <span className="inline-flex items-center gap-2"><Music className="h-4 w-4 text-fuchsia-300" /> Phonk 150 BPM</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-video w-full rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 border border-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_55%)]" />
                <div className="absolute inset-0 grid place-items-center text-center p-6">
                  <div>
                    <p className="text-white/90 font-semibold tracking-wide">Liquid Glass Look</p>
                    <p className="text-cyan-100/80 mt-2">Hovercraft • Neon bloom • Smooth drift</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
