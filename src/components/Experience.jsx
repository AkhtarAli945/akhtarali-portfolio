import { Sparkles } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <div id="experience">
      <h2 className="flex items-center justify-center gap-2 font-display font-bold text-xl mb-7">
        <Sparkles size={20} className="text-brand-purple" />
        Experience
      </h2>

      <div className="flex flex-col items-center gap-6">
        {experience.map((job) => (
          <div
            key={job.id}
            className="glass-card rounded-2xl p-7 max-w-lg w-full text-center"
          >
            <h3 className="font-display font-bold text-base">{job.role}</h3>
            <p className="text-sm text-brand-purple font-medium mt-1 mb-1">{job.company}</p>
            <span className="text-xs text-text-muted">{job.period}</span>
            <p className="text-sm text-text-secondary leading-relaxed mt-3">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
