'use client'

import { motion } from 'motion/react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const timeline = [
  {
    year: '1781',
    title: 'El Pueblo',
    text: 'Spanish settlers found "El Pueblo de Nuestra Señora la Reina de los Ángeles."',
  },
  {
    year: '1848',
    title: 'U.S. Territory',
    text: 'Following the Mexican–American War, California becomes part of the United States.',
  },
  {
    year: '1910s',
    title: 'Hollywood is Born',
    text: 'The film industry establishes roots in L.A., turning it into the global entertainment capital.',
  },
  {
    year: '1984',
    title: 'Olympic Legacy',
    text: 'The city shines on the global stage for the second time; set to host again in 2028.',
  },
]

export function HistorySlide() {
  return (
    <Slide>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
        <div>
          <Kicker>02 — History</Kicker>
          
          <MaskHeadline
            className="mt-3 text-3xl sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
            lines={['From pueblo', 'to megacity']}
          />
          
          <Rise className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            In little over two centuries, a small Spanish settlement transformed
            into one of the most influential cities on the planet.
          </Rise>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8">
          <motion.span
            className="absolute left-0.75 top-2 w-px bg-linear-to-b from-accent via-primary to-transparent sm:left-1.5"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.1, ease: easeOut, delay: 0.4 }}
          />
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.15, duration: 0.6, ease: easeOut }}
                className="relative"
              >
                <span className="absolute -left-5.75 top-1.5 size-2.5 rounded-full border-2 border-accent bg-background sm:-left-8 sm:size-3" />
                <div className="font-display text-xl font-bold text-accent sm:text-2xl">
                  {item.year}
                </div>
                <div className="mt-0.5 font-display text-base font-semibold text-foreground sm:text-lg">
                  {item.title}
                </div>
                <p className="mt-0.5 max-w-md text-xs leading-relaxed text-muted-foreground sm:mt-1 sm:text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}