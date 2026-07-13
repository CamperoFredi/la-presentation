'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Slide } from './primitives'

const districts = [
  { name: 'Beverly Hills', desc: 'Luxury, palm-lined avenues, and some of the most sought-after estates on Earth.' },
  { name: 'Hollywood', desc: 'The heart of cinema, the Walk of Fame, and the iconic TCL Chinese Theatre.' },
  { name: 'Santa Monica', desc: 'Beaches, the historic pier, and the legendary end of Route 66.' },
  { name: 'Venice', desc: 'Bohemian culture, skateboarding, canals, and the famous Muscle Beach.' },
  { name: 'Downtown', desc: 'Skyscrapers, contemporary art, and a thriving nightlife scene.' },
  { name: 'Malibu', desc: 'Pacific coast cliffs and the ultimate Southern California surf culture.' },
]

export function NeighborhoodsSlide() {
  const [active, setActive] = useState(0)

  return (
    <Slide className="justify-start pt-10 sm:pt-16 md:justify-center md:pt-20">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-10">
        <div>
          <Kicker>06 — Iconic Neighborhoods</Kicker>
          <MaskHeadline
            className="mt-3 text-3xl sm:mt-6 sm:text-5xl md:text-5xl lg:text-6xl"
            lines={['Many cities', 'in one']}
          />
        </div>

        <div>
          <ul className="flex flex-col">
            {districts.map((d, i) => (
              <motion.li
                key={d.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: easeOut }}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <button
                  className="flex w-full items-baseline gap-3 border-b border-border py-2.5 text-left transition-colors sm:gap-4 sm:py-3.5 md:py-4"
                  type="button"
                >
                  <span
                    className={`font-mono text-xs transition-colors sm:text-sm ${
                      active === i ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`font-display text-xl font-bold transition-all duration-300 sm:text-2xl md:text-3xl ${
                      active === i
                        ? 'translate-x-1 sm:translate-x-2 text-primary'
                        : 'text-foreground'
                    }`}
                  >
                    {d.name}
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="relative mt-4 min-h-12 sm:mt-6 sm:min-h-16">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: easeOut }}
                className="max-w-md text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm"
              >
                {districts[active].desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Slide>
  )
}