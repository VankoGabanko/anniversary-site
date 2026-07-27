import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from 'react-icons/fi'
import { galleryImages } from '../data/content'
import { SectionHeading } from '../components/SectionHeading'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (activeIndex === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex((current) => current === null ? 0 : (current + 1) % galleryImages.length)
      if (event.key === 'ArrowLeft') setActiveIndex((current) => current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [activeIndex])

  const move = (direction: number) => {
    setActiveIndex((current) => current === null ? 0 : (current + direction + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading eyebrow="Chapter III" title="Little pieces of forever." />
        <p className="mt-7 max-w-lg text-sm font-light leading-7 text-[#958e85]">
          Photo placeholders for now. Soon, every frame here will be one of ours.
        </p>
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={`${image.caption}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.08 }}
              className="focus-ring group relative mb-4 block w-full overflow-hidden bg-[#130a0b] text-left"
              aria-label={`Open ${image.caption} in fullscreen`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`${image.className} w-full object-cover transition duration-1000 group-hover:scale-[1.04] ${
                  index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square'
                }`}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                <span className="serif text-xl italic text-[#eee5d8]">{image.caption}</span>
                <FiMaximize2 className="text-[#c9a75d] opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen gallery"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null)
            }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="focus-ring absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-black/40 p-3 text-[#e6ded3]"
              aria-label="Close gallery"
              autoFocus
            >
              <FiX size={20} />
            </button>
            <button
              type="button"
              onClick={() => move(-1)}
              className="focus-ring absolute left-3 z-10 rounded-full border border-white/10 bg-black/40 p-3 text-[#e6ded3] sm:left-8"
              aria-label="Previous photo"
            >
              <FiChevronLeft size={24} />
            </button>
            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45 }}
              className="m-0 max-h-[88vh] max-w-5xl"
            >
              <img
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                className={`${galleryImages[activeIndex].className} max-h-[78vh] w-full object-contain`}
              />
              <figcaption className="serif mt-5 text-center text-xl italic text-[#c9a75d]">
                {galleryImages[activeIndex].caption}
              </figcaption>
            </motion.figure>
            <button
              type="button"
              onClick={() => move(1)}
              className="focus-ring absolute right-3 z-10 rounded-full border border-white/10 bg-black/40 p-3 text-[#e6ded3] sm:right-8"
              aria-label="Next photo"
            >
              <FiChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
