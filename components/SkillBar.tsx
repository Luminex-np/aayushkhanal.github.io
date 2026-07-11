import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  name: string
  level: number
  delay?: number
}

export default function SkillBar({ name, level, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-white/60">{name}</span>
        <span className="text-accent/60 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full"
        />
      </div>
    </div>
  )
}
