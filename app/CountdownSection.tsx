'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import ExperienceModules from './ExperienceModules'; // <--- NUEVO IMPORT

// Componente para la pastilla del tiempo
const TimePill = ({ time, label }: { time: string; label: string }) => (
    <div className="bg-[var(--color-marron-suave)] p-4 md:p-6 rounded-xl shadow-2xl w-20 md:w-32 text-center">
        <p className="text-4xl md:text-6xl font-serif text-[var(--color-acento-dorado)] font-bold">
            {time}
        </p>
        <p className="text-xs md:text-sm font-sans tracking-widest uppercase mt-1 text-[var(--color-texto-claro)] opacity-80">
            {label}
        </p>
    </div>
);

export default function CountdownSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section
            ref={ref}
            className="relative z-50 bg-[var(--color-fondo-oscuro)] pt-20 pb-10 px-4 min-h-screen border-t border-[var(--color-marron-suave)]"
        >
            <div className="max-w-6xl mx-auto">
                {/* Título de la sección */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="font-serif text-center text-5xl md:text-7xl mb-12 text-[var(--color-texto-claro)]"
                >
                    El Encuentro Comienza En
                </motion.h2>

                {/* Cuenta Regresiva */}
                <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-20">
                    <TimePill time="00" label="DÍAS" />
                    <TimePill time="00" label="HORAS" />
                    <TimePill time="00" label="MINUTOS" />
                    <TimePill time="00" label="SEGUNDOS" />
                </div>

                {/* Badge de Evento Exclusivo y Foto Placeholder (simplificado) */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative bg-[var(--color-marron-suave)] p-6 rounded-full inline-block shadow-2xl"
                    >
                         <span className="font-sans tracking-widest uppercase text-lg text-[var(--color-acento-dorado)]">
                            RESERVAR MI LUGAR
                         </span>
                        <span className="absolute top-0 right-0 px-2 py-1 bg-red-600 text-white text-xs rounded-full transform translate-x-1/2 -translate-y-1/2">
                            Exclusivo
                         </span>
                    </motion.div>
                </div>

                {/* 3. AHORA MOSTRAMOS LOS MÓDULOS DE EXPERIENCIA */}
                <ExperienceModules />

            </div>
        </section>
    );
}