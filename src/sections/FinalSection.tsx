import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiPause, FiPlay, FiVolume2 } from 'react-icons/fi'
import { GoldButton } from '../components/GoldButton'
import { SurpriseCanvas } from '../components/SurpriseCanvas'
import ourSong from '../assets/music/Andeeno Damassy feat. Jimmy Dub - Ese Amor (Official Music Video).mp3'

export function FinalSection() {
  const [revealed, setRevealed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const fadeFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    return () => {
      if (fadeFrameRef.current !== null) {
        window.cancelAnimationFrame(fadeFrameRef.current)
      }
      audio?.pause()
    }
  }, [])

  const fadeIn = (audio: HTMLAudioElement) => {
    const startedAt = performance.now()
    const fadeDuration = 3500
    const targetVolume = 0.72

    const updateVolume = (time: number) => {
      const progress = Math.min((time - startedAt) / fadeDuration, 1)
      audio.volume = targetVolume * progress
      if (progress < 1) {
        fadeFrameRef.current = window.requestAnimationFrame(updateVolume)
      }
    }

    fadeFrameRef.current = window.requestAnimationFrame(updateVolume)
  }

  const revealSurprise = () => {
    setRevealed(true)
    setAudioError(false)

    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = 58
    audio.volume = 0
    void audio
      .play()
      .then(() => {
        setIsPlaying(true)
        fadeIn(audio)
      })
      .catch(() => {
        setAudioError(true)
        setIsPlaying(false)
      })
  }

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      setAudioError(false)
      void audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setAudioError(true))
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black px-6 py-24 text-center">
      <audio
        ref={audioRef}
        src={ourSong}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        aria-label="Ese Amor by Andeeno Damassy featuring Jimmy Dub"
      />
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
            <GoldButton onClick={revealSurprise} aria-label="Reveal one last surprise and play our song">
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
            <motion.button
              type="button"
              onClick={togglePlayback}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="focus-ring absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-[#c9a75d]/25 bg-black/45 px-4 py-3 text-[0.58rem] uppercase tracking-[0.2em] text-[#d9c38e] backdrop-blur-md transition-colors hover:border-[#c9a75d]/55"
              aria-label={isPlaying ? 'Pause our song' : 'Play our song'}
            >
              <FiVolume2 aria-hidden="true" />
              {isPlaying ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
            </motion.button>
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
                <p className="text-[0.63rem] uppercase tracking-[0.36em] text-[#b7aa91]">Happy One Month</p>
                <p className="mt-4 text-4xl text-[#981d2b]">♥</p>
              </motion.div>
              {audioError && (
                <p className="mt-6 text-xs tracking-wide text-[#a99f90]">
                  Press Play to start the music.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
