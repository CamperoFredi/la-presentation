'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { lineReveal, riseIn, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'

/** Full-bleed slide wrapper. */
export function Slide({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className={cn(
        'relative flex h-full w-full flex-col justify-center overflow-hidden px-6 py-20 md:px-16 lg:px-24',
        className,
      )}
    >
      {children}
    </motion.section>
  )
}

/** Small uppercase tag with a leading rule. */
export function Kicker({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={riseIn}
      className={cn(
        'flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-accent',
        className,
      )}
    >
      <span className="h-px w-8 bg-accent/70" />
      {children}
    </motion.div>
  )
}

/** Headline with per-line mask reveal. Pass an array of lines. */
export function MaskHeadline({
  lines,
  className,
}: {
  lines: string[]
  className?: string
}) {
  return (
    <h2
      className={cn(
        'font-display font-bold leading-[0.95] tracking-tight text-balance',
        className,
      )}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden py-[0.05em]">
          <motion.span variants={lineReveal} className="block">
            {line}
          </motion.span>
        </span>
      ))}
    </h2>
  )
}

/** Simple rise-in wrapper for arbitrary content. */
export function Rise({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={riseIn} className={className}>
      {children}
    </motion.div>
  )
}
