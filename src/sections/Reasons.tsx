import { motion } from 'framer-motion'
import { reasons } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Reasons() {
  return (
    <section className="section-space overflow-hidden bg-[#070606]">
      <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a0d18]/10 blur-[140px]" />
      <div className="page-shell relative">
        <SectionHeading eyebrow="Chapter IV" title="Why you." align="center" />
        <div className="mx-auto mt-16 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, borderColor: 'rgba(201,167,93,.35)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.06 }}
              className={`group flex min-h-44 flex-col justify-between border border-white/[0.06] bg-white/[0.018] p-6 ${
                index === 7 || index === 9 ? 'lg:col-span-2' : ''
              }`}
            >
              <span className="serif text-sm italic text-[#c9a75d]/55">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="serif m-0 max-w-xl text-2xl font-normal leading-tight text-[#e7ded2] transition-colors group-hover:text-[#f6ecd9] sm:text-3xl">
                {reason}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
