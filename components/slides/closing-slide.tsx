'use client'

import { motion } from 'motion/react'
import { easeOut, lineReveal, riseIn, stagger } from '@/lib/motion'

export function ClosingSlide() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <motion.img
        src={`${basePath}/la-beach.png`}
        alt="Sunset over the Los Angeles coastline"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{scale: 1.15}}
        animate={{scale: 1}}
        transition={{duration: 2, ease: easeOut}}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_100%,var(--coral)/30,transparent_65%)]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center px-4 text-center sm:px-6"
      >
        <motion.p
          variants={riseIn}
          className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent sm:text-xs sm:tracking-[0.4em]"
        >
          Thank you for watching
        </motion.p>
        <h2 className="mt-3 font-display text-4xl font-extrabold leading-none tracking-tighter sm:mt-6 sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} className="block">
              See you
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={lineReveal}
              className="block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              in CALIFORNIA
            </motion.span>
          </span>
        </h2>
        <motion.p
          variants={riseIn}
          className="mt-4 max-w-md text-pretty text-xs leading-relaxed text-muted-foreground sm:mt-8 sm:text-base"
        >
          A city of dreams, palm trees, and endless sunsets where every
          neighborhood tells its own story.
        </motion.p>
      </motion.div>
    </section>
  );
}