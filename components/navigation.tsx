import Link from "next/link"

export function Navigation() {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-beige-100/80 backdrop-blur-sm border-b border-coffee-dark/5">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link
                    href="#"
                    className="font-serif text-2xl tracking-tighter text-coffee-dark hover:opacity-70 transition-opacity flex items-center gap-1"
                >
          <span>
            CEC<span className="text-coffee-light">.</span>
          </span>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <Link
                        href="#concepto"
                        className="text-sm font-medium text-coffee-dark/70 hover:text-coffee-dark transition-colors"
                    >
                        Concepto
                    </Link>
                    <Link
                        href="#experiencia"
                        className="text-sm font-medium text-coffee-dark/70 hover:text-coffee-dark transition-colors"
                    >
                        Experiencia
                    </Link>
                    <Link
                        href="#ubicacion"
                        className="text-sm font-medium text-coffee-dark/70 hover:text-coffee-dark transition-colors"
                    >
                        Ubicación
                    </Link>
                </div>

                <Link
                    href="#registro"
                    className="hidden md:inline-flex border border-coffee-dark/20 bg-transparent text-coffee-dark px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-coffee-dark hover:text-white hover:border-coffee-dark"
                >
                    Reservar
                </Link>
            </div>
        </nav>
    )
}
