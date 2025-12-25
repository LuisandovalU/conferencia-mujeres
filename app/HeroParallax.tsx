'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function HeroParallax() {
    const container = useRef(null)

    useGSAP(() => {
        // 1. Animación de las Gaviotas (Vuelo suave)
        gsap.to(".gaviota", {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.2
        })

        // 2. Parallax: El texto se oculta detrás de las montañas
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.5 // Suaviza el movimiento
            }
        })

        tl.to(".header-content", { y: -350, opacity: 0 }, 0)
            .to(".m-lejos", { y: 120 }, 0)
            .to(".m-medio", { y: 60 }, 0)
            .to(".m-frente", { y: 0 }, 0)
    }, { scope: container })

    return (
        <section ref={container} className="relative w-full h-screen overflow-hidden bg-[#F4ECE2] flex flex-col items-center">

            {/* CAPA 0: CIELO Y GAVIOTAS */}
            <div className="absolute top-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 blur-[120px]" />

                {/* Gaviotas en formación (Estilo gaviota real) */}
                <div className="absolute top-32 right-[15%] flex gap-20 opacity-30">
                    {[1, 2, 3].map((i) => (
                        <svg key={i} className="gaviota" width="45" height="15" viewBox="0 0 60 20" fill="none" stroke="#5A3927" strokeWidth="2.5">
                            <path d="M2 18c12-18 20-5 28 0 8-5 16-18 28 0" strokeLinecap="round"/>
                        </svg>
                    ))}
                </div>
            </div>

            {/* CAPA 10: TEXTO (Se ocultará detrás de Z-20+) */}
            <div className="header-content relative z-10 mt-[18vh] text-center px-4 select-none">
                <span className="block text-xs tracking-[0.8em] uppercase mb-12 text-[#9F7E69] font-bold">
                    Conferencia de Mujeres
                </span>

                <h1 className="leading-[0.8] italic">
                    <span className="block font-serif text-[clamp(5rem,18vw,14rem)] text-[#5A3927] tracking-tighter">
                        Cuando
                    </span>
                    <div className="flex items-center justify-center -mt-6 md:-mt-10 gap-4 md:gap-10">
                        <span className="font-script text-3xl md:text-6xl text-[#9F7E69]">estoy</span>
                        <span className="font-serif font-bold text-[clamp(5rem,18vw,14rem)] text-[#5A3927] tracking-tighter">
                            Contigo
                        </span>
                    </div>
                </h1>

                <div className="mt-12 flex flex-col items-center gap-6">
                    <p className="text-[#5A3927] tracking-[0.4em] font-bold opacity-50 text-xs">SALMO 73:25-26</p>
                    <div className="bg-[#5A3927] text-[#F4ECE2] px-10 py-3 rounded-full text-xs font-bold tracking-widest shadow-xl">
                        NOV 23 • 3:30 PM
                    </div>
                </div>
            </div>

            {/* CAPA: 3 MONTAÑAS (Z-index superior al texto) */}

            {/* 1. Montaña Lejana (z-20) */}
            <div className="m-lejos absolute bottom-[-5%] w-full z-20">
                <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-30">
                    <path fill="#5A3927" d="M0,160L160,192C320,224,640,288,960,256C1280,224,1360,96,1440,32V320H0Z" />
                </svg>
            </div>

            {/* 2. Montaña Media (z-30) */}
            <div className="m-medio absolute bottom-[-8%] w-full z-30">
                <svg viewBox="0 0 1440 320" className="w-full h-auto opacity-70">
                    <path fill="#4A2E1F" d="M0,224L240,192C480,160,720,160,960,192C1200,224,1320,288,1440,320V320H0Z" />
                </svg>
            </div>

            {/* 3. Montaña Frente (z-40 - La que tapa todo) */}
            <div className="m-frente absolute bottom-0 w-full z-40">
                <svg viewBox="0 0 1440 320" className="w-full h-auto drop-shadow-[-20px_-15px_30px_rgba(0,0,0,0.1)]">
                    <path fill="#2D1B12" d="M0,288L180,256C360,224,720,160,1080,224C1260,256,1350,288,1440,320V320H0Z" />
                </svg>
                {/* Relleno para el scroll */}
                <div className="bg-[#2D1B12] h-[50vh] w-full -mt-1" />
            </div>

        </section>
    )
}