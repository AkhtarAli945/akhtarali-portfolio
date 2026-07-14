import { useState } from 'react'
import { Sparkles, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/portfolioData'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const current = testimonials[index]

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <div id="testimonials">
      <div className="flex items-center justify-between mb-7">
        <h2 className="flex items-center gap-2 font-display font-bold text-xl">
          <Sparkles size={20} className="text-brand-purple" />
          Testimonials
        </h2>
        {total > 1 && (
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:border-brand-purple transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:border-brand-purple transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="glass-card rounded-2xl p-7">
        <Quote className="text-brand-purple mb-4" size={28} />
        <p className="text-text-secondary text-sm leading-relaxed mb-6">{current.quote}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-brand-gradient/20 border border-brand-purple/40 flex items-center justify-center font-display font-bold text-sm text-brand-purple overflow-hidden">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div>
              <p className="font-semibold text-sm text-text-primary">{current.name}</p>
              <p className="text-xs text-text-muted">{current.role}</p>
            </div>
          </div>

          <div className="flex gap-0.5">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
