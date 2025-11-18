'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroParallax() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // MOVIMIENTO PARALLAX REFINADO
    // El texto baja un poco más rápido para esconderse tras las dunas
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
    // La montaña de atrás se mueve muy poco para dar profundidad
    const mountainBackY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    return (
        <div
            ref={ref}
            className="relative w-full h-screen overflow-hidden bg-[#F4ECE2] flex flex-col items-center justify-center"
        >
            {/* 1. CAPA: TEXTO PRINCIPAL (Va detrás de la duna del frente) */}
            {/* z-10 para que esté encima del fondo pero detrás de la duna frontal */}
            <motion.div
                style={{ y: textY }}
                className="relative z-10 flex flex-col items-center text-center mt-[-100px]" // Subimos un poco el texto
            >
                <h1 className="text-[#5A3927] leading-none drop-shadow-sm">
                    {/* "Cuando" Gigante */}
                    <span className="block font-serif text-[5rem] md:text-[8rem] lg:text-[10rem]">
            Cuando
          </span>

                    {/* Fila de en medio: "estoy" + "Contigo" */}
                    <div className="flex items-center justify-center gap-2 md:gap-6 -mt-4 md:-mt-10">
            <span className="font-sans italic font-light text-2xl md:text-4xl mt-2 md:mt-6 text-[#8C6B5D]">
              estoy
            </span>
                        <span className="font-serif font-bold text-[5rem] md:text-[8rem] lg:text-[10rem]">
              Contigo
            </span>
                    </div>
                </h1>

                {/* Detalles del evento */}
                <div className="mt-8 flex flex-col items-center gap-3">
                    <p className="text-[#5A3927] tracking-[0.3em] uppercase text-xs md:text-sm font-sans font-bold">
                        Conferencia de Mujeres
                    </p>

                    {/* Pastilla de fecha */}
                    <div className="bg-[#5A3927] text-[#F4ECE2] px-6 py-2 rounded-full font-sans text-sm md:text-base font-bold shadow-lg">
                        NOV 23 • 3:30 PM
                    </div>
                </div>
            </motion.div>

            {/* 2. CAPA: MONTAÑA DE ATRÁS (Dibujo SVG) */}
            <motion.div
                style={{ y: mountainBackY }}
                className="absolute bottom-0 left-0 right-0 z-0 w-full"
            >
                {/* Una curva suave color café claro */}
                <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-50">
                    <path fill="#8C6B5D" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* 3. CAPA: DUNA DEL FRENTE (Dibujo SVG - La más importante) */}
            {/* z-20 para tapar el texto cuando baje */}
            <div className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none">
                {/* Una curva pronunciada color café oscuro */}
                <svg viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="#5A3927" fillOpacity="1" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                {/* Relleno extra por si la pantalla es muy alta */}
                <div className="bg-[#5A3927] h-20 w-full -mt-1" />
            </div>

        </div>
    )
}