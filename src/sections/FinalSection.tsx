import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GoldButton } from '../components/GoldButton'
import { SurpriseCanvas } from '../components/SurpriseCanvas'

export function FinalSection() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black px-6 py-24 text-center">
      <div className="film-grain" />
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.9 }}
            className="relative z-10"
          >
            <p className="serif mb-8 text-2xl italic text-[#8d867e]">There’s just one more thing.</p>
            <GoldButton onClick={() => setRevealed(true)} aria-label="Reveal one last surprise">
              One Last Surprise
            </GoldButton>
          </motion.div>
        ) : (
          <motion.div
            key="surprise"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ backgroundColor: '#000000', opacity: 0 }}
            animate={{ backgroundColor: '#030202', opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <SurpriseCanvas />
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-4xl px-6"
            >
              <p className="serif m-0 text-[clamp(2rem,6.4vw,4.8rem)] leading-[1.12] tracking-[-0.035em] text-[#f2eadf]">
                No matter how many countries separate us...
              </p>
              <p className="serif mx-auto mt-7 max-w-3xl text-[clamp(1.5rem,4vw,3rem)] italic leading-snug text-[#d3b970]">
                my heart somehow always knows exactly where home is.
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.1 }}
                className="serif mt-10 text-[clamp(2.2rem,6vw,4.5rem)] text-[#f7efe3]"
              >
                Home is wherever you are.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.1, duration: 1 }}
                className="mt-12"
              >
                <p className="text-[0.63rem] uppercase tracking-[0.36em] text-[#b7aa91]">Happy Anniversary</p>
                <p className="mt-4 text-4xl text-[#981d2b]">♥</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
