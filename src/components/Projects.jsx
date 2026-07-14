import { Github, ArrowRight, Sparkles } from 'lucide-react'
import { projects } from '../data/portfolioData'

function ProjectCard({ project }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
      <div className="h-44 bg-bg-surface overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-base mb-2">{project.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-bg-surface border border-border text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-brand-purple transition-colors"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-brand-gradient text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Live Demo <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="flex items-center gap-2 font-display font-bold text-xl">
          <Sparkles size={20} className="text-brand-purple" />
          Featured Projects
        </h2>
        <a
          href={`https://github.com/AkhtarAli945`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border hover:border-brand-purple transition-colors"
        >
          View All Projects <ArrowRight size={15} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
