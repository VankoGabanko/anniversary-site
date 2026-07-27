import type { PropsWithChildren } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

type GoldButtonProps = PropsWithChildren<HTMLMotionProps<'button'>>

export function GoldButton({ children, className = '', ...props }: GoldButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      className={`focus-ring group relative overflow-hidden border border-[#c9a75d]/55 bg-[#0a0807]/60 px-7 py-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#e7d3a4] backdrop-blur-md transition-colors hover:border-[#e4c67e] hover:text-[#fff7e8] ${className}`}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#c9a75d]/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
    </motion.button>
  )
}
