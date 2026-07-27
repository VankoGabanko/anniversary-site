import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

const targetDate = new Date('2026-07-31T00:00:00+03:00').getTime()

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const difference = Math.max(0, targetDate - Date.now())
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => window.clearInterval(interval)
  }, [])

  const values = [
    ['Days', timeLeft.days],
    ['Hours', timeLeft.hours],
    ['Minutes', timeLeft.minutes],
    ['Seconds', timeLeft.seconds],
  ] as const

  return (
    <section className="section-space bg-[radial-gradient(circle_at_50%_50%,rgba(95,14,24,.15),transparent_45%)]">
      <div className="page-shell text-center">
        <SectionHeading eyebrow="Until 31 July 2026" title="Until I see you again." align="center" />
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
          {values.map(([label, value]) => (
            <div key={label} className="bg-[#080707]/95 px-3 py-10 sm:py-14">
              <motion.span
                key={value}
                initial={{ opacity: 0, y: -12, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                className="serif block text-[clamp(3rem,9vw,6rem)] font-normal tabular-nums leading-none text-[#e7d2a1]"
              >
                {String(value).padStart(2, '0')}
              </motion.span>
              <span className="mt-4 block text-[0.58rem] uppercase tracking-[0.27em] text-[#817a72]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
