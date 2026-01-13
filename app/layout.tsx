import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const dmSerif = DM_Serif_Display({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-dm-serif",
    style: ["normal", "italic"],
})

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
})

export const metadata: Metadata = {
    title: "Cuando estoy | Conferencia de Mujeres 2025",
    description: "Conferencia de Mujeres 2025 - Un espacio para ser, volver al origen.",
    generator: "v0.app",
}


/**
 * Componente RootLayout que envuelve toda la aplicación.
 * Define las fuentes globales, metadatos y elementos estructurales como las etiquetas HTML y Body.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos que se renderizarán dentro del diseño.
 * @returns {JSX.Element} La estructura HTML raíz de la aplicación.
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            {/* Inyecta las variables de fuente y aplica los estilos base */}
            <body className={`${inter.variable} ${dmSerif.variable} ${geistMono.variable} font-sans antialiased`}>
                {children}
                {/* Vercel Analytics para el seguimiento de vistas de página y rendimiento */}
                <Analytics />
            </body>
        </html>
    )
}
