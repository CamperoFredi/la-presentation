'use client'

import { motion } from 'motion/react'

export interface Landmark {
  img: string
  name: string
  tag?: string
}

interface LandmarksCarouselProps {
  items: Landmark[]
  speed?: number
  showOverlay?: boolean
}

export function Carousel({
  items,
  speed = 18,
  showOverlay = true,
}: LandmarksCarouselProps) {
  const marqueeItems = [...items, ...items]
const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
return (
  <div className="group relative flex w-full overflow-hidden py-4">
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-linear-to-r from-background to-transparent sm:w-16" />
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-linear-to-l from-background to-transparent sm:w-16" />

    <motion.div
      className="flex shrink-0 items-center gap-3 pr-3 transition-[animation-play-state] duration-300 group-hover:paused sm:gap-4 sm:pr-4 md:gap-6 md:pr-6"
      animate={{x: ["0%", "-50%"]}}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {marqueeItems.map((item, index) => (
        <motion.figure
          key={`${item.name}-${index}`}
          className="group/card relative w-60 flex-none overflow-hidden rounded-2xl border border-border sm:w-[320px] sm:rounded-3xl md:w-95"
        >
          <img
            src={`${basePath}${item.img || "/placeholder.svg"}`}
            alt={item.name}
            className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover/card:scale-105 sm:aspect-4/3 md:aspect-4/4"
          />

          {showOverlay && (
            <>
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="font-display text-base font-bold text-foreground sm:text-lg md:text-xl">
                  {item.name}
                </div>
                {item.tag && (
                  <div className="mt-0.5 text-xs text-accent sm:mt-1 sm:text-sm">
                    {item.tag}
                  </div>
                )}
              </figcaption>
            </>
          )}
        </motion.figure>
      ))}
    </motion.div>
  </div>
);
}