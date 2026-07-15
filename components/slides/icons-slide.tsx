'use client'

import { Carousel, Landmark } from '../carousel'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const defaultLandmarks: Landmark[] = [
  {
    img: '/la-hollywood.png',
    name: 'Hollywood Sign',
    tag: "The world's most famous sign",
  },
  {
    img: '/la-observatory.png',
    name: 'Griffith Observatory',
    tag: 'Art Deco with citywide views',
  },
  {
    img: '/la-beach.png',
    name: 'Santa Monica Pier',
    tag: 'The iconic end of Route 66',
  },
  {
    img: '/la-food.png',
    name: 'Downtown L.A.',
    tag: 'Skyline and cultural core',
  },
]

export function IconsSlide() {
  return (
    <Slide className="justify-start pt-10 sm:pt-16 md:justify-center md:pt-20">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <Kicker>05 — Icons</Kicker>
          <MaskHeadline
            className="mt-3 text-3xl sm:mt-4 sm:text-5xl md:text-5xl lg:text-6xl"
            lines={["World-famous landmarks"]}
          />
        </div>
        <Rise className="max-w-xs text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Postcard views featured in thousands of movies that define the city’s
          global imagination.
        </Rise>
      </div>

      {/* Carrusel responsive y autónomo */}
      <div className="mt-3 sm:mt-2">
        <Carousel speed={20} showOverlay={true} items={defaultLandmarks} />
      </div>
    </Slide>
  );
}