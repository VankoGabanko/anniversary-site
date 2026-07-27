import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import heroImage from '../assets/images/cinematic-placeholder.png'
import { GoldButton } from '../components/GoldButton'

export function Hero() {
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 900], [0, 170])
  const contentY = useTransform(scrollY, [0, 700], [0, 100])
  const opacity = useTransform(scrollY, [0, 650], [1, 0])

  const beginStory = () => {
    document.querySelector('#our-story')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#050505]">
      <motion.img
        style={{ y: backgroundY, scale: 1.08 }}
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center opacity-70"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.22)_0%,rgba(4,3,3,.42)_38%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(0,0,0,.18)_42%,rgba(0,0,0,.72)_100%)]" />
      <div className="film-grain" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="page-shell relative z-10 pb-[max(4.5rem,8vh)] text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mb-5 text-[0.62rem] uppercase tracking-[0.42em] text-[#c8b996]"
        >
          27 June 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
          className="serif m-0 text-[clamp(4.1rem,17vw,9.5rem)] font-normal leading-[0.82] tracking-[-0.055em] text-[#f7f1e8]"
        >
          To Moni <span className="inline-block text-[0.55em] text-[#8e1b28]">♥</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="serif mx-auto mt-8 max-w-lg text-xl font-normal italic leading-relaxed text-[#d4cdc2] sm:text-2xl"
        >
          One month down.
          <br />
          A lifetime to go.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="mt-10"
        >
          <GoldButton onClick={beginStory}>Begin Our Story</GoldButton>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-[#c9a75d]/70"
        aria-hidden="true"
      >
        <FiArrowDown />
      </motion.div>
    </section>
  )
}
