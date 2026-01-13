import { Gift, Coffee, Camera, Users } from "lucide-react"

/**
 * Componente ExperienciaSection que muestra los "activos y el ambiente" del evento.
 * Presenta una cuadrícula estilo bento de tarjetas, cada una representando un aspecto único de la conferencia.
 * 
 * @returns {JSX.Element} La sección de experiencia renderizada.
 */
export function ExperienciaSection() {
    return (
        <section id="experiencia" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Cabecera de la Sección: Explica el "ambiente" y qué esperar */}
                <div className="max-w-2xl mb-16 animate-fade-up">
                    <h2 className="font-serif text-5xl md:text-6xl text-coffee-dark mb-6 tracking-tight">
                        Vivir la <span className="italic text-coffee-light">Experiencia</span>
                    </h2>
                    <p className="text-coffee-dark/60 text-lg font-light leading-relaxed">
                        Cada detalle ha sido diseñado para que tu única preocupación sea estar presente.
                    </p>
                </div>

                {/* Diseño de Cuadrícula: Cuadrícula estilo bento para variedad visual */}
                <div className="grid md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {/* Tarjeta de Kit de Bienvenida: Enfatiza el aspecto del regalo físico */}
                    <div className="md:col-span-2 md:row-span-2 bg-beige-100 rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative animate-fade-up">
                        <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                            <span className="text-coffee-medium font-bold text-xs tracking-widest uppercase mb-4 block">01</span>
                            <h3 className="font-serif text-4xl text-coffee-dark mb-4">Welcome Kit</h3>
                            <p className="text-coffee-dark/60 font-light max-w-[200px]">
                                Un detalle tangible para acompañar tu proceso de transformación.
                            </p>
                        </div>
                        <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Gift className="w-24 h-24" />
                        </div>
                    </div>

                    {/* Tarjeta de Café/Gastronomía: Tarjeta cuadrada pequeña */}
                    <div className="md:col-span-2 bg-beige-200 rounded-[2.5rem] p-10 flex items-center justify-between group hover:bg-coffee-dark hover:text-white transition-all duration-500 animate-fade-up" style={{ animationDelay: '100ms' }}>
                        <div className="transition-transform duration-500 group-hover:translate-x-2">
                            <h3 className="font-serif text-3xl">Coffee & Food</h3>
                            <p className="text-sm opacity-60 font-light">Especialmente curado para ti.</p>
                        </div>
                        <Coffee className="w-12 h-12 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                    </div>

                    {/* Tarjeta de Puntos Fotográficos: Aspecto visual/social */}
                    <div className="bg-beige-50 border border-beige-200 rounded-[2.5rem] p-10 flex flex-col justify-end group transition-colors hover:border-coffee-light animate-fade-up" style={{ animationDelay: '200ms' }}>
                        <Camera className="w-10 h-10 text-coffee-light mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-serif text-xl text-coffee-dark">Photo Spots</h3>
                    </div>

                    {/* Tarjeta de Conexión Comunitaria: Valor abstracto/social */}
                    <div className="bg-coffee-dark text-white rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden group animate-fade-up" style={{ animationDelay: '300ms' }}>
                        <Users className="absolute -top-4 -right-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform duration-700" />
                        <h3 className="font-serif text-xl relative z-10">Comunidad</h3>
                        <p className="text-xs text-white/60 font-light mt-2 relative z-10">Conecta con otras mujeres.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
