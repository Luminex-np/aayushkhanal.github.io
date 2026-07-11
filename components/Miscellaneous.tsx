import ScrollReveal from './ScrollReveal'
import SectionDivider from './SectionDivider'
import { portfolioData } from '../data/portfolio'

export default function Miscellaneous() {
  if (portfolioData.miscellaneous.length === 0) return null

  return (
    <section className="relative py-20 px-4 sm:px-6">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            Other <span className="text-gradient">Work</span>
          </h2>
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
      </div>
    </section>
  )
}
