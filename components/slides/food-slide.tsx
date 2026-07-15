'use client'

import {useState} from "react";
import { motion } from 'motion/react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const californiaDishes = [
  {
    id: "tacos",
    label: "Street Tacos",
    tag: "Latino Soul",
    image: "/tacos.png",
    position: "top-[2%] left-[2%]",
    size: "w-24 sm:w-32 lg:w-38",
    moveX: [0, 45, -30, 20, 0],
    moveY: [0, -35, 40, -20, 0],
    rotate: [0, 8, -6, 4, 0],
    duration: 8,
    delay: 0,
  },
  {
    id: "burger",
    label: "Hamburger",
    tag: "In-N-Out Legend",
    image: "/burger.png",
    position: "top-[28%] left-[20%]",
    size: "w-32 sm:w-40 lg:w-48",
    moveX: [0, -50, 35, -25, 0],
    moveY: [0, 30, -45, 15, 0],
    rotate: [0, -7, 5, -3, 0],
    duration: 9.5,
    delay: 0.5,
  },
  {
    id: "kbbq",
    label: "Galbi K-BBQ",
    tag: "Koreatown Classic",
    image: "/kbbq.png",
    position: "top-[3%] left-[45%]",
    size: "w-26 sm:w-34 lg:w-42",
    moveX: [0, 35, -40, 25, 0],
    moveY: [0, -40, 30, -15, 0],
    rotate: [0, 6, -8, 3, 0],
    duration: 8.5,
    delay: 1.2,
  },
  {
    id: "sushi",
    label: "California Roll",
    tag: "L.A. Sushi Pioneer",
    image: "/sushi.png",
    position: "top-[4%] right-[4%]",
    size: "w-22 sm:w-30 lg:w-36",
    moveX: [0, -40, 25, -35, 0],
    moveY: [0, 35, -25, 40, 0],
    rotate: [0, -5, 7, -4, 0],
    duration: 7.8,
    delay: 0.8,
  },
  {
    id: "pastrami",
    label: "Pastrami Dip",
    tag: "L.A. Deli Heritage",
    image: "/pastrami.png",
    position: "top-[42%] right-[2%]",
    size: "w-24 sm:w-32 lg:w-38",
    moveX: [0, -45, 30, -20, 0],
    moveY: [0, 30, -35, 25, 0],
    rotate: [0, -8, 6, -3, 0],
    duration: 9,
    delay: 0.3,
  },
  {
    id: "burrito",
    label: "Mission Burrito",
    tag: "California Classic",
    image: "/burrito.png",
    position: "bottom-[35%] left-[2%]",
    size: "w-26 sm:w-34 lg:w-40",
    moveX: [0, 40, -25, 35, 0],
    moveY: [0, -30, 45, -20, 0],
    rotate: [0, 7, -4, 5, 0],
    duration: 8.2,
    delay: 1.0,
  },
  {
    id: "avocado",
    label: "Avocado Toast",
    tag: "SoCal Lifestyle",
    image: "/avocado.png",
    position: "bottom-[22%] left-[32%]",
    size: "w-28 sm:w-36 lg:w-42",
    moveX: [0, -35, 45, -30, 0],
    moveY: [0, 40, -30, 25, 0],
    rotate: [0, -6, 8, -4, 0],
    duration: 10,
    delay: 0.6,
  },
  {
    id: "ramen",
    label: "Tsujita Ramen",
    tag: "Sawtelle Japantown",
    image: "/ramen.png",
    position: "bottom-[30%] right-[38%]",
    size: "w-26 sm:w-34 lg:w-40",
    moveX: [0, 35, -30, 40, 0],
    moveY: [0, -35, 40, -25, 0],
    rotate: [0, 5, -6, 4, 0],
    duration: 8.8,
    delay: 1.4,
  },
  {
    id: "waffles",
    label: "Chicken & Waffles",
    tag: "Roscoe’s Icon",
    image: "/waffles.png",
    position: "bottom-[8%] right-[18%]",
    size: "w-28 sm:w-36 lg:w-44",
    moveX: [0, -50, 25, -35, 0],
    moveY: [0, 25, -45, 30, 0],
    rotate: [0, -7, 5, -3, 0],
    duration: 7.5,
    delay: 0.2,
  },
  {
    id: "donut",
    label: "Glazed Donut",
    tag: "Randy’s Landmark",
    image: "/donut.png",
    position: "bottom-[4%] right-[2%]",
    size: "w-20 sm:w-26 lg:w-30",
    moveX: [0, 30, -40, 20, 0],
    moveY: [0, -40, 30, -20, 0],
    rotate: [0, 9, -7, 5, 0],
    duration: 6.8,
    delay: 1.7,
  },
  {
    id: "cobb",
    label: "Cobb Salad",
    tag: "Hollywood Original",
    image: "/cobb.png",
    position: "bottom-[2%] left-[12%]",
    size: "w-24 sm:w-30 lg:w-36",
    moveX: [0, -30, 35, -25, 0],
    moveY: [0, 35, -25, 30, 0],
    rotate: [0, -5, 6, -4, 0],
    duration: 8.4,
    delay: 0.9,
  },
];

