'use client'

import { motion } from 'motion/react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const facts = [
  {value: "38.9M", label: "state population"},
  {value: "#1", label: "most populous US state"},
  {value: "163k sq mi", label: "423,970 km² total area"},
  {value: "840 mi", label: "1,350 km Pacific coastline"},
];

export function LocationSlide() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  return (
    <Slide>
      <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <Kicker>01 — Location</Kicker>

          <MaskHeadline
            className="mt-3 text-3xl sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
            lines={["Between mountains,", "deserts & the Pacific"]}
          />

          <Rise className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Stretching along the West Coast of the United States, California
            spans diverse landscapes from temperate rainforests and high
            mountain ranges to arid deserts and iconic Pacific coastlines.
          </Rise>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:max-w-md sm:gap-4">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.6,
                  ease: easeOut,
                }}
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
          initial={{opacity: 0, scale: 0.94}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 0.3, duration: 0.9, ease: easeOut}}
          className="relative hidden aspect-4/5 w-full overflow-hidden border border-border lg:block mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent),linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] mask-intersect"
        >
          <video
            src={`${basePath}/location.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </Slide>
  );
}