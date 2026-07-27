import { motion } from 'framer-motion'
import { timelineEvents } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Timeline() {
  return (
    <section className="section-space bg-[linear-gradient(180deg,transparent,rgba(73,11,19,.11),transparent)]">
      <div className="page-shell">
        <SectionHeading eyebrow="Chapter II" title="The moments that made us." />
        <div className="relative mt-20 sm:mt-28">
          <div className="absolute bottom-0 left-[0.43rem] top-0 w-px bg-gradient-to-b from-[#c9a75d]/55 via-[#73202a]/65 to-transparent md:left-1/2" />
          <div className="space-y-8 md:space-y-2">
            {timelineEvents.map((event, index) => {
              const left = index % 2 === 0
              return (
                <motion.article
                  key={event.title}
                  initial={{ opacity: 0, x: left ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-12%' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid items-center pl-10 md:min-h-44 md:grid-cols-2 md:pl-0 ${left ? '' : ''}`}
                >
                  <div className="absolute left-0 top-8 size-3 rounded-full border border-[#d6b76c] bg-[#080606] shadow-[0_0_0_6px_rgba(201,167,93,.06),0_0_20px_rgba(201,167,93,.2)] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2" />
                  <div
                    className={`rounded-sm border border-white/[0.07] bg-[linear-gradient(145deg,rgba(255,255,255,.045),rgba(91,15,24,.045))] p-6 shadow-[0_22px_70px_rgba(0,0,0,.28)] backdrop-blur-sm sm:p-8 ${
                      left ? 'md:mr-14' : 'md:col-start-2 md:ml-14'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="eyebrow !mb-3">{String(index + 1).padStart(2, '0')}</p>
                        <h3 className="serif m-0 text-3xl font-normal text-[#eee6da] sm:text-4xl">{event.title}</h3>
                        <p className="mt-3 text-sm font-light leading-relaxed text-[#9f978d]">{event.caption}</p>
                      </div>
                      {event.year && (
                        <span className="serif text-lg italic text-[#c9a75d]/55">{event.year}</span>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
