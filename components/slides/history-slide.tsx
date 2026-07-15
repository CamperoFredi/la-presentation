'use client'

import {useState} from "react";
import { motion } from 'motion/react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const timeline = [
  {
    year: "1781",
    title: "El Pueblo",
    text: 'Spanish settlers found "El Pueblo de Nuestra Señora la Reina de los Ángeles."',
    image: "/1781.jpeg",
  },
  {
    year: "1848",
    title: "U.S. Territory",
    text: "Following the Mexican–American War, California becomes part of the United States.",
    image: "/1848.jpeg",
  },
  {
    year: "1910s",
    title: "Hollywood is Born",
    text: "The film industry establishes roots in L.A., turning it into the global entertainment capital.",
    image: "/1910.jpeg",
  },
  {
    year: "1984",
    title: "Olympic Legacy",
    text: "The city shines on the global stage for the second time; set to host again in 2028.",
    image: "/1984.jpeg",
  },
  {
    year: "Present",
    title: "Modern Tech Hub",
    text: "A booming epicenter for Silicon Beach, green energy, and global culture.",
    image: "/2026.jpeg",
  },
];

export function HistorySlide() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Slide>
      <div className="flex flex-col justify-between gap-8 lg:gap-12">
        <div className="max-w-xl">
          <Kicker>02 — History</Kicker>

          <MaskHeadline
            className="mt-2 text-3xl sm:text-4xl md:text-5xl"
            lines={["Golden history, global impact"]}
          />

          <Rise className="mt-3 text-pretty text-sm text-muted-foreground sm:text-base">
            From a tiny Spanish settlement to a global metropolis defining tech,
            culture, and the future.
          </Rise>
        </div>

        <div className="relative mt-6 w-full pt-12 sm:pt-36 pb-6">
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 w-full bg-linear-to-r from-accent/20 via-accent to-transparent"
            initial={{scaleX: 0}}
            animate={{scaleX: 1}}
            transition={{duration: 1, ease: easeOut, delay: 0.2}}
            style={{originX: 0}}
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-4">
            {timeline.map((item, i) => {
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={item.year}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative flex flex-col items-center cursor-pointer"
                >
                  <motion.div
                    className="absolute bottom-full mb-3 hidden w-32 sm:block md:w-36 lg:w-40 z-20 origin-bottom"
                    animate={{
                      scale: isHovered ? 1.15 : 0.6,
                      y: isHovered ? -8 : 0,
                      opacity: isHovered ? 1 : 0.75,
                      x: isHovered ? 0 : [-3, 3, -3],
                    }}
                    transition={{
                      x: {
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                      scale: {duration: 0.3, ease: easeOut},
                      y: {duration: 0.3, ease: easeOut},
                      opacity: {duration: 0.3},
                    }}
                  >
                    <div
                      className="relative overflow-hidden transition-all duration-300 rounded-lg shadow-md"
                      style={{
                        maskImage: isHovered
                          ? "none"
                          : "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage: isHovered
                          ? "none"
                          : "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                        maskComposite: "intersect",
                        WebkitMaskComposite: "destination-in",
                      }}
                    >
                      <motion.img
                        src={`${basePath}/history${item.image}`}
                        alt={item.title}
                        animate={{
                          height: isHovered ? "auto" : "15rem",
                        }}
                        transition={{duration: 0.3, ease: easeOut}}
                        className={`w-full rounded-lg ${
                          isHovered ? "object-contain" : "object-cover"
                        }`}
                      />
                    </div>
                  </motion.div>

                  <div className="relative z-10 my-4 flex items-center justify-center">
                    <motion.span
                      className={`size-3 rounded-full transition-all duration-300 sm:size-3.5 ${
                        isHovered
                          ? "scale-125 bg-accent shadow-[0_0_12px_var(--accent)]"
                          : "bg-accent/70 group-hover:bg-accent"
                      }`}
                    />
                  </div>

                  <div className="text-center">
                    <span className="font-display text-base font-bold text-accent sm:text-lg">
                      {item.year}
                    </span>
                    <h4 className="mt-0.5 font-display text-xs font-semibold text-foreground sm:text-sm">
                      {item.title}
                    </h4>

                    <motion.p
                      initial={{opacity: 0, y: 6}}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 6,
                      }}
                      transition={{duration: 0.25, ease: easeOut}}
                      className="absolute left-1/2 top-full mt-5 -translate-x-1/2 w-36 md:w-40 text-center text-[11px] leading-tight text-muted-foreground hidden sm:block pointer-events-none"
                    >
                      {item.text}
                    </motion.p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Slide>
  );
}