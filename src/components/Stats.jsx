import { Rocket, Code2, Briefcase, Users } from 'lucide-react'
import { stats } from '../data/portfolioData'

const iconMap = { Rocket, Code2, Briefcase, Users }

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-6 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon]
          return (
            <div
              key={stat.id}
              className="glass-card rounded-xl p-5 flex items-center gap-4"
            >
              <span className="shrink-0 w-11 h-11 rounded-lg bg-brand-gradient/15 border border-brand-purple/30 flex items-center justify-center">
                <Icon size={20} className="text-brand-purple" />
              </span>
              <span>
                <p className="font-display font-bold text-xl text-text-primary">{stat.value}</p>
                <p className="text-xs text-text-secondary leading-tight">{stat.label}</p>
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
