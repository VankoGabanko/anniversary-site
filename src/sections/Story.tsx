import { motion } from 'framer-motion'
import { storyLines } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Story() {
  return (
    <section id="our-story" className="section-space overflow-hidden">
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#68212a]/35 to-transparent" />
      <div className="page-shell relative">
        <div className="max-w-2xl">
          <SectionHeading eyebrow="Chapter I" title="Before there was us." />
        </div>
        <div className="mx-auto mt-20 max-w-3xl sm:mt-28">
          {storyLines.map((line, index) => {
            const pivotal = index >= 9
            return (
              <motion.p
                key={line}
                initial={{ opacity: 0.08, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.75 }}
                transition={{ duration: 0.7 }}
                className={`serif my-0 min-h-[5.5rem] text-center text-[clamp(1.65rem,5.2vw,3.2rem)] leading-[1.15] tracking-[-0.025em] ${
                  pivotal ? 'italic text-[#e4ca8d]' : 'text-[#d7d0c6]'
                }`}
              >
                {line}
              </motion.p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
