import { ShoppingBag, Coffee, ArrowUpRight, Camera, Users } from "lucide-react"

export function ExperienciaSection() {
    return (
        <section id="experiencia" className="py-24 bg-coffee-dark text-beige-100 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                        <span className="text-coffee-light font-bold text-xs tracking-widest uppercase">The Experience</span>
                        <h3 className="font-serif text-5xl text-beige-50 mt-2">
                            Assets <span className="italic text-coffee-light">&amp;</span> Vibe
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                    {/* Card Grande 1: Kit */}
                    <div className="md:col-span-2 md:row-span-2 bg-beige-100 text-coffee-dark rounded-3xl p-1 relative overflow-hidden group">
                        <div className="relative h-full w-full bg-white rounded-[1.2rem] p-8 flex flex-col justify-between overflow-hidden border border-beige-200 min-h-[400px]">
                            <div className="flex justify-between items-start">
                                <h4 className="font-serif text-3xl">Welcome Kit</h4>
                                <ShoppingBag className="text-coffee-medium w-6 h-6" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 translate-x-4 translate-y-4">
                                <img
                                    src="/kit-bienvenida.jpg"
                                    alt="Welcome Kit"
                                    className="object-cover w-full h-full rounded-tl-3xl grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl sepia-[.2]"
                                />
                            </div>
                            <div className="relative z-10 mt-auto">
                <span className="text-xs font-bold uppercase tracking-wider border border-beige-200 px-2 py-1 rounded bg-white text-coffee-medium">
                  Incluido
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Coffee */}
                    <div className="md:col-span-2 md:row-span-1 bg-coffee-medium rounded-3xl p-6 flex items-center justify-between group hover:bg-coffee-light transition-colors text-white relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
                            <Coffee className="w-32 h-32" />
                        </div>
                        <div className="relative z-10 space-y-2">
                            <h4 className="font-serif text-2xl">Specialty Coffee</h4>
                            <p className="text-sm text-white/80 max-w-[200px]">Baristas ilimitados durante todo el evento.</p>
                        </div>
                        <div className="relative z-10 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Card 3: Photo */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/10 transition-colors min-h-[150px]">
                        <div className="w-8 h-8 rounded-full bg-beige-50/10 flex items-center justify-center">
                            <Camera className="text-beige-100 w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl text-beige-50">Photo Spots</h4>
                            <p className="text-xs text-beige-200/70 mt-1">#CoquetteVibes</p>
                        </div>
                    </div>

                    {/* Card 4: Connection */}
                    <div className="md:col-span-1 md:row-span-1 bg-coffee-darker border border-white/10 rounded-3xl p-6 flex flex-col justify-between group overflow-hidden relative min-h-[150px]">
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
                            }}
                        />
                        <div className="relative z-10 w-8 h-8 rounded-full bg-coffee-light flex items-center justify-center">
                            <Users className="text-white w-4 h-4" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="font-serif text-xl text-beige-50">Community</h4>
                            <p className="text-xs text-beige-100/80 mt-1">Conecta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
