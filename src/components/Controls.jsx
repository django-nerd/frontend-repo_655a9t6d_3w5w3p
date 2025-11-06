import { Keyboard, Gamepad2, MousePointerClick } from 'lucide-react'

const keyboardControls = [
  ['W', 'Accelerate'],
  ['S', 'Brake'],
  ['A / D', 'Steer / Drift'],
  ['SPACE', 'Boost (+30% / 1.5s)'],
  ['SHIFT', 'Activate Powerup'],
  ['ESC', 'Pause']
]

const controllerControls = [
  ['LS', 'Steer'],
  ['RT', 'Accelerate'],
  ['LT', 'Brake'],
  ['A', 'Boost'],
  ['X', 'Powerup']
]

export default function Controls() {
  return (
    <section id="controls" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Controls</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 text-cyan-100 mb-4">
              <Keyboard className="h-5 w-5" />
              <h3 className="font-semibold">Keyboard</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyboardControls.map(([k, v]) => (
                <li key={k} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-white/90 font-semibold">{k}</span>
                  <span className="text-cyan-100/80 text-sm">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 text-cyan-100 mb-4">
              <Gamepad2 className="h-5 w-5" />
              <h3 className="font-semibold">Controller</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {controllerControls.map(([k, v]) => (
                <li key={k} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-white/90 font-semibold">{k}</span>
                  <span className="text-cyan-100/80 text-sm">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-cyan-100/80">
              <MousePointerClick className="h-4 w-4" />
              <span>Use mouse to navigate UI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
