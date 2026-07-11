import ScrollReveal from './ScrollReveal'
import SectionDivider from './SectionDivider'
import { portfolioData } from '../data/portfolio'

export default function About() {
  const { about, skills } = portfolioData

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm mb-2 tracking-[0.2em]">ABOUT</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            More <span className="text-gradient">About Me</span>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          <SkillCard title="Technical Skills" items={skills.technical} />
          <SkillCard title="CFD Tools" items={skills.cfd} />
          <SkillCard title="Design Tools" items={skills.design} />
          <SkillCard title="Programming" items={skills.programming} />
          <SkillCard title="Documentation & Tools" items={skills.tools} />
          <SkillCard title="Soft Skills" items={skills.soft} />
        </div>

        <ScrollReveal>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {portfolioData.certificates.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-white/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                  <span>
                    {cert.name}
                    {cert.id && <span className="text-white/30"> — {cert.id}</span>}
                    {cert.detail && <span className="text-white/30"> — {cert.detail}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass rounded-2xl p-5 h-full">
      <h4 className="text-accent font-mono text-xs tracking-widest mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-white/60 border border-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