export function FoodSlide() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeDish = californiaDishes.find((d) => d.id === hoveredId);

  return (
    <Slide>
      <div className="grid h-full items-center gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:gap-2">
        <div className="z-30 flex flex-col justify-center">
          <Kicker>03 — Food Culture</Kicker>

          <MaskHeadline
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            lines={["Galaxy of", "flavors."]}
          />

          <Rise className="mt-3 max-w-xs text-pretty text-xs text-muted-foreground sm:text-sm leading-relaxed">
            California food icons floating across SoCal culture.
          </Rise>

          <div className="mt-6 h-12">
            {activeDish && (
              <motion.div
                key={activeDish.id}
                initial={{opacity: 0, scale: 0.9, y: 8}}
                animate={{opacity: 1, scale: 1, y: 0}}
                exit={{opacity: 0, scale: 0.9}}
                className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 backdrop-blur-md shadow-lg"
              >
                <span className="size-2 rounded-full bg-accent animate-ping" />
                <span className="font-display text-xl font-bold text-foreground">
                  {activeDish.label}
                </span>
                <span className="text-xl text-muted-foreground hidden sm:inline">
                  — {activeDish.tag}
                </span>
              </motion.div>
            )}
          </div>
        </div>

        <div className="relative h-125 sm:h-145 lg:h-160 w-full overflow-visible">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          {californiaDishes.map((dish) => {
            const isHovered = hoveredId === dish.id;

            return (
              <motion.div
                key={dish.id}
                onMouseEnter={() => setHoveredId(dish.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`absolute ${dish.position} cursor-pointer origin-center ${
                  isHovered ? "z-50" : "z-10"
                }`}
                animate={{
                  x: isHovered ? 0 : dish.moveX,
                  y: isHovered ? -12 : dish.moveY,
                  rotate: isHovered ? 0 : dish.rotate,
                  scale: isHovered ? 1.45 : 1,
                }}
                transition={{
                  x: isHovered
                    ? {duration: 0.3, ease: easeOut}
                    : {
                        duration: dish.duration,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: dish.delay,
                      },
                  y: isHovered
                    ? {duration: 0.3, ease: easeOut}
                    : {
                        duration: dish.duration * 1.15,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: dish.delay,
                      },
                  rotate: isHovered
                    ? {duration: 0.3}
                    : {
                        duration: dish.duration * 1.3,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: dish.delay,
                      },
                  scale: {duration: 0.25, ease: easeOut},
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent/40 blur-2xl pointer-events-none"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1.6 : 0.4,
                  }}
                  transition={{duration: 0.2}}
                />

                <img
                  src={`${basePath}/food${dish.image}`}
                  alt={dish.label}
                  className={`${dish.size} h-auto object-contain transition-all duration-300 drop-shadow-[0_12px_22px_rgba(0,0,0,0.55)] hover:drop-shadow-[0_30px_45px_rgba(0,0,0,0.9)]`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}