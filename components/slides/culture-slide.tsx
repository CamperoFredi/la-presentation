'use client'

import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import { Clapperboard, Music, Palette, Trophy } from 'lucide-react'
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Rise, Slide } from './primitives'

const pillars = [
  {
    id: "film",
    icon: Clapperboard,
    title: "Film & Cinema",
    tag: "Hollywood Legend",
    text: "Hollywood, the Academy Awards, and the epicenter of world cinema setting global storytelling standards.",
    color: "from-amber-500/20 to-orange-500/5",
    deck: [
      {
        id: "oscar",
        image: "mary.jpg",
        alt: "Oscar Trophy",
        rotate: -18,
        x: -45,
        y: 10,
      },
      {
        id: "clapper",
        image: "hollywood.jpg",
        alt: "Movie Clapper",
        rotate: -6,
        x: -15,
        y: -5,
      },
      {
        id: "popcorn",
        image: "quentin.jpg",
        alt: "Popcorn",
        rotate: 8,
        x: 20,
        y: 0,
      },
      {
        id: "camera",
        image: "cartel.jpg",
        alt: "Film Camera",
        rotate: 20,
        x: 50,
        y: 15,
      },
    ],
  },
  {
    id: "music",
    icon: Music,
    title: "Music Scene",
    tag: "West Coast Sound",
    text: "Birthplace of West Coast hip-hop, legendary rock, and the iconic surf sound that defined generations.",
    color: "from-purple-500/20 to-pink-500/5",
    deck: [
      {
        id: "guitar",
        image: "snoop-dre.jpg",
        alt: "Electric Guitar",
        rotate: -22,
        x: -50,
        y: 15,
      },
      {
        id: "vinyl",
        image: "chilli.jpg",
        alt: "Vinyl Record",
        rotate: -8,
        x: -20,
        y: -8,
      },
      {
        id: "mic",
        image: "boys.jpg",
        alt: "Vintage Mic",
        rotate: 6,
        x: 15,
        y: -2,
      },
      {
        id: "headphones",
        image: "lamar.jpg",
        alt: "Headphones",
        rotate: 22,
        x: 45,
        y: 18,
      },
    ],
  },
  {
    id: "art",
    icon: Palette,
    title: "Visual Arts",
    tag: "Urban Expression",
    text: "LACMA, The Broad, and iconic murals bringing vibrant identity to every corner and street of L.A.",
    color: "from-blue-500/20 to-cyan-500/5",
    deck: [
      {
        id: "palette",
        image: "judy-baca.jpg",
        alt: "Art Palette",
        rotate: -20,
        x: -45,
        y: 12,
      },
      {
        id: "spray",
        image: "ed.jpg",
        alt: "Spray Can",
        rotate: -7,
        x: -15,
        y: -6,
      },
      {
        id: "brush",
        image: "david.jpg",
        alt: "Paint Brush",
        rotate: 10,
        x: 22,
        y: 2,
      },
      {
        id: "statue",
        image: "cartoon.jpg",
        alt: "Museum Art",
        rotate: 24,
        x: 52,
        y: 16,
      },
    ],
  },
  {
    id: "sports",
    icon: Trophy,
    title: "Championship Sports",
    tag: "Winning Legacy",
    text: "Lakers, Dodgers, Rams, and an endless championship sports fever that powers the city energy.",
    color: "from-emerald-500/20 to-teal-500/5",
    deck: [
      {
        id: "bat",
        image: "gretzky.jpg",
        alt: "Baseball Bat",
        rotate: -24,
        x: -55,
        y: 18,
      },
      {
        id: "basketball",
        image: "fer.jpg",
        alt: "Basketball",
        rotate: -9,
        x: -22,
        y: -10,
      },
      {
        id: "racket",
        image: "magic.jpg",
        alt: "Tennis Racket",
        rotate: 7,
        x: 18,
        y: -4,
      },
      {
        id: "trophy",
        image: "kobe.jpg",
        alt: "Championship Trophy",
        rotate: 22,
        x: 48,
        y: 14,
      },
    ],
  },
];

const marquee = ['Hollywood', '•', 'Hip-Hop', '•', 'Surf', '•', 'Street Art', '•', 'Oscars', '•', 'Lakers', '•']

