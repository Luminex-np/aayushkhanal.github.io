import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo('hero')}
          className="text-accent font-mono text-lg font-bold tracking-tight hover:text-accent-light transition-colors"
        >
          AK<span className="text-white/30">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-accent'
                  : 'text-white/50 hover:text-white/80'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-accent/5 border border-accent/20 rounded-lg"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-white/70"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-[2px] bg-current transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-current transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-current transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollTo(tab.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'text-accent bg-accent/5'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
