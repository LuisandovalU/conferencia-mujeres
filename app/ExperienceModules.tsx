// ExperienceModules.tsx

'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'; // Necesario para usar useInView
import { BookOpen, Heart, Users, Music, Sparkles, CalendarCheck } from 'lucide-react'

// 1. Componente de Tarjeta Individual (¡ANIMACIÓN MEJORADA!)
const ExperienceCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => {
    const ref = useRef(null)
    // Detecta la visibilidad para que cada tarjeta se anime al entrar
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }} // Estado inicial con desenfoque, pequeño y bajo
            animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}} // Estado final: claro, tamaño real, en posición
            transition={{
                duration: 0.8, // Duración de la animación
                delay: delay, // Retraso para que aparezcan en secuencia
                type: 'spring', // Tipo de animación más elástica
                stiffness: 100 // Hace el movimiento más "fuerte"
            }}
            className="relative bg-[var(--color-marron-suave)] p-6 md:p-8 rounded-2xl border border-[var(--color-marron-suave)] hover:border-[var(--color-acento-dorado)] transition-all duration-300 shadow-xl flex flex-col items-start space-y-3"
        >
            {/* El Icono Dorado */}
            <div className="p-3 bg-[var(--color-acento-dorado)]/20 rounded-xl">
                <Icon className="text-[var(--color-acento-dorado)]" size={30} />
            </div>

            {/* Título (Font Serif - Elegante) */}
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[var(--color-texto-claro)] mt-2">
                {title}
            </h3>

            {/* Descripción (Font Sans - Lectura) */}
            <p className="font-sans text-sm md:text-base text-[var(--color-texto-claro)] opacity-70">
                {description}
            </p>
        </motion.div>
    );
};

// 2. Componente Principal con el Grid (Sin cambios aquí)
export default function ExperienceModules() {
    return (
        <div className="max-w-6xl mx-auto pt-16 pb-20">
            {/* Título de la sección (Réplica exacta de Figma) */}
            <h2 className="font-serif text-center text-5xl md:text-7xl mb-4 text-[var(--color-texto-claro)]">
                Una Velada Transformadora
            </h2>
            <p className="text-center text-lg mt-4 text-[var(--color-texto-claro)] opacity-80 max-w-3xl mx-auto mb-16">
                Más que un evento, una experiencia diseñada para tocar tu corazón y renovar tu espíritu.
            </p>

            {/* Grid 3x2 (Se vuelve 2x3 en móvil) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ExperienceCard
                    icon={Heart}
                    title="Renovación Espiritual"
                    description="Un encuentro íntimo con la presencia de Dios que transformará tu vida."
                    delay={0.1}
                />
                <ExperienceCard
                    icon={BookOpen}
                    title="Enseñanza Profunda"
                    title="Enseñanza Profunda"
                    description="Palabra viva que penetrará tu corazón y renovará tu mente."
                    delay={0.2}
                />
                <ExperienceCard
                    icon={Users}
                    title="Hermandad Genuina"
                    description="Conecta con mujeres de fe en una comunidad de amor y apoyo."
                    delay={0.3}
                />
                <ExperienceCard
                    icon={Music}
                    title="Adoración Poderosa"
                    description="Momentos de adoración que elevarán tu espíritu."
                    delay={0.4}
                />
                <ExperienceCard
                    icon={Sparkles}
                    title="Experiencia Premium"
                    description="Ambiente exclusivo diseñado para tu comodidad y bendición."
                    delay={0.5}
                />
                <ExperienceCard
                    icon={CalendarCheck}
                    title="Evento Memorable"
                    description="Una velada que quedará grabada en tu corazón para siempre."
                    delay={0.6}
                />
            </div>
        </div>
    );
}