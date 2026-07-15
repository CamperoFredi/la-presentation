'use client'

import { useState } from 'react'
import {motion} from "motion/react";
import {Waves, Palmtree, Film, FerrisWheel, Building2, Sun} from "lucide-react";
import { easeOut } from '@/lib/motion'
import { Kicker, MaskHeadline, Slide } from './primitives'

const districts = [
  {
    id: "beverly-hills",
    name: "Beverly Hills",
    file: "beverly_hills.jpg",
    icon: Palmtree,
    desc: "Luxury, palm-lined avenues, and some of the most sought-after estates on Earth.",
    image: "beverly_hills.jpg",
  },
  {
    id: "hollywood",
    name: "Hollywood",
    file: "hollywood.jpg",
    icon: Film,
    desc: "The heart of cinema, the Walk of Fame, and the iconic TCL Chinese Theatre.",
    image: "hollywood.jpg",
  },
  {
    id: "santa-monica",
    name: "Santa Monica",
    file: "santa_monica.jpg",
    icon: FerrisWheel,
    desc: "Beaches, the historic pier, and the legendary end of Route 66.",
    image: "santa-monica.jpg",
  },
  {
    id: "venice",
    name: "Venice",
    file: "venice.jpg",
    icon: Sun,
    desc: "Bohemian culture, skateboarding, canals, and the famous Muscle Beach.",
    image: "venice.jpg",
  },
  {
    id: "downtown",
    name: "Downtown",
    file: "downtown.jpg",
    icon: Building2,
    desc: "Skyscrapers, contemporary art, and a thriving nightlife scene.",
    image: "downtown.jpg",
  },
  {
    id: "malibu",
    name: "Malibu",
    file: "malibu.jpg",
    icon: Waves,
    desc: "Pacific coast cliffs and the ultimate Southern California surf culture.",
    image: "malibu.jpg",
  },
];

export function NeighborhoodsSlide() {
  const [active, setActive] = useState(0)
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";

  return (
    <Slide className="justify-center">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col h-full w-full justify-between gap-6">
        {/* ENCABEZADO */}
        <div>
          <Kicker>06 — Iconic Neighborhoods</Kicker>
          <MaskHeadline
            className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            lines={["Many cities in one"]}
          />
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
          {districts.map((d, i) => {
            const isActive = active === i;
            const Icon = d.icon;

            return (
              <motion.div
                key={d.id}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                initial={{opacity: 0, y: 16}}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.4,
                  ease: easeOut,
                }}
                className={`relative flex justify-between rounded-3xl border backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "border-accent bg-card/90 shadow-xl shadow-accent/20 ring-1 ring-accent/30"
                    : "border-border/60 bg-card/40 hover:border-accent/40 hover:bg-card/70"
                }`}
              >
                {/* LADO IZQUIERDO: Icono, Título, Descripción y Nombre de Archivo */}
                <div className=" p-5 flex flex-col justify-between pr-2 z-10 flex-1 min-w-0">
                  <div>
                    <Icon
                      className={`size-6 mb-3 transition-colors ${isActive ? "text-accent" : "text-muted-foreground"}`}
                    />
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight uppercase">
                      {d.name}
                    </h3>

                    {/* Descripción */}
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {isActive && (
                        <span className="font-mono text-accent font-semibold mr-1">
                          0{i + 1}
                        </span>
                      )}
                      {d.desc}
                    </p>
                  </div>
                </div>

                {/* LADO DERECHO: Imagen recortada en arco cóncavo/circular exacto como el prototipo */}
                <div className="relative w-28 sm:w-32 h-full min-h-32 rounded-l-full rounded-r-2xl overflow-hidden shrink-0 self-stretch border-l border-white/10">
                  <img
                    src={`${basePath}/neighborhoods/${d.image}`}
                    alt={d.name}
                    className={`h-full w-full object-cover transition-transform duration-500 ${
                      isActive ? "scale-110" : "scale-100 grayscale-20"
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-card/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}