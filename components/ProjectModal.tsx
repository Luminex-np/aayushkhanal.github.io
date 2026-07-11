import { useState } from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface Project {
  title: string
  tools: string[]
  period: string
  points: string[]
  videoPlaceholder?: boolean
  images?: string[]
}

interface Props {
  project: Project
  onClose: () => void
}

const BASE_PATH = '/aayushkhanal.github.io'

export default function ProjectModal({ project, onClose }: Props) {
  const [currentImage, setCurrentImage] = useState(0)
  const images = project.images || []
  const hasImages = images.length > 0

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setCurrentImage((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setCurrentImage((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, images.length])

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
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all z-20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-white/30 font-mono">{project.period}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 pr-8">
          {project.title}
        </h2>

        <div className="mb-6 aspect-video glass rounded-xl relative overflow-hidden">
          {hasImages ? (
            <>
              <img
                src={`${BASE_PATH}/images/projects/${images[currentImage]}`}
                alt={`${project.title} - ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImage((i) => (i - 1 + images.length) % images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white/60 hover:text-white transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentImage((i) => (i + 1) % images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white/60 hover:text-white transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          i === currentImage ? 'bg-accent w-3' : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent/40 mx-auto mb-3"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <p className="text-white/30 text-sm">Screenshot coming soon</p>
              </div>
            </div>
          )}
        </div>

        <ul className="space-y-3 mb-6">
          {project.points.map((point, i) => (
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
          {project.tools.map((tool) => (
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
