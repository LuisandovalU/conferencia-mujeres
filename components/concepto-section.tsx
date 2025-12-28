export function ConceptoSection() {
    return (
        <section id="concepto" className="py-24 bg-white relative border-b border-coffee-dark/5">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 order-2 md:order-1">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-beige-200 rounded-md">
                        <span className="w-2 h-2 rounded-full bg-coffee-dark" />
                        <span className="text-coffee-dark font-bold text-xs tracking-widest uppercase">Manifiesto</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl text-coffee-dark leading-[1] tracking-tight">
                        Despojar el ruido,
                        <br />
                        encontrar <span className="italic text-coffee-light border-b-2 border-beige-300">la paz</span>
                    </h2>
                    <div className="space-y-6 text-coffee-dark/70 font-light text-lg leading-relaxed pl-6 border-l-2 border-beige-200">
                        <p>
                            Vivimos saturadas de información. &quot;Cuando estoy contigo&quot; no es una conferencia para hacer más,
                            sino un espacio para ser. Es volver al origen.
                        </p>
                    </div>
                </div>

                <div className="relative order-1 md:order-2 h-[550px] w-full p-2 border border-beige-200 rounded-[2rem] bg-beige-50">
                    <div className="h-full w-full rounded-[1.5rem] overflow-hidden relative group">
                        <img
                            src="/concepto-amigas.jpg"
                            alt="Mujeres conectando"
                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 sepia-[.2]"
                        />
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg rotate-3 max-w-[150px]">
                            <p className="font-serif text-lg leading-none mb-1 text-coffee-dark">Pausa.</p>
                            <p className="text-[10px] text-coffee-medium leading-tight">Un momento sagrado para el alma.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
