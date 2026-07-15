'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { slideTransition } from '@/lib/motion'
import { ClosingSlide } from './slides/closing-slide'
import { CultureSlide } from './slides/culture-slide'
import { FoodSlide } from './slides/food-slide'
import { HistorySlide } from './slides/history-slide'
import { IconsSlide } from './slides/icons-slide'
import { LocationSlide } from './slides/location-slide'
import { NeighborhoodsSlide } from './slides/neighborhoods-slide'
import { TitleSlide } from './slides/title-slide'

const slides = [
  { label: 'Cover', Component: TitleSlide },
  { label: 'Location', Component: LocationSlide },
  { label: 'History', Component: HistorySlide },
  { label: 'Food', Component: FoodSlide },
  { label: 'Culture', Component: CultureSlide },
  { label: 'Icons', Component: IconsSlide },
  { label: 'Neighborhoods', Component: NeighborhoodsSlide },
  { label: 'Closing', Component: ClosingSlide },
]

export function LaDeck() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0])

  const paginate = useCallback((dir: number) => {
    setState(([current]) => {
      const next = current + dir
      if (next < 0 || next > slides.length - 1) return [current, dir]
      return [next, dir]
    })
  }, [])

  const goTo = useCallback((target: number) => {
    setState(([current]) => [target, target > current ? 1 : -1])
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        paginate(1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        paginate(-1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [paginate])

  const { Component } = slides[index]
  const progress = ((index + 1) / slides.length) * 100

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background text-foreground select-none">
      {/* Top progress bar */}
      <div className="absolute inset-x-0 top-0 z-30 h-1 bg-border/50">
        <motion.div
          className="h-full bg-linear-to-r from-primary to-accent"
          animate={{width: `${progress}%`}}
          transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
        />
      </div>

      {/* Slides Container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={slideTransition}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{left: 0, right: 0}}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) paginate(1);
            else if (info.offset.x > 80) paginate(-1);
          }}
          className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
        >
          <Component />
        </motion.div>
      </AnimatePresence>

      {/* Chapter label — bottom left */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-30 sm:bottom-6 sm:left-6 md:bottom-8 md:left-16 lg:left-24">
        <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
          <span className="text-accent">CALIFORNIA</span>
          <span className=""> — {slides[index].label}</span>
        </div>
      </div>

      {/* Controls — bottom right */}
      <div className="absolute bottom-4 right-4 z-30 flex items-center gap-3 sm:bottom-6 sm:right-6 sm:gap-4 md:bottom-8 md:right-16 lg:right-24">
        <span className="font-mono text-xs text-muted-foreground sm:text-sm">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-1 opacity-50">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => paginate(-1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 sm:size-10"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            disabled={index === slides.length - 1}
            aria-label="Next slide"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-primary text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30 sm:size-10"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Dot navigation — right center */}
      <div className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
        {slides.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.label}`}
            className="group flex items-center justify-end gap-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={`size-2 rounded-full transition-all ${
                i === index
                  ? "scale-125 bg-accent"
                  : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    </main>
  );
}