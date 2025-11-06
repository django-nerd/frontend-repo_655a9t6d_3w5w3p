import { Coins, Shield, Magnet, Timer, Gauge, Wand2 } from 'lucide-react'

const features = [
  { icon: Gauge, title: 'Hover Drift Physics', desc: 'Low-drag glide with tight, satisfying control at 60 FPS.' },
  { icon: Coins, title: 'DriftCoins & Combos', desc: 'Chain pickups to multiply rewards up to 2.5x.' },
  { icon: Magnet, title: 'Magnet Field', desc: 'Pull coins from 5m radius for clean lines.' },
  { icon: Shield, title: 'Reactive Shield', desc: 'Negate damage on impact. Perfect for risky gaps.' },
  { icon: Timer, title: 'Boost & Slow Time', desc: '+30% speed burst or tactical slow-mo moments.' },
  { icon: Wand2, title: 'Liquid Glass UI', desc: 'Futuristic neon aesthetic with soft bloom.' }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Core Systems</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/15 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 border border-white/20">
                  <Icon className="h-6 w-6 text-cyan-200" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-cyan-50/80 mt-1 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
