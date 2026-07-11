import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import Streamlines from './Streamlines'

function FloatingShape({ className, delay, style }: { className: string; delay: number; style?: React.CSSProperties }) {
  return (
    <motion.div
      style={style}
      className={`absolute ${className}`}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 10, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const fullTitle = portfolioData.title
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 150])

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
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-transparent to-[#0a0a0f]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </motion.div>

      <Streamlines />

      <FloatingShape
        className="top-[15%] left-[10%] w-16 h-16 border border-accent/10 rounded-lg"
        delay={0}
      />
      <FloatingShape
        className="top-[25%] right-[12%] w-12 h-12 border border-accent/10 rounded-full"
        delay={1.5}
      />
      <FloatingShape
        className="bottom-[20%] left-[15%] w-10 h-10 border border-accent/10"
        style={{ transform: 'rotate(45deg)' }}
        delay={3}
      />
      <FloatingShape
        className="bottom-[30%] right-[10%] w-14 h-14 border border-accent/10 rounded-lg"
        delay={2.5}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-accent font-mono text-sm sm:text-base mb-4 tracking-[0.2em]">
            {portfolioData.tagline}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-tight"
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
            className="group px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-xl font-medium text-sm hover:bg-accent/20 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
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
    </section>
  )
}
