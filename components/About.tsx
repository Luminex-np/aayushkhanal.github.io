import { portfolioData } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'
import SectionDivider from './SectionDivider'

export default function About() {
  const { about, skills } = portfolioData

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm mb-2 tracking-[0.2em]">ABOUT</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            More <span className="text-gradient">About Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
              <div className="flex gap-3 pt-2">
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
              <div className="space-y-6">
                {about.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l border-white/10">
                    <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[5px] rounded-full bg-accent" />
                    <p className="text-white font-medium text-sm sm:text-base">{edu.degree}</p>
                    <p className="text-white/50 text-xs sm:text-sm mt-0.5">{edu.school}</p>
                    <div className="flex gap-3 mt-1 text-xs text-white/30">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                      {edu.percentage && <span>{edu.percentage}</span>}
                      {edu.cgpa && <span>CGPA: {edu.cgpa}</span>}
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
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
                  {cert.link && cert.link !== '#' ? (
                    <a href={cert.link} className="hover:text-accent transition-colors">
                      {cert.name}
                    </a>
                  ) : (
                    <span>
                      {cert.name}
                      {cert.id && <span className="text-white/30"> — {cert.id}</span>}
                      {cert.detail && <span className="text-white/30"> — {cert.detail}</span>}
                    </span>
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

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <ScrollReveal>
      <div className="glass rounded-2xl p-5 glass-hover h-full">
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
    </ScrollReveal>
  )
}
