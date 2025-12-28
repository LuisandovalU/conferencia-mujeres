import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ConceptoSection } from "@/components/concepto-section"
import { SpeakersSection } from "@/components/speakers-section"
import { AgendaSection } from "@/components/agenda-section"
import { TestimoniosSection } from "@/components/testimonios-section"
import { ExperienciaSection } from "@/components/experiencia-section"
import { RegistroSection } from "@/components/registro-section"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="bg-beige-100 text-coffee-dark font-sans selection:bg-coffee-light selection:text-white relative">
            {/* Texture Overlay */}
            <div
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-[60] mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            <Navigation />
            <HeroSection />
            <ConceptoSection />
            <SpeakersSection />
            <AgendaSection />
            <TestimoniosSection />
            <ExperienciaSection />
            <RegistroSection />
            <Footer />
        </main>
    )
}
