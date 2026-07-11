import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-mono text-sm mb-4 tracking-[0.2em]">404</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
            Lost in <span className="text-gradient">Space</span>
          </h1>
          <p className="text-white/40 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on course.
          </p>
          <Link
            href="/"
            className="inline-flex px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-xl font-medium text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
