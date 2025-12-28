import { Coffee, Music, Mic } from "lucide-react"

const agendaItems = [
    {
        time: "08:00",
        period: "AM",
        title: "Registro & Welcome Coffee",
        description: "Recoge tu kit en el lobby principal.",
        icon: Coffee,
    },
    {
        time: "09:30",
        period: "AM",
        title: "Sesión 1: Apertura",
        description: "Adoración con Banda CEC y Bienvenida.",
        icon: Music,
    },
    {
        time: "11:00",
        period: "AM",
        title: "Plenaria: Restaurando el Altar",
        description: "Speaker: Elena Vasquez",
        icon: Mic,
        isKeynote: true,
    },
]

export function AgendaSection() {
    return (
        <section id="agenda" className="py-24 bg-white border-y border-beige-200">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-3 h-3 bg-coffee-dark rounded-sm" />
                    <h2 className="font-serif text-4xl text-coffee-dark">Programa del Día</h2>
                    <div className="flex-grow h-px bg-beige-200 ml-4" />
                    <span className="text-sm font-mono text-coffee-medium">15.11.2025</span>
                </div>

                <div className="grid gap-4">
                    {agendaItems.map((item) => (
                        <div
                            key={item.time}
                            className="group grid md:grid-cols-[140px_1fr_auto] gap-6 p-6 rounded-2xl border border-beige-100 hover:border-coffee-dark hover:bg-beige-50 transition-all items-center"
                        >
                            <div className="text-center md:text-left">
                                <span className="block text-2xl font-bold text-coffee-dark font-sans tracking-tight">{item.time}</span>
                                <span className="text-xs uppercase text-coffee-medium font-bold tracking-wider">{item.period}</span>
                            </div>
                            <div>
                                {item.isKeynote && (
                                    <div className="inline-block bg-coffee-dark text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1">
                                        KEYNOTE
                                    </div>
                                )}
                                <h3 className="font-serif text-xl text-coffee-dark group-hover:text-coffee-light transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-coffee-dark/60 text-sm mt-1 font-light">{item.description}</p>
                            </div>
                            <div className="hidden md:block">
                                <div className="w-10 h-10 rounded-full border border-beige-200 flex items-center justify-center text-coffee-medium group-hover:border-coffee-light group-hover:text-coffee-light transition-colors">
                                    <item.icon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
