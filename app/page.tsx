import HeroParallax from './HeroParallax'
import CountdownSection from './CountdownSection'
import LocationSection from './LocationSection'

export default function Home() {
    return (
        // El fondo principal no define color para que el body (claro) se vea por defecto
        <main className="min-h-[300vh]">

            {/* 1. SECCIÓN HERO (Claro) */}
            <HeroParallax />

            {/* 2. SECCIÓN CUENTA REGRESIVA Y MÓDULOS (Oscuro) */}
            <CountdownSection />

            {/* 3. SECCIÓN UBICACIÓN Y MAPA (Claro) */}
            <LocationSection />

        </main>
    )
}