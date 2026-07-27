import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#030303]"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      aria-label="Loading our story"
      role="status"
    >
      <div className="film-grain" />
      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="serif mx-auto mb-5 flex size-24 items-center justify-center rounded-full border border-[#c9a75d]/30 text-4xl italic text-[#d8bc7d]"
        >
          I<span className="mx-1 text-lg text-[#7d1723]">♥</span>M
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="m-0 text-[0.62rem] uppercase tracking-[0.42em] text-[#938b80]"
        >
          Our story
        </motion.p>
        <motion.div
          className="mx-auto mt-7 h-px w-32 origin-left bg-gradient-to-r from-[#7c1521] to-[#d0b06b]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