export function CultureSlide() {
  const [activeId, setActiveId] = useState<string>("film");

  const activePillar = pillars.find((p) => p.id === activeId) || pillars[0];
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  return (
    <Slide className="justify-center">
      <div className="grid h-full w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* COLUMNA IZQUIERDA: Título + Descripción + Info Dinámica */}
        <div className="flex flex-col justify-center">
          <Kicker>04 — Culture</Kicker>

          <MaskHeadline
            className="mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            lines={["The global capital", "of pop culture"]}
          />

          <Rise className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
            What happens in Los Angeles sets trends for the entire planet: from
            film and music to street art and world-class athletics.
          </Rise>

          {/* INFORMACIÓN DINÁMICA (Bajo el título) */}
          <div className="mt-6 min-h-35 sm:mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{opacity: 0, y: 16}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -16}}
                transition={{duration: 0.3, ease: easeOut}}
                className={`rounded-2xl border border-accent/20 bg-linear-to-br ${activePillar.color} p-5 backdrop-blur-md shadow-xl`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-accent/10 p-2.5 text-accent border border-accent/20">
                    <activePillar.icon className="size-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {activePillar.tag}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {activePillar.text}
                </p>
              </motion.div>
            </AnimatePresence>
            {/* MARQUEE INFERIOR */}
            {/* MARQUEE INFERIOR CON BORDES DIFUMINADOS */}
            <div
              className="pointer-events-none mt-6 flex overflow-hidden opacity-80 sm:mt-10"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <motion.div
                className="flex shrink-0 items-center gap-3 pr-3 font-display text-xs font-bold uppercase tracking-wider sm:gap-4 sm:pr-4 sm:text-sm md:text-base"
                animate={{x: ["0%", "-50%"]}}
                transition={{duration: 25, ease: "linear", repeat: Infinity}}
              >
                {[...marquee, ...marquee, ...marquee, ...marquee].map(
                  (word, i) => (
                    <span
                      key={i}
                      className={word === "•" ? "text-accent" : undefined}
                    >
                      {word}
                    </span>
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Ramo/Baraja de Cartas + Botones con Pálpito */}
        <div className="flex flex-col items-center justify-center gap-10">
          {/* ÁREA DEL RAMO / BARAJA DE IMÁGENES */}
          <div className="relative h-90 sm:h-105 w-full max-w-100 sm:max-w-120 flex items-center justify-center">
            {/* Resplandor focal de fondo */}
            <div className="absolute size-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                className="relative h-full w-full flex items-center justify-center"
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {activePillar.deck.map((card, index) => (
                  <motion.div
                    key={card.id}
                    variants={{
                      initial: {opacity: 0, scale: 0.4, rotate: 0, x: 0, y: 20},
                      animate: {
                        opacity: 1,
                        scale: 1,
                        rotate: card.rotate,
                        x: card.x,
                        y: card.y,
                      },
                      exit: {opacity: 0, scale: 0.6, rotate: 0, y: -20},
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06, // Entrada escalonada tipo abanico
                      ease: easeOut,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 0,
                      zIndex: 40,
                      transition: {duration: 0.2},
                    }}
                    className="absolute h-64 sm:h-72 w-44 sm:w-52 rounded-2xl border border-white/15 bg-card/90 p-3 shadow-2xl backdrop-blur-md cursor-pointer origin-bottom flex flex-col items-center justify-between"
                    style={{zIndex: index + 10}}
                  >
                    {/* Tag superior estilo carta */}
                    {/* <div className="w-full flex justify-between items-center text-[10px] font-bold text-accent uppercase">
                      <span>{activePillar.id}</span>
                      <span>#{index + 1}</span>
                    </div> */}

                    {/* Contenedor de la Imagen del Objeto */}
                    <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-xl bg-black/20">
                      <img
                        src={`${basePath}/culture/${card.image}`}
                        alt={card.alt}
                        className="h-full w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]"
                      />
                    </div>

                    {/* Etiqueta inferior de la carta */}
                    {/* <span className="text-xs font-semibold text-foreground/90 truncate w-full text-center">
                      {card.alt}
                    </span> */}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* BOTONES INTERACTIVOS: Iconos con Latido (Pálpito) */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {pillars.map(({id, icon: Icon, title}) => {
              const isActive = id === activeId;

              return (
                <div
                  key={id}
                  className="relative group flex flex-col items-center"
                >
                  {/* Tooltip con nombre al hacer Hover */}
                  <span className="absolute -top-10 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-md border border-border pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {title}
                  </span>

                  {/* Botón Principal con Pálpito */}
                  <motion.button
                    onClick={() => setActiveId(id)}
                    onMouseEnter={() => setActiveId(id)}
                    animate={
                      isActive ? {scale: [1, 1.1, 1]} : {scale: [1, 1.05, 1]}
                    }
                    transition={{
                      duration: isActive ? 1.5 : 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`relative flex size-12 sm:size-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-accent bg-accent/20 text-accent shadow-lg shadow-accent/20"
                        : "border-border bg-card/60 text-muted-foreground hover:border-accent/50 hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-5 sm:size-6" />

                    {/* Resplandor en el ícono activo */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-2xl bg-accent/20 animate-ping pointer-events-none opacity-40" />
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Slide>
  );
}