'use client'

import { motion } from 'motion/react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const dishes = [
  {
    tag: 'Tacos',
    name: 'Street Tacos',
    desc: 'The city’s Latino soul, served fresh from food trucks and street corners.',
  },
  {
    tag: 'K-BBQ',
    name: 'Korean BBQ',
    desc: 'Koreatown turned Korean grilling into an iconic late-night dining ritual.',
  },
  {
    tag: 'Burger',
    name: 'In-N-Out',
    desc: 'The "Animal Style" burger is a timeless Southern California institution.',
  },
  {
    tag: 'Fusion',
    name: 'Fusion Cuisine',
    desc: 'From kimchi tacos to sushi burritos: L.A. pioneered modern culinary cross-over.',
  },
]

export function FoodSlide() {
  return (
    <Slide>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        {/* Main Text Content */}
        <div className="order-1 lg:order-2">
          <Kicker>03 — Food</Kicker>

          <MaskHeadline
            className="mt-3 text-3xl sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
            lines={['A map', 'of flavors']}
          />

          <Rise className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            With over 140 nationalities represented, dining in Los Angeles is a
            journey around the world without ever leaving the city.
          </Rise>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
            {dishes.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: easeOut }}
                className="group rounded-2xl border border-border bg-card/60 p-3.5 backdrop-blur-sm transition-colors hover:border-accent sm:p-4"
              >
                <div className="text-[10px] font-semibold uppercase tracking-widest text-accent sm:text-xs">
                  {dish.tag}
                </div>
                <div className="mt-1 font-display text-base font-semibold sm:mt-2 sm:text-lg">
                  {dish.name}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:mt-1 sm:text-sm">
                  {dish.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: easeOut }}
          className="relative order-2 overflow-hidden rounded-2xl border border-border lg:order-1 sm:rounded-3xl"
        >
          <img
            src="/la-food.png"
            alt="Los Angeles street tacos"
            className="aspect-video max-h-55 w-full object-cover sm:aspect-4/3"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/90 to-transparent p-4 sm:p-5">
            <span className="font-display text-base font-semibold sm:text-lg">
              Taco Tuesday
            </span>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}