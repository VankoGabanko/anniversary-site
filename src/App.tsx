import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { LoadingScreen } from './sections/LoadingScreen'
import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Timeline } from './sections/Timeline'
import { Gallery } from './sections/Gallery'
import { Reasons } from './sections/Reasons'
import { Distance } from './sections/Distance'
import { Countdown } from './sections/Countdown'
import { Letter } from './sections/Letter'
import { FinalSection } from './sections/FinalSection'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2600)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <main key="story">
            <Hero />
            <Story />
            <Timeline />
            <Gallery />
            <Reasons />
            <Distance />
            <Countdown />
            <Letter />
            <FinalSection />
          </main>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}

export default App
