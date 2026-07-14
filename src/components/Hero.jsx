import { Download, Github, Linkedin, Twitter, Mail, Box, Search, Bot, Users, Database } from 'lucide-react'
import { heroContent, personalInfo } from '../data/portfolioData'

const iconMap = { Box, Search, Bot, Users, Database }

const positionClasses = {
  'top-left': 'top-10 left-0 lg:-left-4',
  'mid-left': 'top-[42%] left-2 lg:-left-8',
  'top-right': 'top-4 right-0 lg:-right-6',
  'mid-right': 'top-[40%] right-0 lg:-right-10',
  'bottom-right': 'bottom-2 right-4 lg:right-0',
}

function FloatingBadge({ badge, delay }) {
  const Icon = iconMap[badge.icon]
  return (
    <div
      className={`float-badge hidden md:flex absolute ${positionClasses[badge.position]} glass-card rounded-xl px-4 py-3 items-start gap-3 shadow-card max-w-[180px]`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="shrink-0 w-8 h-8 rounded-lg bg-brand-gradient/20 border border-brand-purple/40 flex items-center justify-center">
        <Icon size={16} className="text-brand-purple" />
      </span>
      <span>
        <p className="text-sm font-semibold text-text-primary leading-tight">{badge.title}</p>
        {badge.subtitle && (
          <p className="text-xs text-text-muted leading-tight mt-0.5">{badge.subtitle}</p>
        )}
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-radial"
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text content */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full border border-brand-purple/50 text-brand-purple mb-6">
            {heroContent.badge}
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.1] mb-6">
            {heroContent.headlineLines.map((line, i) =>
              i === heroContent.headlineLines.length - 1 ? (
                <span key={i} className="block bg-brand-gradient bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                <span key={i} className="block">
                  {line}
                </span>
              )
            )}
          </h1>

          <p className="text-text-secondary text-base leading-relaxed max-w-md mb-8">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-brand-gradient font-semibold text-white shadow-glow hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-6 py-3 rounded-lg border border-border text-text-primary font-semibold flex items-center gap-2 hover:border-brand-purple transition-colors"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          <div className="flex gap-3">
            {[
              { Icon: Github, href: personalInfo.social.github, label: 'GitHub' },
              { Icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
              { Icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
              { Icon: Mail, href: personalInfo.social.email, label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-brand-purple hover:border-brand-purple transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: portrait + floating badges */}
        <div className="relative h-[420px] flex items-center justify-center">
          {heroContent.floatingBadges.map((badge, i) => (
            <FloatingBadge key={badge.id} badge={badge} delay={i * 0.6} />
          ))}

          <div className="pulse-ring relative w-64 h-64 rounded-full border-2 border-brand-purple/60 flex items-center justify-center overflow-hidden bg-bg-surface">
            {/* Replace src with your own photo at /src/assets/images/profile.jpg */}
            <img
              src="/src/assets/images/MyProfile.png"
              alt={personalInfo.name}
              className="w-[92%] h-[92%] object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div
              className="hidden w-[92%] h-[92%] rounded-full bg-brand-gradient/20 items-center justify-center text-5xl font-display font-bold text-brand-purple"
            >
              {personalInfo.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
