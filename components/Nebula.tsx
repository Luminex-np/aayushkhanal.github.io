import { motion } from 'framer-motion'

const clouds = [
  { size: 600, x: '15%', y: '15%', color: '#22d3ee', delay: 0, scale: [1, 1.1, 1] },
  { size: 450, x: '75%', y: '25%', color: '#a78bfa', delay: 2, scale: [1, 1.08, 1] },
  { size: 350, x: '50%', y: '60%', color: '#22d3ee', delay: 4, scale: [1, 1.12, 1] },
  { size: 500, x: '25%', y: '70%', color: '#67e8f9', delay: 1, scale: [1, 1.05, 1] },
]

export default function Nebula() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {clouds.map((cloud, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: cloud.size,
            height: cloud.size,
            left: cloud.x,
            top: cloud.y,
            marginLeft: -cloud.size / 2,
            marginTop: -cloud.size / 2,
            background: `radial-gradient(circle, ${cloud.color} 0%, transparent 70%)`,
            filter: 'blur(120px)',
          }}
          animate={{
            y: [0, -20, 0],
            scale: cloud.scale,
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10 + cloud.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: cloud.delay,
          }}
        />
      ))}
    </div>
  )
}
