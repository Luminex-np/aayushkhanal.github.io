import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface Experience {
  role: string
  company: string
  period: string
  location: string
  points: string[]
  tools: string[]
}

interface Props {
  experience: Experience
  onClose: () => void
}

export default function ExperienceModal({ experience, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-white/30 font-mono">{experience.period}</span>
          <span className="text-white/20">·</span>
          <span className="text-xs text-white/30 font-mono">{experience.location}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 pr-8">
          {experience.role}
        </h2>
        <p className="text-accent text-sm mb-6">{experience.company}</p>

        <ul className="space-y-3 mb-6">
          {experience.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
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
          {experience.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 bg-accent/5 border border-accent/10 rounded-lg text-xs text-accent/80"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
