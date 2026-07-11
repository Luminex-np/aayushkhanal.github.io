import ScrollReveal from './ScrollReveal'
import SectionDivider from './SectionDivider'
import { portfolioData } from '../data/portfolio'

const skillIcons: Record<string, React.ReactNode> = {
  technical: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  cfd: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  design: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <path d="M12 15V3m0 12l-3-3m3 3l3-3M3 21h18" />
    </svg>
  ),
  programming: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  tools: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  soft: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
}

export default function About() {
  const { about, skills } = portfolioData

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm mb-2 tracking-[0.2em]">ABOUT</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            <span className="text-gradient">About Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <ScrollReveal>
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-4 h-full">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-white/60 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
              <div className="pt-4 space-y-2 text-sm text-white/50">
                <p>
                  <span className="text-accent">Location:</span> {about.location}
                </p>
                <p>
                  <span className="text-accent">Email:</span>{' '}
                  <a href={`mailto:${about.email}`} className="hover:text-accent transition-colors">
                    {about.email}
                  </a>
                </p>
                <p>
                  <span className="text-accent">Phone:</span> {about.phone}
                </p>
              </div>
              <div className="flex gap-3 pt-2 flex-wrap">
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-lg px-4 py-2 text-sm text-white/60 hover:text-accent hover:border-accent/30 transition-all"
                >
                  LinkedIn
                </a>
                {about.github && (
                  <a
                    href={`https://github.com/${about.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-lg px-4 py-2 text-sm text-white/60 hover:text-accent hover:border-accent/30 transition-all"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-lg font-semibold text-white mb-6">Education</h3>
              <div className="space-y-0">
                {[...about.education].reverse().map((edu, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/[0.02]">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-white font-medium text-sm sm:text-base leading-snug">{edu.degree}</h4>
                          <span className="shrink-0 text-[10px] sm:text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full border border-white/5 whitespace-nowrap">{edu.period}</span>
                        </div>
                        <p className="text-white/50 text-xs sm:text-sm mt-0.5">{edu.school}</p>
                        <p className="text-white/30 text-xs mt-1">
                          {edu.percentage ? `Cumulative Percentage: ${edu.percentage}` : ''}
                          {edu.cgpa ? `CGPA: ${edu.cgpa}` : ''}
                          {edu.gpa ? `GPA: ${edu.gpa}` : ''}
                        </p>
                      </div>
                    </div>
                    {i < about.education.length - 1 && (
                      <div className="relative my-4 ml-14">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-white/5" />
                        </div>
                        <div className="relative flex justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/20" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <h3 className="text-lg font-semibold text-white mb-6">Skills</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {Object.entries(skills).map(([key, items]) => (
            <div key={key} className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/[0.02] h-full">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                {skillIcons[key]}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium text-sm sm:text-base capitalize leading-snug mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(items as string[]).map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-white/60 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {portfolioData.certificates.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02]"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/80 text-sm sm:text-base font-medium">
                      {cert.name}
                      {cert.id && <span className="text-white/30 font-normal"> — {cert.id}</span>}
                    </p>
                    {cert.detail && (
                      <p className="text-white/30 text-xs mt-0.5">{cert.detail}</p>
                    )}
                  </div>
                  {(cert as { url?: string }).url && (
                    <a
                      href={(cert as { url: string }).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-3 py-1.5 text-xs text-accent bg-accent/10 border border-accent/20 rounded-lg hover:bg-accent/20 transition-all"
                    >
                      View
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
