import Link from "next/link"

/**
 * Componente Footer que muestra información de la marca, enlaces de navegación y derechos de autor.
 * Utiliza un tema oscuro para proporcionar peso visual al final de la página.
 * 
 * @returns {JSX.Element} La sección de pie de página renderizada.
 */
export function Footer() {
    return (
        <footer className="bg-coffee-darker text-beige-200 pt-20 pb-28 md:pb-10 border-t border-white/5 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 animate-fade-up">
                    {/* Área de Branding de la Marca */}
                    <div className="space-y-4">
                        <p className="font-serif text-4xl text-beige-50">CEC.25</p>
                        <p className="text-beige-200/60 font-light max-w-xs">
                            Conferencia de Mujeres. <br />
                            Diseñada con propósito.
                        </p>
                    </div>

                    {/* Enlaces de Navegación Rápida */}
                    <div className="grid grid-cols-2 md:flex gap-12 text-sm">
                        <div className="flex flex-col gap-4">
                            <span className="font-bold text-beige-50 uppercase tracking-widest text-[10px]">Navegación</span>
                            <Link href="#speakers" className="hover:text-coffee-light transition-colors">
                                Speakers
                            </Link>
                            <Link href="#agenda" className="hover:text-coffee-light transition-colors">
                                Agenda
                            </Link>
                            <Link href="#registro" className="hover:text-coffee-light transition-colors">
                                Tickets
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Barra Inferior: Copyright y Slogan */}
                <div className="border-t border-white/10 pt-8 flex justify-between items-center text-xs opacity-40 font-mono animate-fade-in">
                    <p>© 2025 Iglesia CEC.</p>
                    <p>Designed for Soul.</p>
                </div>
            </div>
        </footer>
    )
}
