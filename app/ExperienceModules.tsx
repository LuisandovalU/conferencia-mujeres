'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import { BookOpen, Heart, Users, Music, Sparkles, CalendarCheck } from 'lucide-react'

// Componente de Tarjeta Individual con animación de revelación
const ExperienceCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{
                duration: 0.8,
                delay: delay,
                type: 'spring',
                stiffness: 100
            }}
            className="relative bg-[var(--color-marron-suave)] p-6 md:p-8 rounded-2xl border border-[var(--color-marron-suave)] hover:border-[var(--color-acento-dorado)] transition-all duration-300 shadow-xl flex flex-col items-start space-y-3"
        >
            <div className="p-3 bg-[var(--color-acento-dorado)]/20 rounded-xl">
                <Icon className="text-[var(--color-acento-dorado)]" size={30} />
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[var(--color-texto-claro)] mt-2">
                {title}
            </h3>

            <p className="font-sans text-sm md:text-base text-[var(--color-texto-claro)] opacity-70">
                {description}
            </p>
        </motion.div>
    );
};

export default function ExperienceModules() {
    return (
        <div className="max-w-6xl mx-auto pt-16 pb-20">
            <h2 className="font-serif text-center text-5xl md:text-7xl mb-4 text-[var(--color-texto-claro)]">
                Una Velada Transformadora
            </h2>
            <p className="text-center text-lg mt-4 text-[var(--color-texto-claro)] opacity-80 max-w-3xl mx-auto mb-16">
                Más que un evento, una experiencia diseñada para tocar tu corazón y renovar tu espíritu.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ExperienceCard icon={Heart} title="Renovación Espiritual" description="Un encuentro íntimo con la presencia de Dios que transformará tu vida." delay={0.1}/>
                <ExperienceCard icon={BookOpen} title="Enseñanza Profunda" description="Palabra viva que penetrará tu corazón y renovará tu mente." delay={0.2}/>
                <ExperienceCard icon={Users} title="Hermandad Genuina" description="Conecta con mujeres de fe en una comunidad de amor y apoyo." delay={0.3}/>
                <ExperienceCard icon={Music} title="Adoración Poderosa" description="Momentos de adoración que elevarán tu espíritu." delay={0.4}/>
                <ExperienceCard icon={Sparkles} title="Experiencia Premium" description="Ambiente exclusivo diseñado para tu comodidad y bendición." delay={0.5}/>
                <ExperienceCard icon={CalendarCheck} title="Evento Memorable" description="Una velada que quedará grabada en tu corazón para siempre." delay={0.6}/>
            </div>
        </div>
    );
}