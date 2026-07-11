import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setSent(true)
    } catch {
      /* will handle gracefully */
    }
    setLoading(false)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <p className="text-accent font-medium text-sm">Message sent successfully!</p>
        <p className="text-white/40 text-xs mt-1">I&apos;ll get back to you soon.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:border-accent/30 focus:bg-white/[0.07] transition-all"
      />
      <input
        type="email"
        name="_replyto"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:border-accent/30 focus:bg-white/[0.07] transition-all"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={3}
        required
        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:border-accent/30 focus:bg-white/[0.07] transition-all resize-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2.5 bg-accent/10 border border-accent/30 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-all disabled:opacity-40"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
