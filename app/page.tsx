import HeroParallax from './HeroParallax'
import CountdownSection from './CountdownSection' // <--- AÑADE ESTA LÍNEA

export default function Home() {
    return (
        <main className="bg-[var(--color-fondo-oscuro)] min-h-[300vh]"> {/* Ajusté el fondo principal */}

            {/* 1. SECCIÓN HERO */}
            <HeroParallax />

            {/* 2. SECCIÓN CUENTA REGRESIVA Y VALOR */}
            <CountdownSection />

            {/* Contenido extra de prueba */}
            <section className="h-[50vh] bg-[var(--color-fondo-oscuro)] border-t border-[var(--color-marron-suave)]">
                <h2 className="text-center pt-20 text-3xl">Aquí irá la sección de Ubicación</h2>
            </section>
        </main>
    )
}