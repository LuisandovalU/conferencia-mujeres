import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

// Lazy load below-the-fold components for better initial load performance
const ConceptoSection = dynamic(() => import("@/components/concepto-section").then((mod) => mod.ConceptoSection))
const SpeakersSection = dynamic(() => import("@/components/speakers-section").then((mod) => mod.SpeakersSection))
const AgendaSection = dynamic(() => import("@/components/agenda-section").then((mod) => mod.AgendaSection))
const TestimoniosSection = dynamic(() => import("@/components/testimonios-section").then((mod) => mod.TestimoniosSection))
const ExperienciaSection = dynamic(() => import("@/components/experiencia-section").then((mod) => mod.ExperienciaSection))
const RegistroSection = dynamic(() => import("@/components/registro-section").then((mod) => mod.RegistroSection))
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer))

/**
 * Home page component that serves as the main landing page.
 * Orchestrates the rendering of various sections of the conference website.
 * 
 * @returns {JSX.Element} The rendered home page functionality.
 */
export default function Home() {
    return (
        <main className="bg-beige-100 text-coffee-dark font-sans selection:bg-coffee-light selection:text-white relative">
            {/* Texture Overlay: Adds a subtle noise effect to the entire page */}
            <div
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-[60] mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Core page sections */}
            <Navigation />
            <HeroSection />

            {/* Below-the-fold sections are lazy loaded */}
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
