import { ShoppingBag, Star, Paintbrush, Settings2 } from 'lucide-react'

const upgrades = [
  { name: 'Engine Lv1', cost: 500, effect: 'Speed +5%' },
  { name: 'Handling Lv1', cost: 600, effect: 'Tighter turns' },
  { name: 'BoostCore Lv1', cost: 800, effect: 'Boost +1s' }
]

const cosmetics = [
  { name: 'Glass Blue', cost: 1000 },
  { name: 'Cyber Crimson', cost: 1500 },
  { name: 'Phonk Wave Decal', cost: 1200 }
]

export default function ShopPreview() {
  return (
    <section id="shop" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 text-cyan-100 mb-6">
          <ShoppingBag className="h-5 w-5" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Shop Preview</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-white mb-3">
              <Settings2 className="h-4 w-4" />
              <h3 className="font-semibold">Upgrades</h3>
            </div>
            <ul className="space-y-3">
              {upgrades.map((u) => (
                <li key={u.name} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-white/90 font-medium">{u.name}</p>
                    <p className="text-cyan-100/70 text-sm">{u.effect}</p>
                  </div>
                  <span className="text-cyan-200 font-semibold">{u.cost} DC</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-white mb-3">
              <Paintbrush className="h-4 w-4" />
              <h3 className="font-semibold">Cosmetics</h3>
            </div>
            <ul className="space-y-3">
              {cosmetics.map((c) => (
                <li key={c.name} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-cyan-200" />
                    <p className="text-white/90 font-medium">{c.name}</p>
                  </div>
                  <span className="text-cyan-200 font-semibold">{c.cost} DC</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
