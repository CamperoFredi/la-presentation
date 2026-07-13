'use client'

import { motion } from 'motion/react'
import { MapPin, Star, Sun } from 'lucide-react'
import { easeOut, lineReveal, riseIn, stagger } from '@/lib/motion'

export function TitleSlide() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  return (
    <section className="relative flex min-h-dvh w-full items-end justify-start overflow-hidden py-12">
      {/* Background image with slow zoom */}
      <motion.img
        src={`${basePath}/la-palms.png`}
        alt="Los Angeles palm trees against a sunset sky"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{scale: 1.15, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 1.6, ease: easeOut}}
      />
      {/* Warm cinematic overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,var(--coral)/25,transparent_60%)]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative w-full px-5 pb-6 sm:px-8 md:px-16 md:pb-16 lg:px-24"
      >
        <motion.div
          variants={riseIn}
          className="text-zinc-200 font-bold flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] sm:tracking-[0.32em]"
        >
          <Sun className="size-4 shrink-0" />
          California · United States
        </motion.div>

        <h1 className="mt-4 font-display text-[clamp(3.5rem,13vw,11rem)] font-extrabold leading-[0.85] tracking-tighter text-foreground sm:mt-6">
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} className="block">
              Los
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={lineReveal}
              className="block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            >
              Angeles
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={riseIn}
          className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-8 md:text-lg"
        >
          The City of Angels. Entertainment capital of the world, melting pot of
          cultures, and home to the West Coast's most famous sunset.
        </motion.p>

        <motion.div
          variants={riseIn}
          className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 md:mt-10"
        >
          {[
            {icon: MapPin, label: "34.05° N, 118.24° W"},
            {icon: Star, label: "Founded in 1781"},
            {icon: Sun, label: "284 sunny days / year"},
          ].map(({icon: Icon, label}) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-card-foreground backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
            >
              <Icon className="size-3.5 text-accent sm:size-4" />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}