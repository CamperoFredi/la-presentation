'use client'

import { motion } from 'motion/react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const facts = [
  { value: '3.9M', label: 'city residents' },
  { value: '#2', label: 'most populous US city' },
  { value: '502 sq mi', label: '1,302 km² surface area' },
  { value: '~22 mi', label: '35 km of Pacific coastline' },
]

export function LocationSlide() {
  return (
    <Slide>
      <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <Kicker>01 — Location</Kicker>
          
          <MaskHeadline
            className="mt-3 text-3xl sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
            lines={['Where the desert', 'meets the Pacific']}
          />
          
          <Rise className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Located in Southern California, Los Angeles sprawls between the San
            Gabriel Mountains and the Pacific Ocean, boasting a Mediterranean
            climate with dry summers and mild winters.
          </Rise>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:max-w-md sm:gap-4">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: easeOut }}
                className="rounded-2xl border border-border bg-card/60 p-3.5 backdrop-blur-sm sm:p-4"
              >
                <div className="font-display text-2xl font-bold text-accent sm:text-3xl">
                  {fact.value}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground sm:mt-1 sm:text-sm">
                  {fact.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: easeOut }}
          className="relative overflow-hidden rounded-2xl border border-border sm:rounded-3xl"
        >
          <img
            src="/la-skyline.png"
            alt="Downtown Los Angeles skyline at sunset"
            className="aspect-video w-full object-cover sm:aspect-4/3 lg:aspect-4/5"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-background/90 to-transparent p-4 sm:p-5">
            <span className="font-display text-base font-semibold sm:text-lg">
              Downtown LA
            </span>
            <span className="text-xs text-accent sm:text-sm">West Coast</span>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}