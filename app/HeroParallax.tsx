'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// NOTA: El indicador de scroll usa SVG directo.

export default function HeroParallax() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"])
    const mountainBackY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    return (
        <div
            ref={ref}
            className="relative w-full h-[120vh] overflow-hidden bg-[var(--color-fondo)]"
        >
            {/* 1. CAPA: Siluetas de Aves y Nubes (Z-10) */}
            <div className="absolute top-0 w-full h-full z-10 pointer-events-none">

                {/* NUBES DIFUSAS (Simulación) */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-[var(--color-fondo)] opacity-60" style={{ filter: 'blur(150px)' }}/>

                {/* Siluetas de aves: Tres curvas simples en la esquina derecha */}
                <div className="absolute top-8 right-8 text-[var(--color-texto)] opacity-60">
                    <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 15s4-10 5-10 5 10 5 10" />
                        <path d="M25 18s4-10 5-10 5 10 5 10" />
                        <path d="M45 12s4-10 5-10 5 10 5 10" />
                        <path d="M65 20s6-10 7-10 6 10 6 10" />
                    </svg>
                </div>
            </div>

            {/* 2. CAPA: TEXTO PRINCIPAL (¡FIX FINAL DE COLOR Y POSICIÓN!) */}
            <motion.div
                style={{ y: textY }}
                // FIX: top-[15%] ancla el texto en la posición visualmente correcta, fuera de conflicto.
                className="absolute left-1/2 top-[15%] -translate-x-1/2 z-40 flex flex-col items-center text-center w-full max-w-5xl"
            >
                <h1 className="leading-none drop-shadow-sm">
                    {/* FIX DE COLOR: 'Cuando' usa el CAFÉ OSCURO principal */}
                    <span className="block font-serif text-[6rem] md:text-[10rem] lg:text-[12rem] tracking-tight text-[var(--color-texto)]">
                        Cuando
                    </span>
                    <div className="flex flex-col items-center justify-center gap-0 -mt-8 md:-mt-12">
                        {/* 'estoy' usa la fuente cursiva y color sutil */}
                        <span className="font-script text-3xl md:text-5xl text-[var(--color-texto-principal-claro)] pb-1 md:pb-2">
                            estoy
                        </span>
                        {/* 'Contigo' usa el color acentuado (claro) */}
                        <span className="font-serif font-bold text-[6rem] md:text-[10rem] lg:text-[12rem] tracking-tight text-[var(--color-texto-principal-claro)]">
                            Contigo
                        </span>
                    </div>
                </h1>

                <div className="mt-8 flex flex-col items-center gap-2">
                    <p className="text-[var(--color-texto)] tracking-[0.3em] uppercase text-xs md:text-sm font-sans font-bold">
                        Conferencia de Mujeres • Salmo 73:25-26
                    </p>

                    <div className="bg-[var(--color-texto)] text-[var(--color-fondo)] px-6 py-2 rounded-full font-sans text-sm md:text-base font-bold shadow-lg mt-4">
                        NOV 23 • 3:30 PM
                    </div>
                </div>
            </motion.div>

            {/* 3. CAPA: Figura en el Pico de la Montaña (Placeholder) */}
            <div className="absolute bottom-[58vh] right-[10vw] z-10 text-[var(--color-texto)]">
                [FIGURA]
            </div>


            {/* 4. CAPA: MONTAÑA DE ATRÁS (Parallax) */}
            <motion.div
                style={{ y: mountainBackY }}
                className="absolute bottom-0 left-0 right-0 z-0 w-full"
            >
                <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-50">
                    <path fill="var(--color-tierra)" fillOpacity="1" d="M0,192L80,170.7C160,149,320,107,480,96C640,85,800,107,960,133.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* 5. CAPA: DUNA DEL FRENTE (Estática, Z-30) */}
            <div className="absolute bottom-0 left-0 right-0 z-30 w-full pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="var(--color-tierra)" fillOpacity="1" d="M0,192L80,213.3C160,235,320,277,480,266.7C640,256,800,192,960,186.7C1120,181,1280,235,1360,261.3L1440,288L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <div className="bg-[var(--color-tierra)] h-20 w-full -mt-1" />
            </div>

            {/* 6. INDICADOR DE SCROLL */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 z-30 text-[var(--color-texto)] flex flex-col items-center opacity-70"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse animate-pulse">
                    <rect x="3" y="10" width="18" height="14" rx="6" />
                    <path d="M12 2v4" />
                </svg>
            </motion.div>
        </div>
    )
}