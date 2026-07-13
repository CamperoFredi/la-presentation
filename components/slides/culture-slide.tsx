'use client'

import { motion } from 'motion/react'
import { Clapperboard, Music, Palette, Trophy } from 'lucide-react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const pillars = [
  { icon: Clapperboard, title: 'Film', text: 'Hollywood, the Academy Awards, and the epicenter of world cinema.' },
  { icon: Music, title: 'Music', text: 'Birthplace of West Coast hip-hop and the iconic surf rock sound.' },
  { icon: Palette, title: 'Art', text: 'LACMA, The Broad, and murals bringing every neighborhood to life.' },
  { icon: Trophy, title: 'Sports', text: 'Lakers, Dodgers, and an endless championship sports fever.' },
]

const marquee = ['Hollywood', '•', 'Hip-Hop', '•', 'Surf', '•', 'Street Art', '•', 'Oscars', '•', 'Lakers', '•']

export function CultureSlide() {
  return (
    <Slide className="justify-start pt-10 sm:pt-16 md:justify-center md:pt-20">
      <Kicker>04 — Culture</Kicker>

      <MaskHeadline
        className="mt-3 text-3xl sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
        lines={['The global capital', 'of pop culture']}
      />

      <Rise className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
        What happens in Los Angeles sets trends for the entire planet: from film
        and music to street art and world-class athletics.
      </Rise>

      <div className="mt-5 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: easeOut }}
            className="rounded-2xl border border-border bg-card/60 p-3.5 backdrop-blur-sm sm:p-5"
          >
            <Icon className="size-5 text-accent sm:size-6" />
            <div className="mt-2 font-display text-lg font-semibold sm:mt-4 sm:text-xl">
              {title}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
              {text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none mt-5 flex overflow-hidden opacity-90 sm:mt-10 md:mt-12">
        <motion.div
          className="flex shrink-0 items-center gap-4 pr-4 font-display text-xl font-bold uppercase tracking-tight text-primary/80 sm:gap-6 sm:pr-6 sm:text-3xl md:text-5xl"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
        >
          {[...marquee, ...marquee].map((word, i) => (
            <span key={i} className={word === '•' ? 'text-accent' : undefined}>
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </Slide>
  )
}