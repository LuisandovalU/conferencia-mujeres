import Image from "next/image"

const speakers = [
    {
        name: "Elena Vasquez",
        role: "Autora",
        image: "/speaker-ana-martinez.jpg",
        isKeynote: false,
    },
    {
        name: "Sofia M.",
        role: "Psicóloga",
        image: "/speaker-maria-gonzalez.jpg",
        isKeynote: true,
    },
    {
        name: "Banda CEC",
        role: "Worship",
        image: "/speaker-worship.jpg",
        isKeynote: false,
    },
]

/**
 * Componente SpeakersSection que destaca a los conferencistas y a la banda de adoración del evento.
 * Utiliza una cuadrícula responsiva para mostrar tarjetas con insignias de especialidad.
 * 
 * @returns {JSX.Element} La sección de conferencistas renderizada.
 */
export function SpeakersSection() {
    return (
        <section id="speakers" className="py-24 bg-beige-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Cabecera de la Sección: Título alineado a la izquierda con metadatos a la derecha */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 pb-6 border-b border-coffee-dark/10 animate-fade-up">
                    <div>
                        <span className="text-coffee-medium font-bold text-xs tracking-widest uppercase mb-2 block">
                            Line Up 2025
                        </span>
                        <h2 className="font-serif text-5xl text-coffee-dark tracking-tight">
                            Voces <span className="italic text-coffee-light">&amp;</span> Historias
                        </h2>
                    </div>
                    {/* Etiqueta identificadora sutil */}
                    <div className="hidden md:flex flex-col items-end opacity-20">
                        <span className="text-[10px] font-mono mt-1 text-coffee-dark">AX-2025-SPK</span>
                    </div>
                </div>

                {/* Cuadrícula de Conferencistas: Renderizada dinámicamente desde el array speakers */}
                <div className="grid md:grid-cols-3 gap-8">
                    {speakers.map((speaker, index) => (
                        <div
                            key={speaker.name}
                            className={`bg-white rounded-2xl p-2 border border-beige-200 group hover:-translate-y-2 transition-transform duration-300 relative animate-fade-up ${speaker.isKeynote ? "shadow-xl z-10 md:-mt-8" : "shadow-sm"
                                }`}
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                            {/* Contenedor de Imagen: Los keynotes tienen fondos de color diferentes */}
                            <div
                                className={`rounded-xl overflow-hidden aspect-[4/5] relative mb-4 ${speaker.isKeynote ? "bg-coffee-dark" : "bg-beige-200"
                                    }`}
                            >
                                <Image
                                    src={speaker.image || "/placeholder.svg"}
                                    alt={speaker.name}
                                    fill
                                    className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${speaker.isKeynote ? "opacity-90" : "sepia-[.15]"
                                        }`}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                {/* Insignia superpuesta para los conferencistas principales (Keynote) */}
                                {speaker.isKeynote && (
                                    <div className="absolute top-2 right-2 bg-white text-coffee-dark text-[10px] font-bold px-2 py-1 rounded z-10">
                                        KEYNOTE
                                    </div>
                                )}
                            </div>
                            {/* Información del Conferencista: Nombre y Rol */}
                            <div className="px-2 pb-4 text-center">
                                <h3 className="font-serif text-2xl text-coffee-dark leading-none mb-2">{speaker.name}</h3>
                                {!speaker.isKeynote && (
                                    <p className="text-xs font-bold uppercase tracking-wider text-coffee-medium border border-beige-200 rounded-full py-1 px-3 inline-block">
                                        {speaker.role}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
