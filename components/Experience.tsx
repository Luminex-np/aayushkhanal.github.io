import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'
import SectionDivider from './SectionDivider'
import ExperienceModal from './ExperienceModal'

export default function Experience() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="experience" className="relative py-16 px-4 sm:px-6">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            <span className="text-gradient">Experience</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <button
                onClick={() => setSelected(i)}
                className="glass rounded-2xl p-6 sm:p-8 glass-hover text-left w-full"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-right text-xs sm:text-sm text-white/30 whitespace-nowrap">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.points.slice(0, 2).map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                  {exp.points.length > 2 && (
                    <li className="text-xs text-accent/60">+{exp.points.length - 2} more</li>
                  )}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-accent/5 border border-accent/10 rounded-lg text-xs text-accent/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <ExperienceModal
            experience={portfolioData.experience[selected]}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
