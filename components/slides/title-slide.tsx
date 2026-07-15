"use client";

import Image from "next/image";
import {motion} from "motion/react";
import {MapPin, Star, Sun} from "lucide-react";
import {easeOut, lineReveal, riseIn, stagger} from "@/lib/motion";

const MotionImage = motion.create(Image);

const marquee = [
  "Los Angeles",
  "•",
  "San Francisco",
  "•",
  "San Diego",
  "•",
  "San Jose",
  "•",
  "Sacramento",
  "•",
  "Fresno",
  "•",
  "Long Beach",
  "•",
  "Oakland",
  "•",
  "Bakersfield",
  "•",
  "Anaheim",
  "•",
  "Santa Ana",
  "•",
  "Riverside",
  "•",
  "Silicon Valley",
  "•",
  "Malibu",
  "•",
  "Santa Barbara",
  "•",
];

export function TitleSlide() {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  return (
    <section className="relative flex min-h-dvh w-full items-end justify-start overflow-hidden py-12">
      <MotionImage
        src={`${basePath}/la-palms.jpg`}
        alt="California coast and golden hour landscape"
        fill
        priority
        className="object-cover"
        initial={{scale: 1, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 1.6, ease: easeOut}}
      />

      <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,var(--coral)/25,transparent_60%)]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative w-full px-5 pb-6 sm:px-8 md:px-16 md:pb-16 lg:px-24"
      >
        <motion.div
          variants={riseIn}
          className="text-zinc-200 font-bold flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] sm:tracking-[0.32em]"
        >
          <Sun className="size-4 shrink-0" />
          The Golden State · United States
        </motion.div>

        <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-6 sm:gap-6">
          <h1 className="font-display text-[clamp(2.8rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-tighter text-foreground">
            <span className="block overflow-hidden">
              <motion.span
                variants={lineReveal}
                className="block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              >
                California
              </motion.span>
            </span>
          </h1>

          <motion.div
            variants={riseIn}
            className="relative h-30 w-24 overflow-hidden sm:h-4 sm:w-36 md:h-55 md:w-44"
          >
            <Image
              src={`${basePath}/flag.png`}
              alt="California highlight"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="pointer-events-none mt-2 flex overflow-hidden opacity-90 mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex shrink-0 items-center gap-4 pr-4 font-display text-lg font-bold uppercase tracking-wider text-white sm:gap-6 sm:pr-6 sm:text-2xl md:text-3xl"
            animate={{x: ["0%", "-50%"]}}
            transition={{duration: 18, ease: "linear", repeat: Infinity}}
          >
            {[...marquee, ...marquee].map((word, i) => (
              <span
                key={i}
                className={word === "•" ? "text-accent" : undefined}
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.p
          variants={riseIn}
          className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-8 md:text-lg"
        >
          The Golden State. Innovation powerhouse, stunning Pacific coastline,
          iconic national parks, and the cultural beacon of the American West.
        </motion.p>

        <motion.div
          variants={riseIn}
          className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 md:mt-10"
        >
          {[
            {icon: MapPin, label: "36.77° N, 119.41° W"},
            {icon: Star, label: "Admitted in 1850"},
            {icon: Sun, label: "310+ sunny days / year"},
          ].map(({icon: Icon, label}) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-card-foreground backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
            >
              <Icon className="size-3.5 text-accent sm:size-4" />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
