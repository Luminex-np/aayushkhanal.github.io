import { motion } from 'framer-motion'

const flows = [
  { d: 'M-100,150 C 200,120 400,180 700,150 C 1000,120 1300,170 1600,140', w: 0.6 },
  { d: 'M-100,280 C 250,250 500,310 800,280 C 1100,250 1400,300 1600,270', w: 0.9 },
  { d: 'M-100,400 C 300,370 550,430 850,400 C 1150,370 1450,420 1600,390', w: 1.3 },
  { d: 'M-100,520 C 350,550 600,490 900,520 C 1200,550 1500,500 1600,530', w: 1.6 },
  { d: 'M-100,650 C 400,620 650,680 950,650 C 1250,620 1550,670 1600,640', w: 2.0 },
]

export default function Streamlines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full opacity-[0.12]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="streamGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {flows.map((flow, i) => (
          <motion.path
            key={i}
            d={flow.d}
            stroke="url(#streamGrad)"
            strokeWidth={flow.w}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: i * 0.35, ease: 'easeInOut' }}
          />
        ))}
      </svg>
    </div>
  )
}
