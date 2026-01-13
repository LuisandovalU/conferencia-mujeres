const testimonials = [
    {
        quote: "Llegué buscando respuestas y encontré paz. No fue solo una conferencia, fue un abrazo al corazón.",
        name: "Ana Morales",
        year: "Asistente 2024",
        initial: "A",
    },
    {
        quote:
            "La atmósfera de adoración es indescriptible. Me sentí conectada con cientos de mujeres que buscaban lo mismo.",
        name: "Carla Ruíz",
        year: "Asistente 2023",
        initial: "C",
    },
    {
        quote: "Cada detalle, desde el café hasta la plenaria, fue hecho con excelencia. Salí renovada.",
        name: "Mariana Solís",
        year: "Asistente 2024",
        initial: "M",
    },
]

/**
 * Componente TestimoniosSection que muestra reseñas de asistentes previos.
 * Organiza las cotizaciones en una cuadrícula responsiva con efectos sutiles al pasar el cursor.
 * 
 * @returns {JSX.Element} La sección de testimonios renderizada.
 */
export function TestimoniosSection() {
    return (
        <section id="testimonios" className="py-24 bg-beige-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Cabecera de la sección centrada */}
                <div className="text-center mb-16 space-y-4 animate-fade-up">
                    <span className="text-coffee-light font-bold text-xs tracking-widest uppercase">Testimonios</span>
                    <h2 className="font-serif text-5xl text-coffee-dark tracking-tight">
                        Voces de la <span className="italic text-coffee-medium">Comunidad</span>
                    </h2>
                </div>

                {/* Cuadrícula de testimonios con animaciones de entrada escalonadas */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.name}
                            className="bg-white p-8 rounded-2xl border border-beige-200 hover:border-coffee-light/30 transition-colors relative group shadow-sm animate-fade-up"
                            style={{ animationDelay: `${(index + 1) * 100}ms` }}
                        >
                            {/* Comilla decorativa de fondo */}
                            <div className="absolute top-6 right-6 text-beige-200 group-hover:text-coffee-light/10 transition-colors font-serif text-6xl leading-none">
                                &quot;
                            </div>
                            <p className="font-serif text-lg text-coffee-dark italic leading-relaxed mb-6 relative z-10">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            {/* Información del autor del testimonio */}
                            <div className="flex items-center gap-4 border-t border-beige-100 pt-4">
                                <div className="w-10 h-10 rounded-full bg-beige-200 flex items-center justify-center text-coffee-dark font-serif font-bold">
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-coffee-dark">{testimonial.name}</p>
                                    <p className="text-[10px] text-coffee-medium uppercase tracking-wide">{testimonial.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
