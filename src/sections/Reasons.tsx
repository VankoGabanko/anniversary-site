import { useState } from 'react'
import { motion } from 'framer-motion'
import { reasons } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

type ReasonCardProps = {
  index: number
  reason: string
}

function ReasonCard({ index, reason }: ReasonCardProps) {
  const [flipped, setFlipped] = useState(false)
  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06 }}
      className={index === 7 || index === 9 ? 'lg:col-span-2' : ''}
    >
      <button
        type="button"
        onClick={() => setFlipped((current) => !current)}
        aria-pressed={flipped}
        aria-label={`${flipped ? 'Hide' : 'Reveal'} reason ${number}`}
        className="focus-ring group block min-h-48 w-full bg-transparent text-left [perspective:1200px]"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-48 w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center border border-white/[0.07] bg-[linear-gradient(145deg,rgba(255,255,255,.035),rgba(91,15,24,.05))] p-6 shadow-[0_22px_70px_rgba(0,0,0,.28)] transition-colors duration-500 group-hover:border-[#c9a75d]/35"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            <span className="serif text-[clamp(4rem,10vw,6.8rem)] font-normal italic leading-none text-[#c9a75d]">
              {number}
            </span>
            <span className="absolute bottom-5 text-[0.55rem] uppercase tracking-[0.25em] text-[#766f67]">
              Tap to reveal
            </span>
          </div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center border border-[#c9a75d]/25 bg-[radial-gradient(circle_at_50%_20%,rgba(111,17,28,.2),rgba(10,8,8,.98)_65%)] p-7 text-center shadow-[0_25px_80px_rgba(0,0,0,.5)]"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <span className="serif mb-4 text-sm italic text-[#c9a75d]/60">{number}</span>
            <h3 className="serif m-0 max-w-xl text-2xl font-normal leading-tight text-[#f1e7d8] sm:text-3xl">
              {reason}
            </h3>
            <span className="absolute bottom-4 text-[0.5rem] uppercase tracking-[0.22em] text-[#6f6962]">
              Tap to close
            </span>
          </div>
        </motion.div>
      </button>
    </motion.article>
  )
}

export function Reasons() {
  return (
    <section className="section-space overflow-hidden bg-[#070606]">
      <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a0d18]/10 blur-[140px]" />
      <div className="page-shell relative">
        <SectionHeading eyebrow="Глава IV" title="Why you." align="center" />
        <div className="mx-auto mt-16 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={reason}
              index={index}
              reason={reason}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
