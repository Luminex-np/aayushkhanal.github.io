import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const fullTitle = portfolioData.title

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(fullTitle.slice(0, i + 1))
      i++
      if (i >= fullTitle.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-[#0a0a0f]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-accent font-mono text-sm sm:text-base mb-4 tracking-widest">
            {portfolioData.tagline}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">{portfolioData.name.split(' ')[0]}</span>{' '}
          <span className="text-gradient">{portfolioData.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="h-8 sm:h-10 mb-6"
        >
          <span className="text-lg sm:text-2xl text-white/60 font-mono">
            {displayed}
            <span className="animate-pulse text-accent">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-white/40 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {portfolioData.heroSummary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4"
        >
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-xl font-medium text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-6 py-3 bg-white/5 border border-white/10 text-white/70 rounded-xl font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            About Me
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
