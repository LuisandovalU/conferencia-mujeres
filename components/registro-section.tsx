import { Check, ArrowRight } from "lucide-react"

export function RegistroSection() {
    return (
        <section id="registro" className="py-24 bg-beige-100 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <div className="inline-block bg-coffee-light text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-2">
                        Last Call
                    </div>
                    <h2 className="font-serif text-6xl text-coffee-dark tracking-tighter">
                        Asegura
                        <br />
                        tu lugar
                    </h2>
                    <p className="text-lg text-coffee-dark/70 font-light max-w-md mx-auto md:mx-0">
                        No dejes pasar esta oportunidad. Cupo limitado para mantener la intimidad del evento.
                    </p>
                </div>

                <div className="md:w-1/2 w-full">
                    {/* Ticket Design */}
                    <div className="relative max-w-sm mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                        <div className="bg-white rounded-3xl overflow-hidden border border-beige-300">
                            <div className="bg-coffee-dark p-6 flex justify-between items-center text-beige-100">
                                <span className="font-serif text-xl">General Pass</span>
                                <span className="font-mono text-sm opacity-60">NO. 00154</span>
                            </div>

                            <div className="p-8 space-y-6 relative">
                                {/* Scalloped edge */}
                                <div
                                    className="absolute top-0 left-0 w-full h-2 rotate-180"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIwIiByPSIxMCIgZmlsbD0iIzRBM0IzMiIvPjwvc3ZnPg==")`,
                                    }}
                                />

                                {/* Cutouts */}
                                <div className="absolute top-1/2 -left-3 w-6 h-6 bg-beige-100 rounded-full border-r border-beige-300" />
                                <div className="absolute top-1/2 -right-3 w-6 h-6 bg-beige-100 rounded-full border-l border-beige-300" />

                                <div className="flex justify-between items-end border-b border-dashed border-beige-300 pb-6">
                                    <div>
                                        <p className="text-xs font-bold uppercase text-coffee-medium mb-1">Fecha</p>
                                        <p className="font-serif text-xl text-coffee-dark">Nov 23, 2025</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold uppercase text-coffee-medium mb-1">Hora</p>
                                        <p className="font-serif text-xl text-coffee-dark">03:30 PM</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-coffee-dark text-sm">
                                        <Check className="text-coffee-light w-4 h-4" />
                                        <span>Acceso Full Day</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-coffee-dark text-sm">
                                        <Check className="text-coffee-light w-4 h-4" />
                                        <span>Welcome Kit &amp; Merch</span>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-coffee-medium font-medium text-sm">Total</span>
                                        <span className="font-serif text-4xl text-coffee-dark">Q125</span>
                                    </div>
                                    <button className="w-full bg-coffee-dark text-beige-100 py-4 rounded-xl font-bold tracking-wide hover:bg-coffee-medium transition-colors flex justify-center items-center gap-2">
                                        COMPRAR TICKET <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
