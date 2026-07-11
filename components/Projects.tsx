import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'
import ProjectModal from './ProjectModal'
import SectionDivider from './SectionDivider'

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm mb-2 tracking-[0.2em]">PROJECTS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioData.projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <button
                onClick={() => setSelected(i)}
                className="glass rounded-2xl p-5 sm:p-6 glass-hover text-left w-full h-full flex flex-col group relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent/60 shrink-0" />
                  <span className="text-xs text-white/30 font-mono">{project.period}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug min-h-[3rem]">
                  {project.title}
                </h3>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {project.points.slice(0, 2).map((point, j) => (
                    <li key={j} className="text-xs sm:text-sm text-white/40 leading-relaxed line-clamp-2">
                      {point}
                    </li>
                  ))}
                  {project.points.length > 2 && (
                    <li className="text-xs text-accent/60">+{project.points.length - 2} more</li>
                  )}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 bg-white/5 rounded text-[10px] sm:text-xs text-white/40 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {project.videoPlaceholder && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-accent/50">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Click to view details
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10 rounded-2xl">
                  <div className="w-14 h-14 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent ml-0.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <ProjectModal
            project={portfolioData.projects[selected]}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
