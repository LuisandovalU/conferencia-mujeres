// app/page.tsx
import HeroParallax from './HeroParallax' // FIX: Sin llaves { }
import CountdownSection from './CountdownSection'
import LocationSection from './LocationSection'

export default function Home() {
    return (
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