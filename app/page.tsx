import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

// Carga diferida (Lazy loading) de componentes debajo del primer pantallazo (fold) para mejorar el rendimiento inicial
const ConceptoSection = dynamic(() => import("@/components/concepto-section").then((mod) => mod.ConceptoSection), {
    loading: () => <div className="h-96 bg-beige-50 animate-pulse" />
})
const SpeakersSection = dynamic(() => import("@/components/speakers-section").then((mod) => mod.SpeakersSection), {
    loading: () => <div className="h-96 bg-beige-100 animate-pulse" />
})
const AgendaSection = dynamic(() => import("@/components/agenda-section").then((mod) => mod.AgendaSection), {
    loading: () => <div className="h-96 bg-beige-50 animate-pulse" />
})
const TestimoniosSection = dynamic(() => import("@/components/testimonios-section").then((mod) => mod.TestimoniosSection), {
    loading: () => <div className="h-96 bg-beige-100 animate-pulse" />
})
const ExperienciaSection = dynamic(() => import("@/components/experiencia-section").then((mod) => mod.ExperienciaSection), {
    loading: () => <div className="h-96 bg-beige-50 animate-pulse" />
})
const RegistroSection = dynamic(() => import("@/components/registro-section").then((mod) => mod.RegistroSection), {
    loading: () => <div className="h-96 bg-beige-100 animate-pulse" />
})
const LocationSection = dynamic(() => import("./LocationSection"), {
    loading: () => <div className="h-96 bg-beige-50 animate-pulse" />
})
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer))

/**
 * Página principal que sirve como el punto de entrada principal del sitio.
 * Orquesta el renderizado de las diversas secciones del sitio web de la conferencia.
 * 
 * @returns {JSX.Element} La funcionalidad de la página de inicio renderizada.
 */
export default function Home() {
    return (
        <main className="bg-beige-100 text-coffee-dark font-sans selection:bg-coffee-light selection:text-white relative">
            {/* Superposición de Textura: Añade un efecto sutil de ruido a toda la página para una estética premium */}
            <div
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-[60] mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Secciones principales de la página */}
            <Navigation />
            <HeroSection />

            {/* Las secciones debajo del fold se cargan bajo demanda para optimizar el LCP (Largest Contentful Paint) */}
            <ConceptoSection />
            <SpeakersSection />
            <AgendaSection />
            <TestimoniosSection />
            <ExperienciaSection />
            <RegistroSection />
            <LocationSection />
            <Footer />
        </main>
    )
}
