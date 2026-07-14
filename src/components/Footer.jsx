import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-sm">
          <Code2 className="text-brand-purple" size={18} />
          {personalInfo.name}
        </a>

        <p className="text-xs text-text-muted">
          © {year} {personalInfo.name}. All rights reserved.
        </p>

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
              className="text-text-secondary hover:text-brand-purple transition-colors"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
