import type { Variants } from 'motion/react'

// Springy, editorial easing used across the deck
export const easeOut = [0.16, 1, 0.3, 1] as const

// Container that staggers its children in
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

// Standard rise-and-fade for text blocks
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
}

// Mask-style reveal for large headlines
export const lineReveal: Variants = {
  hidden: { opacity: 0, y: '110%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.9, ease: easeOut },
  },
}

// Scale-in for cards / media
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

// Slide-to-slide transition (direction-aware)
export const slideTransition = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 80 : -80,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    scale: 0.98,
    transition: { duration: 0.45, ease: easeOut },
  }),
}
