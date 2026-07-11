import { portfolioData } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'
import SectionDivider from './SectionDivider'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm mb-2 tracking-[0.2em]">EXPERIENCE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Where I&apos;ve <span className="text-gradient">Worked</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="glass rounded-2xl p-6 sm:p-8 glass-hover">
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
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
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
              </div>
            </ScrollReveal>
          ))}
        </div>

        {portfolioData.miscellaneous.length > 0 && (
          <>
            <ScrollReveal>
              <h3 className="text-xl font-semibold text-white mt-16 mb-6">
                Miscellaneous
              </h3>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {portfolioData.miscellaneous.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="glass rounded-xl p-5 glass-hover h-full">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/40 text-xs mt-1">{item.description}</p>
                    <p className="text-white/20 text-xs mt-2">{item.period}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
