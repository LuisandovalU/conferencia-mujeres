import HeroParallax from './HeroParallax'

export default function Home() {
    return (
        <main className="bg-[#F4ECE2] min-h-screen">

            {/* Aquí está tu portada animada */}
            <HeroParallax />

            {/* Contenido extra para hacer scroll y probar el efecto */}
            <section className="relative z-40 bg-[#5A3927] text-[#F4ECE2] py-20 px-6 min-h-screen -mt-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-serif text-[#C69C6D]">
                        Salmo 73:25-26
                    </h2>
                    <p className="text-xl md:text-2xl font-sans font-light leading-relaxed opacity-90">
                        "¿A quién tengo yo en los cielos sino a ti? <br/>
                        Y fuera de ti nada deseo en la tierra."
                    </p>

                    <div className="h-px w-20 bg-[#C69C6D] mx-auto my-10 opacity-50" />

                    <h3 className="text-2xl font-serif mb-4">Ubicación</h3>
                    <p className="text-lg">
                        Salón Ambar Rossell Palace<br/>
                        Entrada por Calle Uxmal 344
                    </p>
                </div>
            </section>
        </main>
    )
}