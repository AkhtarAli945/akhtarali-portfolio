import { Sparkles } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <div id="experience">
      <h2 className="flex items-center gap-2 font-display font-bold text-xl mb-7">
        <Sparkles size={20} className="text-brand-purple" />
        Experience
      </h2>

      <ol className="relative border-l border-border pl-7 space-y-9">
        {experience.map((job) => (
          <li key={job.id} className="relative">
            <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-brand-purple ring-4 ring-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="font-display font-bold text-base">{job.role}</h3>
              <span className="text-xs text-text-muted">{job.period}</span>
            </div>
            <p className="text-sm text-brand-purple font-medium mb-2">{job.company}</p>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">{job.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
