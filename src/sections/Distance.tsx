import { motion } from 'framer-motion'

export function Distance() {
  return (
    <section className="relative flex min-h-[86svh] items-center justify-center overflow-hidden px-6 py-24 text-center">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#7f1723]/40 to-transparent"
      />
      <div className="relative max-w-4xl bg-[#050505] px-3 py-12 sm:px-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="serif m-0 text-[clamp(2.7rem,8vw,6.2rem)] font-normal leading-[1.03] tracking-[-0.04em] text-[#eee6db]"
        >
          The hardest part isn’t the distance.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="serif mt-8 text-[clamp(1.45rem,4vw,2.6rem)] italic leading-snug text-[#c9a75d]"
        >
          It’s not being able to hug you whenever I want.
        </motion.p>
      </div>
    </section>
  )
}
