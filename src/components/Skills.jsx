import { Sparkles } from 'lucide-react'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <div id="skills" className="glass-card rounded-2xl p-7">
      <h2 className="flex items-center gap-2 font-display font-bold text-lg mb-5">
        <Sparkles size={18} className="text-brand-purple" />
        Skills
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-semibold text-sm text-text-primary mb-3">{category}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
