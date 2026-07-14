import { Sparkles } from 'lucide-react'
import { aboutMe } from '../data/portfolioData'

export default function About() {
  return (
    <div id="about" className="glass-card rounded-2xl p-7">
      <h2 className="flex items-center gap-2 font-display font-bold text-lg mb-5">
        <Sparkles size={18} className="text-brand-purple" />
        About Me
      </h2>

      <div className="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
        {aboutMe.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <a
        href="#contact"
        className="inline-block px-5 py-2.5 rounded-lg border border-brand-purple text-brand-purple font-semibold text-sm hover:bg-brand-purple/10 transition-colors"
      >
        More About Me
      </a>
    </div>
  )
}
